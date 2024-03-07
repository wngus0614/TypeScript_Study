//맵드 타입

//1. Partial<T>
// 가장 처음으로 살펴볼 유틸리티 타입은 Partial<T> 타입입니다. 
// Partial은 부분적인 또는 일부분의 라는 뜻으로 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변환합니다. 
// 따라서 기존 객체 타입에 정의된 프로퍼티들 중 일부분만 사용할 수 있도록 도와주는 타입입니다.

//1-1. 동기부여
// 이번에는 간단한 블로그 플랫폼의 일부를 직접 구현한다고 가정해 보겠습니다.
// 일단 다음과 같이 게시글 하나를 표현하는 타입을 먼저 선언합니다.
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnailURL?: string;
// }
// 다음으로 임시 저장 기능이 필요하다고 가정하겠습니다. 
// 그럼 다음과 같이 임시 저장된 게시글을 변수로 저장할 수 있어야 합니다.
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnailURL?: string;
// }

// const draft: Post = { // ❌ tags 프로퍼티가 없음
//   title: "제목은 나중에 짓자...",
//   content: "초안...",
// };
// 그런데 이때 문제가 발생합니다. 
// 위와 같이 게시글의 일부 정보가 아직 설정되어 있지 않은 임시 저장 게시글의 경우에도 변수에 저장할 수 있어야 하는데 해당 변수를 Post 타입으로 정의하면 오류가 발생하게 됩니다.
// 그렇다고 임시 저장 게시글 기능을 위해 Post 타입의 모든 프로퍼티를 선택적 프로퍼티로 설정하는 것도 곤란합니다. 
// 진짜 작성이 완료되어 화면에 렌더링 될 게시글들은 이 모든 프로퍼티를 진짜 다 가지고 있어야 하기 때문입니다. 
// 이럴 때에는 어떻게 해야 할까요?

//1-2. Partial<T> 타입으로 문제 해결하기
// 이런 상황에 다음과 같이 Partial<T> 유틸리티 타입을 이용하면 좋습니다.
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnailURL?: string;
// }

// const draft: Partial<Post> = {
//   title: "제목 나중에 짓자",
//   content: "초안...",
// };
// Partial<T> 타입은 타입 변수 T로 전달한 객체 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 변환합니다. 
// 따라서 Partial<Post> 타입은 모든 프로퍼티가 선택적 프로퍼티가 된 Post 타입과 같습니다.

//1-3. Partial<T> 구현하기
// 그럼 이번에는 Partial<T> 유틸리티 타입을 직접 구현해 보겠습니다. 
// 천천히 하나씩 만들어보겠습니다. 일단 하나의 타입 변수 T를 사용하는 제네릭 타입인 것 만은 확실합니다.
// type Partial<T> = any;
// 다음으로는 T에 할당된 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줘야 합니다. 
// 기존 객체 타입을 다른 타입으로 변환하는 타입은 맵드 타입이었습니다. 따라서 맵드 타입을 이용해 다음과 같이 수정합니다.
type Partial<T> = {
  [key in keyof T]?: T[key];
};
//이렇게 Partial<T> 타입 구현을 마쳤습니다.


//2. Required<T>
// 다음으로 살펴볼 유틸리티 타입은 Required<T> 입니다. 
// Required는 우리말로 필수의, 필수적인 이라는 뜻으로 특정 객체 타입의 모든 프로퍼티를 필수(선택적이지 않은) 프로퍼티로 변환합니다.

//2-1. 동기부여
//앞서 살펴본 예제에 이어서 이번에는 썸네일이 반드시 있어야 하는 게시글이 하나 필요하다고 가정하겠습니다.
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnailURL?: string;
// }

// const draft: Partial<Post> = {
//   title: "제목 나중에 짓자",
//   content: "초안...",
// };
// // 반드시 썸네일 프로퍼티가 존재해야 하는 게시글
// const withThumbnailPost: Post = {
//   title: "한입 타스 후기",
//   tags: ["ts"],
//   content: "",
//   thumbnailURL: "https://...",
// };
// withThumbnailPost는 모종의 이유(마케팅 등)로 반드시 썸네일이 포함된 게시글이어야 합니다. 
// 그런데 Post 타입의 thumbnailURL 프로퍼티가 현재 선택적 프로퍼티로 설정되어 있기 때문에 다음과 같이 실수로 주석 처리하거나 삭제한다고 해도 타입 오류가 발생하지는 않습니다.

