//Promise 사용하기
// Promise는 제네릭 클래스로 구현되어 있습니다. 
// 따라서 새로운 Promise를 생성할 때 다음과 같이 타입 변수에 할당할 타입을 직접 설정해 주면 해당 타입이 바로 resolve 결과값의 타입이 됩니다.
// 다음과 같이 비동기 작업을 만들어봅시다.
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {  //setTimeout 함수를 이용해 3초 뒤에 resolve를 호출하고 결과값으로 20을 전달합니다.
      // 결과값 : 20
      resolve(20);
    }, 3000);
  });
  
  promise.then((response) => {
    // response는 number 타입
    console.log(response);
  });
  
  promise.catch((error) => {
    if (typeof error === "string") {
      console.log(error);
    }
  });
// 아쉽게도 reject 함수에 인수로 전달하는 값 즉 실패의 결과값 타입은 정의할 수 없습니다. 
// 그냥 unknown 타입으로 고정되어 있기 때문에 catch 메서드에서 사용하려면 타입 좁히기를 통해 안전하게 사용하는걸 권장합니다.
// 만약 어떤 함수가 Promise 객체를 반환한다면 함수의 반환값 타입을 위해 다음과 같이 할 수 있습니다.
// interface Post {
// 	id:number;
// 	title:string;
// 	content:string;
// }

// function fetchPost() {
//   return new Promise<Post>((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         id: 1,
//         title: "게시글 제목",
//         content: "게시글 본문",
//       });
//     }, 3000);
//   });
// }
// const postRequest = fetchPost();

// postRequest.then((post)=>{
// 	post.id
// });
//또는 더 직관적으로 다음과 같이 반환값 타입을 직접 명시해도 됩니다.
interface Post {
	id:number;
	title:string;
	content:string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 본문",
      });
    }, 3000);
  });	
}
const postRequest = fetchPost();

postRequest.then((post)=>{
	post.id
});