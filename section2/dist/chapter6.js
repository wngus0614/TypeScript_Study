// any
// 특정 변수의 타입을 우리가 확실히 모를때
// any 타입은 타입스크립트에서만 제공되는 특별한 타입으로 타입 검사를 받지 않는 특수한 치트키 타입이다.
let anyVar = 10;
anyVar = "hello";
let num = 10;
num = anyVar;
//unKnown
//unknown 타입은 any 타입과 비슷하지만 보다 안전한 타입이다. 
//unknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장할 수 있다.
//그러나 반대로는 안된다. unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없다.
//또 unknown 타입의 값은 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용할 수 없다.
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
// num = unknownVar; // 오류 !
//쉽게 정리하면 오직 값을 저장하는 행위밖에 할 수 없게 된다.
//만약 위와 같이 unknown 타입의 값을 number 타입의 값처럼 취급하고 곱셈 연산을 수행하게 하고 싶다면 
//다음과 같이 조건문을 이용해 이 값이 number 타입의 값임을 보장해줘야 합니다.
if (typeof unknownVar === "number") {
    // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
    unknownVar * 2;
}
export {};
//따라서 특정 변수가 당장 어떤 값을 받게 될 지 모른다면 any 타입으로 정의하는 것 보단 unknown 타입을 이용하는게 훨씬 안전한 선택이 된다.
