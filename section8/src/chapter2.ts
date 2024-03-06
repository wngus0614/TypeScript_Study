//Keyof 연산자
// keyof 연산자는 객체 타입으로부터 프로퍼티의 모든 key들을 String Literal Union 타입으로 추출하는 연산자입니다.
// 다음은 keyof 연산자를 사용하는 예시입니다.
// interface Person {
//     name: string;
//     age: number;
//   }
  
//   function getPropertyKey(person: Person, key: "name" | "age") {
//     return person[key];
//   }
  
//   const person: Person = {
//     name: "이주현",
//     age: 27
//   };
// Person 객체 타입을 정의하고 해당 타입을 갖는 변수를 하나 선언합니다.
// 그리고 getPropertyKey 함수를 만듭니다. 이 함수는 두개의 매개변수가 있으며 두번째 매개변수 key에 해당하는 프로퍼티의 값을 첫번째 매개변수 person에서 꺼내 반환합니다.
// 이때 key의 타입을 “name” | “age”로 정의했는데 이렇게 정의하면 다음과 같이 Person 타입에 새로운 프로퍼티가 추가되거나 수정될 때 마다 이 타입도 계속 바꿔줘야 합니다.
// 이렇게 매번 매개변수의 타입을 바꿔줘야 하면 함수가 많아지면 많아질수록 불편해집니다. 이럴 때 다음과 같이 Keyof 연산자를 이용하면 좋습니다.
// interface Person {
//   name: string;
//   age: number;
//   location: string; // 추가
// }

// function getPropertyKey(person: Person, key: keyof Person) {
//   return person[key];
// }

// const person: Person = {
//   name: "이주현",
//   age: 27,
//   location: "대구"
// };
// keyof 연산자는 위와 같이 keyof 타입 형태로 사용하며 타입의 모든 프로퍼티 key를 String Literal Union 타입으로 추출합니다. 
// 따라서 keyof Person의 결과값은 “name” | “age” | “location”이 됩니다.
// 한가지 주의할 점은 keyof 연산자는 오직 타입에만 적용할 수 있는 연산자 라는 점 입니다. 따라서 다음과 같이 값과 함께 사용하려고 하면 오류가 발생합니다.
// function getPropertyKey(person: Person, key: keyof person) { // ❌
//   return person[key];
// }

// const person: Person = {
//   name: "이주현",
//   age: 27,
//   location: "대구"
// };


//Typeof와 Keyof 함께 사용하기
// typeof 연산자는 자바스크립트에서 특정 값의 타입을 문자열로 반환하는 연산자 였습니다. 그러나 다음과 같이 타입을 정의할 때 사용하면 특정 변수의 타입을 추론하는 기능도 가지고 있습니다.
type Person = typeof person;
// 결과
// {name: string, age: number, location:string}

//이런 특징을 이용하면 keyof 연산자를 다음과 같이 사용할 수 있습니다.
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "이주현",
  age: 27,
  location: "대구"
};