//2-2. Required<T> 타입으로 문제 해결하기
// 바로 이런 상황에 다음과 같이 Required<T> 타입을 이용하면 됩니다. 
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnailURL?: string;
// }

// const draft: Partial<Post> = {
//   title: "제목 나중에 짓자",
//   content: "초안...",
// };

// const withThumbnailPost: Required<Post> = { // ❌
//   title: "한입 타스 후기",
//   tags: ["ts"],
//   content: "",
//   // thumbnailURL: "https://...",
// };
// Required<Post>는 Post 타입의 모든 프로퍼티가 필수 프로퍼티로 변환된 객체 타입입니다. 
// 따라서 위 코드처럼 thumbnailURL 프로퍼티를 생략하면 이제 오류가 발생하게 됩니다.

//2-3. Required<T> 구현하기
// Required<T> 타입도 직접 구현 해 보겠습니다. 
// 생각해보면 앞서 만들어 본 Partial<T> 타입과 거의 유사합니다. 
// 따라서 일단 기존의 모든 프로퍼티를 포함하는 제네릭 맵드 타입으로 만들어 주겠습니다.
// type Required<T> = {
//   [key in keyof T]: T[key];
// };
// 그리고 나서 이제 모든 프로퍼티가 필수 프로퍼티가 되도록 만들어야 합니다. 
// 모든 프로퍼티를 필수 프로퍼티로 만든다는 말은 반대로 바꿔보면 모든 프로퍼티에서 ‘선택적’ 이라는 기능을 제거하는 것 과 같습니다. 
// 따라서 다음과 같이 -?를 프로퍼티 이름 뒤에 붙여주면 됩니다.
type Required<T> = {
  [key in keyof T]-?: T[key];
};
// -? 는 ?가 붙어있는 선택적 프로퍼티가 있으면 ?를 제거하라는 의미입니다. 


//3. Readonly<T>
// 마지막으로 살펴볼 유틸리티 타입은 Readonly<T> 입니다. 
// Readonly는 우리말로 읽기 전용 이라는 뜻으로 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 변환합니다.

//3-1. 동기부여
// 이번에는 앞서 만들던 예제에 이어서 절대 내부를 수정할 수 없는 보호된 게시글이 하나 필요하다고 가정하겠습니다.
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnailURL?: string;
// }

// const readonlyPost: Post = {
//   title: "보호된 게시글입니다.",
//   tags: [],
//   content: "",
// };

// readonlyPost.content = '해킹당함';
//변수 readonlyPost는 보호받아야 하는 게시글로 절대 객체 내부의 값을 수정하지 못하게 막아야 한다고 가정했습니다. 
// 그러나 Post 타입의 모든 프로퍼티가 다 readonly 설정이 안되어 있기 때문에 지금은 수정을 방지하지 못합니다.

//3-2. Readonly<T>로 문제 해결하기
// 이럴 때 바로 다음과 같이 Readonly<T> 유틸리티 타입을 이용하면 됩니다.
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnailURL?: string;
// }

// const readonlyPost: Readonly<Post> = {
//   title: "보호된 게시글입니다.",
//   tags: [],
//   content: "",
// };

// readonlyPost.content = '해킹당함'; // ❌
// Readonly<Post>는 Post 타입의 모든 프로퍼티를 readonly(읽기 전용) 프로퍼티로 변환합니다. 
// 따라서 점표기법을 이용해 특정 프로퍼티의 값을 수정하려고 하면 오류를 발생시킵니다.

//3-3. Readonly<T> 구현하기
// Readonly<T>도 직접 구현해 보겠습니다. 
// 앞서 Partial<T>과 Required<T> 타입을 구현해 보았다면 어렵지 않을 겁니다.
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};