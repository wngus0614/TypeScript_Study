//인덱스드 엑세스 타입
// 인덱스드 엑세스 타입은 인덱스를 이용해 다른 타입내의 특정 프로퍼티의 타입을 추출하는 타입입니다. 
// 인덱스드 엑세스 타입은 객체, 배열, 튜플에 사용할 수 있기 때문에 세가지 예시를 순서대로 모두 살펴보겠습니다.

//객체 프로퍼티의 타입 추출하기
// 다음과 같은 게시글을 표현하는 객체 타입이 있다고 가정합니다. 그리고 게시글도 하나 변수로 만들어 주겠습니다.
// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//   };
// }

// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "이주현",
//   },
// };
// 만약 이때 이 게시글에서 작성자의 이름과 아이디를 붙여서 출력하는 어떤 함수가 하나 있어야 한다면 다음과 같이 해야 합니다.
// function printAuthorInfo(author: { id: number; name: string }) {
//   console.log(`${author.id} - ${author.name}`);
// }
// 그런데 매개변수의 타입을 이렇게 정의하면 나중에 Post 타입의 author 프로퍼티의 타입이 다음과 같이 수정되면 매개변수의 타입도 그때 마다 계속 수정해줘야 하는 불편함이 존재합니다.
// 이럴 때에는 다음과 같이 인덱스드 엑세스 타입을 이용해 Post에서 author 프로퍼티의 타입을 추출해 사용하면 편리합니다.
// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number; // 추가
//   };
// }


// function printAuthorInfo(author: Post["author"]) {
//   console.log(`${author.id} - ${author.name}`);
// }

// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "이주현",
//     age:27
//   }
// };
// Post["author"]는 Post 타입으로부터 author 프로퍼티의 타입을 추출합니다. 그 결과 author 매개변수의 타입은 {id : number, name: string, age:number}가 됩니다. 
// 이때 대괄호 속에 들어가는 String Literal 타입인 “author” 를 인덱스 라고 부릅니다. 그래서 인덱스를 이용해 특정 타입에 접근하다고 하여 인덱스드 엑세스 타입이라 부릅니다.
// 주의할 점은 인덱스에는 값이 아니라 타입만 들어갈 수 있습니다. 따라서 다음과 같이 “author”를 문자열 값으로 다른 변수에 저장하고 다음과 같이 인덱스로 사용하려고 하면 오류가 발생합니다.
// const authorKey = "author";

// function printAuthorInfo(author: Post[authorKey]) { // ❌
//   console.log(`${author.id} - ${author.name}`);
// }

//또 한가지 주의할 점은 인덱스에 존재하지 않는 프로퍼티 이름을 쓰면 오류가 발생합니다.
// function printAuthorInfo(author: Post["what"]) { // ❌
//   console.log(`${author.id} - ${author.name}`);
// }

//또는 다음과 같이 인덱스를 중첩하여 사용할 수도 있습니다.
// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }


// function printAuthorInfo(author: Post["author"]['id']) {
// 	// author 매개변수의 타입은 number 타입이 됨
//   console.log(`${author.id} - ${author.name}`);
// }


//배열 요소의 타입 추출하기
// 인덱스드 엑세스 타입은 객체 프로퍼티의 타입 뿐만 아니라 특정 배열의 요소 타입을 추출하는데에도 이용할 수 있습니다. 
// 실습을 위해 앞서 만든 Post 타입을 다음과 같이 PostList 배열 타입으로 수정합니다.
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];
//그럼 인덱스드 엑세스 타입을 이용해 다음과 같이 이 PostList 배열 타입에서 하나의 요소의 타입만 뽑아올 수 있습니다.
// const post: PostList[number] = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "이주현",
//     age: 27
//   }
// };
//PostList[number]는 PostList 배열 타입으로부터 요소의 타입을 추출하는 인덱스드 엑세스 타입입니다. 이렇듯 배열의 요소 타입을 추출할 때에는 인덱스에 number 타입을 넣어주면 됩니다.
// 또 인덱스에 다음과 같이 Number Literal 타입을 넣어도 됩니다. 숫자와 관계없이 모두 Number 타입을 넣은 것과 동일하게 동작합니다.
const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이주현",
    age: 27
  }
}; 

//튜플의 요소 타입 추출하기
// 마지막으로 튜플의 각 요소들의 타입또한 다음과 같이 인덱스드 엑세스 타입으로 쉽게 추출할 수 있습니다.
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

type Tup3 = Tup[number];
// number | string | boolean

//한가지 주의할 점은 튜플 타입에 인덱스드 엑세스 타입을 사용할 때 인덱스에 number 타입을 넣으면 마치 튜플을 배열 처럼 인식해 배열 요소의 타입을 추출하게 됩니다.