//맵드 타입

//1. Pick<T, K>
// 이번 챕터에서 가장 먼저 살펴볼 유틸리티 타입은 Pick<T, K> 타입입니다. Pick은 우리말로 뽑다, 고르다 라는 뜻입니다. 
// 따라서 특정 객체 타입으로부터 특정 프로퍼티 만을 골라내는 그런 타입입니다. 
// 예를 들어 Pick 타입에 T가 name, age가 있는 객체 타입이고 K가 name 이라면 결과는 name만 존재하는 객체 타입이 됩니다.

//1-1. 동기부여
//이번에는 이전 시간에 만들던 예제에 이어서 다음과 같이 옛날에 작성된 포스트가 하나 존재한다고 가정하겠습니다.
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnailURL?: string;
// }

// const legacyPost: Post = { // ❌
//   title: "",
//   content: "",
// };

// 이때 legacyPost에 저장되어 있는 게시글은 태그나 썸네일 기능이 추가되기 이전에 만들어진 게시글이라고 가정합니다. 
// 그런데 이 변수를 Post 타입으로 설정하면 tags 프로퍼티가 존재하기 때문에 오류가 발생하게 됩니다.
// 어떻게 해야 할까요? 옛날에 작성된 게시글이 몇개나 될 지도 모르기 때문에 일일이 tags를 추가해 줄 수도 없고 그렇다고 옛 게시글들 만을 위한 타입을 별도로 만들어 줄 수도 없는 노릇입니다. 

//1-2. Pick<T, K>로 문제 해결하기
// 이럴 때 바로 다음과 같이 Pick을 이용하면 됩니다.
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnailURL?: string;
// }

// const legacyPost: Pick<Post, "title" | "content"> = {
//   title: "",
//   content: "",
// };
// 추출된 타입 : { title : string; content : string }

// 변수 legacyPost의 타입으로 Pick<Post, "title" | "content">을 정의했습니다. 
// 따라서 이때 타입변수 T에는 Post가 타입변수 K에는 “title” | “content” 이 각각 할당됩니다. 
// 그럼 Post 타입으로부터 “title”과 “content” 프로퍼티만 쏙 뽑아낸 객체 타입이 됩니다.


//1-3. Pick<T, K> 타입 구현하기
// Pick 타입을 직접 구현해 보겠습니다. 이번에도 역시 객체 타입을 변형하는 타입이므로 맵드 타입을 이용해 만들 수 있습니다.
// 일단 2개의 타입 변수 T와 K를 사용하는 타입이므로 다음과 같이 정의합니다.
// type Pick<T, K> = any;
// 다음으로 T로 부터 K 프로퍼티만 뽑아낸 객체 타입을 만들어야 하므로 다음과 같이 맵드 타입으로 정의합니다.
// type Pick<T, K> = {
//   [key in K]: T[key];
// };
// 마지막으로는 K가 T의 key로만 이루어진 String Literal Union 타입임을 보장해 주어야 합니다. 따라서 다음과 같이 제약을 추가합니다.
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};


//2. Omit<T,K>
// 다음으로 살펴볼 유틸리티 타입은 Omit<T, K> 타입입니다. Omit은 우리말로 생략하다, 빼다 라는 뜻입니다. 따라서 특정 객체 타입으로부터 특정 프로퍼티 만을 제거하는 타입입니다. 
// 예를 들어 Omit 타입에 T가 name, age가 있는 객체 타입이고 K가 name 이라면 결과는 name을 제외하고 age 프로퍼티만 존재하는 객체 타입이 됩니다.

//2-1. 동기부여
//이번에는 제목이 없는(title 프로퍼티가 생략된) 게시글도 존재할 수 있다고 가정하겠습니다.
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// const noTitlePost: Post = { // ❌
//   content: "",
//   tags: [],
//   thumbnailURL: "",
// };
//title 프로퍼티가 없으면 오류가 발생하게 됩니다.


//2-2. Omit<T, K>로 문제 해결하기
// 다음과 같이 Omit을 이용해 Post 타입으로부터 title 프로퍼티를 제거한 타입으로 변수의 타입을 정의해 주면 됩니다.
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

//2-3. Omit<T, K> 구현하기
// 먼저 2개의 타입 변수를 사용하는 제네릭 타입이므로 일단 다음과 같이 정의합니다.
// type Omit<T, K> = any;
// 그 다음 앞서 Pick 타입에서 했던 것 과 같이 K에 제약을 추가합니다.
// type Omit<T, K extends keyof T> = any;
// 그리고 이때 앞서 만든 Pick 타입을 이용해 다음과 같이 완성합니다.
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//이해하기 어려울 수 있으므로 천천히 설명해 보겠습니다.
// 일단 T는 Post, K는 ‘title’ 이라고 가정하겠습니다.
// 그럼 이때 keyof T는 ‘title’ | ‘content’ | ‘tags’ | ‘thumbnailURL’이므로 Pick<T, Exclude<keyof T, K>>은 Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL' , 'title>> 이 됩니다.
// 다음으로 Exclude는 앞서 조건부 타입을 살펴볼 때 직접 만들어 본 적 있는 타입입니다. 이 타입은 2개의 타입 변수를 할당받는데 T로부터 K를 제거합니다. 따라서 한번 더 변환하면 다음과 같습니다.
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>
// 그럼 결과는 Post에서 content, tags, thubmnailURL 프로퍼티만 존재하는 객체 타입이 됩니다. 따라서 K에 전달한 ‘title’이 제거된 타입을 얻을 수 있습니다.


//3. Record<K, V>
// 마지막으로 살펴볼 타입은 Record<K, V> 입니다. 

//3-1. 동기부여
// 이번에는 썸네일 기능을 업그레이드 해 보겠습니다. 
// 다음과 같이 화면 크기에 따라 3가지 버전의 썸네일을 지원한다고 가정하겠습니다. Thumbnail 타입을 별도로 정의합니다.
// type Thumbnail = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
// };
// 그런데 여기에 watch 버전이 또 추가되어야 한다고 가정합니다. 
// 그럼 다음과 같이 똑같이 생긴 프로퍼티를 하나 더 추가해줘야 합니다. 앞으로 버전이 많아질 수록 계속해서 중복코드가 발생하게 될 겁니다.
// type Thumbnail = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
//   watch: { //추가
//     url: string;
//   };
// };

//3-2. Record<K, V> 타입으로 문제 해결하기
// 이럴 때 바로 Record를 이용하면 됩니다. 다음과 같이 K에는 어떤 프로퍼티들이 있을지 String Literal Union 타입을 할당하고 V에는 프로퍼티의 값 타입을 할당합니다.
type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string }
>;
// 위 Record 타입은 K에는 “large” | “medium” |  “small”이 할당되었으므로 large, medium, small 프로퍼티가 있는 객체 타입을 정의합니다. 
// 그리고 각 프로퍼티 value의 타입은 V에 할당한 { url : stirng } 이 됩니다.

//3-3. Record<K, V> 구현하기
// Record 타입은 다음과 같이 구현할 수 있습니다.
type Record<K extends keyof any, V> = {
  [key in K]: V;
};