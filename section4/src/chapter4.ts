//사용자 정의 타입 가드
//사용자 정의 타입가드란 참 또는 거짓을 반환하는 함수를 이용해 우리 입맛대로 타입 가드를 만들 수 있도록 도와주는 타입스크립트의 문법입니다.
// 간단한 예제와 함께 살펴보겠습니다.

// type Dog = {
//   name: string;
//   isBark: boolean;
// };

// type Cat = {
//   name: string;
//   isScratch: boolean;
// };

// type Animal = Dog | Cat;

// function warning(animal: Animal) { // 동물들에 대한 경고 함수
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "짖습니다" : "안짖어요");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
//   }
// }
//2개의 타입 Dog와 Cat을 정의하고 두 타입의 유니온 타입인 Animal 타입을 정의했습니다.
// 다음으로 매개변수로 Animal 타입의 값을 받아 동물에 따라 각각 다른 경고를 콘솔에 출력하는 함수 warning을 만들어 주었습니다.
// 만약 이 함수를 호출하고 인수로 Dog 타입의 객체를 전달하면 “짖습니다” 또는 “안짖어요”를 출력할 것이고 
// Cat 타입의 객체를 전달하면 “할큅니다” 또는 “안 할퀴어요”를 출력할 것 입니다.

//그런데 이렇게 in 연산자를 이용해 타입을 좁히는 방식은 좋지 않다고 이전에 살펴본 적 있습니다. 
//예를 들어 만약 Dog 타입의 프로퍼티가 다음과 같이 중간에 이름이 수정되거나 추가 또는 삭제될 경우에는 타입 가드가 제대로 동작하지 않을 수도 있습니다.
//따라서 이럴 때에는 다음과 같이 함수를 이용해 커스텀 타입 가드를 만들어 타입을 좁히는게 더 좋습니다.
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// Dog 타입인지 확인하는 타입 가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}
//isDog 함수는 매개변수로 받은 값이 Dog 타입이라면 true 아니라면 false를 반환합니다. 
//이때 반환값의 타입으로 animal is Dog 를 정의하면 이 함수가 true를 반환하면 조건문 내부에서는 이 값이 Dog 타입임을 보장한다는 의미가 됩니다. 
//따라서 warning 함수에서 isDog 함수를 호출해 매개변수의 값이 Dog 타입인지 확인하고 타입을 좁힐 수 있습니다.