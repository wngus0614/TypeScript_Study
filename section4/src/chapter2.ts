// 함수 타입 호환성
// 함수 타입의 호환성이란 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는 것을 의미합니다.
// 다음 2가지 기준으로 함수 타입의 호환성을 판단하게 됩니다.
// 두 함수의 반환값 타입이 호환되는가?
// 두 함수의 매개변수의 타입이 호환되는가?
// 첫번째 기준부터 차례대로 살펴보겠습니다.

// 기준 1 : 반환값 타입이 호환되는가?
// A와 B 함수 타입이 있다고 가정할 때 A 반환값 타입이 B 반환값 타입의 슈퍼타입이라면 두 타입은 호환됩니다.
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
// b = a; // ❌ , 다운캐스팅이므로
//A의 반환값 타입은 Number, B의 반환값 타입은 Number Literal 입니다. 따라서 변수 a에 b를 할당하는 것은 가능하나 반대로는 불가능 합니다.

// 기준 2: 매개변수의 타입이 호환되는가?
// 두번째 기준인 매개변수의 타입이 호환되는지 판단할 때에는 두 함수의 매개변수의 개수가 같은지 다른지에 따라 두가지 유형으로 나뉘게 됩니다.
// 2-1. 매개변수의 개수가 같을 때
//두 함수 타입 C와 D가 있다고 가정할 때 두 타입의 매개변수의 개수가 같다면 C 매개변수의 타입이 D 매개변수 타입의 서브 타입일 때에 호환됩니다.
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // ❌
d = c; // ✅
//C 매개변수의 타입은 Number, D 매개변수의 타입은 Number Literal 입니다. 따라서 C 매개변수의 타입이 D 매개변수의 슈퍼타입이므로 D를 C로 취급하는것은 불가능하나 반대로는 가능합니다.
// 이는 반환값 타입과 반대됩니다. 마치 다운캐스팅을 허용하는 것 같아 보입니다.
//이렇게 되는 이유는 두 함수의 매개변수의 타입이 모두 객체 타입일때 좀 더 두드러집니다. 
type Animal = {
    name: string;
  };
  
  type Dog = {
    name: string;
    color: string;
  };
  
  let animalFunc = (animal: Animal) => {
    console.log(animal.name);
  };
  
  let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
  };
  
//   animalFunc = dogFunc; // ❌
  dogFunc = animalFunc; // ✅
//animalFunc에 dogFunc를 할당하는 것은 불가능합니다. dogFunc의 매개변수 타입이 animalFunc 매개변수 타입보다 작은 서브타입이기 때문입니다. 반대로는 가능합니다.
// animalFunc = dogFunc를 코드로 표현해보면 다음과 같습니다. 
let testFunc = (animal: Animal) => {
    console.log(animal.name);  // ✅
    // console.log(animal.color); // ❌
  };
let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
  };
//dogFunc 함수의 매개변수는 Dog 타입입니다. 그리고 animalFunc 함수 내부에서는 name 프로퍼티에만 접근합니다. 이 코드는 안전합니다.
// 그러므로 두개의 함수 타입 C와 D가 있을 때 두 매개변수의 개수가 같을 경우 D를 C로 취급하려면 C 매개변수의 타입이 D 매개변수 타입의 서브 타입이어야 합니다.

//2-2. 매개변수의 개수가 다를 때
//매개변수의 개수가 다를 때에는 비교적 간단합니다.
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❌