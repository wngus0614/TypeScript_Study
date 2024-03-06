//맵드 타입
// 맵드 타입은 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 마법같은 타입 조작 기능입니다. 
// 예제와 함께 살펴보겠습니다. 이번에는 유저 정보를 관리하는 간단한 프로그램의 일부분을 만든다고 가정합니다. 먼저 유저 객체 타입을 정의합니다.
// interface User {
//     id: number;
//     name: string;
//     age: number;
// }

//다음으로는 유저 정보가 서버에 저장되어 있다고 가정하고, 한명의 유저 정보를 불러오는 기능을 함수로 만듭니다.
// function fetchUser():User{
//     //...기능
//     return{
//         id:1,
//         name:"이주현",
//         age:27
//     };
// }

//그리고 한 명의 유저 정보를 수정하는 기능도 만들어 주겠습니다. 실제로 서버가 존재하는 것은 아니니까 함수 내부는 구현 했다고 치고 주석으로 비워두겠습니다.
// function updateUser(User:User) {
//     //...수정하는 기능
// }

// updateUser({
//     id: 1,
//     name : "이주현",
//     age: 25
// });
// updateUser 함수는 수정된 유저 객체를 받아 유저 정보를 수정합니다. 
// 따라서 유저 정보를 수정 하려면 다음과 같이 이 함수를 호출하고 여러개의 정보 중 수정하고 싶은 프로퍼티만 전달 해 주면 됩니다.
// updateUser({ // ❌
//     age: 25
//   });
// // 그런데 updateUser 함수의 매개변수 타입이 User 타입으로 되어 있어서 수정하고 싶은 프로퍼티만 골라서 보낼 수 없는 상황입니다. 
// 따라서 어쩔 수 없이 다음과 같이 새로운 타입을 만들어 주어야 합니다.

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in "id"|"name"|"age"]:User[key];
}

function fetchUser():PartialUser{
    //...기능
    return{
        id:1,
        name:"이주현",
        age:27
    };
}

function updateUser(User:PartialUser) {
    //...수정하는 기능
}

updateUser({
    id: 1,
    name : "이주현",
    age: 25
});

// PartialUser 타입을 맵드 타입을 이용해 아까와 동일한 타입으로 정의했습니다. 
// 문법을 자세히 살펴보면 다음과 같습니다
// [key in “id” | “name” | “age”] 는 이 객체 타입은 key가 한번은 id, 한번은 name, 한번은 age가 된다는 뜻 입니다. 따라서 다음과 같이 3개의 프로퍼티를 갖는 객체 타입으로 정의됩니다.
// key가 “id” 일 때 → id : User[id] → id : number
// key가 “name”일 때 → name : User[user] → name : string
// key가 “age”일 때 → age : User[age] → age : number
// 여기에 대 괄호 뒤에 선택적 프로퍼티를 의미하는 물음표(?) 키워드가 붙어있으므로 모든 프로퍼티가 선택적 프로퍼티가 되어 결론적으로 이 타입은 다음과 같은 타입이 됩니다.
// type PartialUser = {
//     [key in keyof User]?: User[key];
//   };

//마지막으로 맵드 타입을 이용해 모든 프로퍼티가 읽기 전용 프로퍼티가 된 타입을 만들면 다음과 같습니다.
// interface User {
//     id: number;
//     name: string;
//     age: number;
//   }
  
//   type PartialUser = {
//     [key in keyof User]?: User[key];
//   };
  
//   type ReadonlyUser = {
//     readonly [key in keyof User]: User[key];
//   };