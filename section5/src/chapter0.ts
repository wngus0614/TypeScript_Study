//인터페이스
//인터페이스란 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법입니다.
// 예를 들어 간단한 Person 객체의 타입을 정의한다면 다음과 같이 할 수 있습니다.
interface Person {
  name: string;
  age: number;
}
// 이렇게 정의한 인터페이스를 타입 주석과 함께 사용해 변수의 타입을 정의할 수 있습니다.
const person: Person = {
  name: "이주현",
  age : 27
};
//이렇듯 인터페이스는 타입 별칭과 문법만 조금 다를 뿐 기본적인 기능은 거의 같다고 볼 수 있습니다.


// 선택적 프로퍼티
// 인터페이스에서도 동일한 방법으로 선택적 프로퍼티 설정이 가능합니다.
interface Person2 {
  name: string;
  age?: number;
}

const person2: Person2 = {
  name: "이주현",
  // age: 27,
};


// 읽기 전용 프로퍼티
// 읽기 전용 프로퍼티 또한 동일한 방법으로 설정 가능합니다.
interface Person3 {
  readonly name: string;
  age?: number;
}

const person3: Person3 = {
  name: "이주현",
  // age: 27,
};

// person3.name = "홍길동"; // ❌


//메서드 타입 정의하기
// 다음과 같이 메서드의 타입을 정의하는 것 또한 가능합니다. 
// interface Person4 {
//   readonly name: string;
//   age?: number;
//   sayHi: () => void;
// }
//함수 타입 표현식을 이용해 sayHi 메서드의 타입을 정의했습니다.
// 함수 타입 표현식 말고 다음과 같이 호출 시그니쳐를 이용해 메서드의 타입을 정의할 수도 있습니다.
// interface Person4 {
//   readonly name: string;
//   age?: number;
//   sayHi(): void;
// }


// 메서드 오버로딩
// 함수 타입 표현식으로 메서드의 타입을 정의하면 메서드의 오버로딩 구현이 불가능합니다.
// interface Person5 {
//   readonly name: string;
//   age?: number;
//   sayHi: () => void; 
//   sayHi: (a: number, b: number) => void; // ❌
// }
//그러나 호출 시그니처를 이용해 메서드의 타입을 정의하면 오버로딩 구현이 가능합니다.
interface Person5 {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void;
}


// 하이브리드 타입
//인터페이스또한 함수이자 일반 객체인 하이브리드 타입을 정의할 수 있습니다.
interface Func2 {
  (a: number): string;
  b: boolean;
}

const func: Func2 = (a) => "hello";
func.b = true;

// 주의할 점1
//인터페이스는 대부분의 상황에 타입 별칭과 동일하게 동작하지만 몇가지 차이점이 존재합니다. 
//타입 별칭에서는 다음과 같이 Union이나 Intersection 타입을 정의할 수 있었던 반면 인터페이스에서는 할 수 없습니다.
// type Type1 = number | string;
// type Type2 = number & string;

// interface Person {
//   name: string;
//   age: number;
// } | number // ❌

//따라서 인터페이스로 만든 타입을 Union 또는 Intersection으로 이용해야 한다면 다음과 같이 타입 별칭과 함께 사용하거나 타입 주석에서 직접 사용해야 합니다.
// type Type1 = number | string | Person;
// type Type2 = number & string & Person;

// const person: Person & string = {
//   name: "이주현",
//   age: 27,
// };