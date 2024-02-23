// 대수타입
// 대수 타입이란 여러개의 타입을 합성해서 만드는 타입을 말합니다. 지난 시간에 객체 타입의 호환성을 이해하셨다면 이제 대수타입도 쉽게 이해하실 수 있습니다.
// 대수 타입에는 합집합 타입과 교집합 타입이 존재합니다. 합집합은 Union 타입, 교집합은 Intersection 타입이라고 부릅니다. 하나씩 천천히 살펴보겠습니다.

// 합집합(Union) 타입
// 다음과 같이 string과 number의 유니온 타입을 정의할 수 있습니다. 바 | 를 이용합니다.
// 유니온 타입에 참여하는 타입들의 개수에는 제한이 없습니다. 만약 boolean 타입도 함께 유니온 타입으로 구성하고 싶다면 다음과 같이 그냥 추가하면 됩니다.
// 합집합 타입 - Union 타입
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

// Union 타입으로 배열 타입 정의하기
// 이렇게 살펴본 유니온 타입을 이용하면 다양한 타입의 요소를 보관하는 배열 타입을 손쉽게 정의할 수 있습니다.
let arr: (number | string | boolean)[] = [1, "hello", true];

// Union 타입과 객체 타입
// 다음과 같이 여러개의 객체 타입의 유니온 타입도 얼마든지 정의할 수 있습니다.
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

//이렇게 정의된 Union1 타입은 다음과 같이 교집합이 존재하는 두 집합으로 표현할 수 있습니다.

let union1: Union1 = { // ✅
  name: "",
  color: "",
};

let union2: Union1 = { // ✅
  name: "",
  language: "",
};

let union3: Union1 = { // ✅
  name: "",
  color: "",
  language: "",
};

//반면 다음과 같은 객체는 포함하지 않습니다.
// let union4: Union1 = { // ❌
//   name: "",
// };


// 교집합(Intersection) 타입
// 다음과 같이 string과 number의 인터섹션 타입을 정의할 수 있습니다 &을 이용합니다.
let variable: number & string; 
// never 타입으로 추론된다

// 그런데 number 타입과 string 타입은 서로 교집합을 공유하지 않는 서로소 집합이므로 변수 variable의 타입은 결국 never 타입으로 추론됩니다.
// 대다수의 기본 타입들 간에는 서로 공유하는 교집합이 없기 때문에 이런 인터섹션 타입은 보통 객체 타입들에 자주 사용됩니다. 

// Intersection 타입과 객체 타입
// 다음은 두 객체 타입의 인터섹션 타입을 정의하는 예 입니다.
type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
//위 코드의 Intersection 타입을 집합으로 표현하면 다음과 같습니다. 앞서 살펴본 유니온 타입의 그림과 차이점을 자세히 살펴보길 바랍니다.
