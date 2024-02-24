//함수 타입 표현식
//다음과 같이 함수 타입을 타입 별칭과 함께 별도로 정의할 수 있습니다. 이를 함수 타입 표현식(Function Type Expression)이라고 부릅니다.
// type Add = (a: number, b: number) => number;

// const add: Add = (a, b) => a + b;
//변수 add의 타입을 함수 타입 표현식으로 정의한 함수 타입으로 정의했습니다.
// 이렇게 함수 타입 표현식을 이용하면 함수 선언 및 구현 코드와 타입 선언을 분리할 수 있어 유용합니다.
//함수 타입 표현식은 다음과 같이 여러개의 함수가 동일한 타입을 갖는 경우에 요긴하게 사용됩니다.
// const add = (a: number, b: number) => a + b;
// const sub = (a: number, b: number) => a - b;
// const multiply = (a: number, b: number) => a * b;
// const divide = (a: number, b: number) => a / b;
//위 코드를 함수 타입 표현식을 이용하면 다음과 같이 간결하게 만들 수 있습니다. 또 나중에 동일한 타입의 함수가 추가되어도 타입 주석을 이용해 타입 정의만 해주면 되어 매우 편리합니다.
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;


//호출 시그니처
//호출 시그니처(Call Signature)는 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식입니다.
// type Operation2 = {
//   (a: number, b: number): number;
// };

// const add2: Operation2 = (a, b) => a + b;
// const sub2: Operation2 = (a, b) => a - b;
// const multiply2: Operation2 = (a, b) => a * b;
// const divide2: Operation2 = (a, b) => a / b;
//자바스크립트에서는 함수도 객체이기 때문에, 위 코드처럼 객체를 정의하듯 함수의 타입을 별도로 정의할 수 있습니다. 

//참고로 이때 다음과 같이 호출 시그니쳐 아래에 프로퍼티를 추가 정의하는 것도 가능합니다. 
//이렇게 할 경우 함수이자 일반 객체를 의미하는 타입으로 정의되며 이를 하이브리드 타입이라고 부릅니다.
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1, 2);
add2.name;