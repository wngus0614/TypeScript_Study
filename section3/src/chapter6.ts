// 타입 단언
// 변수 person은 Person 타입으로 정의 되었지만 초기화 할 때에는 빈 객체를 넣어두고 싶다고 가정하겠습니다. 
// 그러나 타입스크립트에서는 이런 경우를 허용하지 않습니다. 빈 객체는 Person 타입이 아니므로 오류가 발생하게 됩니다.
// type Person = {
//     name: string;
//     age: number;
//   };
  
//   let person: Person = {};
//   person.name = "";
//   person.age = 23;

// 이럴 땐 다음과 같이 이 빈 객체를 Person 타입이라고 타입스크립트에게 단언해주면 됩니다.
type Person = {
    name: string;
    age: number;
  };
  
  let person = {} as Person;
  person.name = "";
  person.age = 23; 

// 이렇듯  값 as 타입 으로 특정 값을 원하는 타입으로 단언할 수 있습니다. 이를 타입 단언 이라고 부릅니다.
// 타입 단언은 다음과 같이 초과 프로퍼티 검사를 피할때에도 요긴하게 사용할 수 있습니다.

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog
// 위 코드에서는 breed 라는 초과 프로퍼티가 존재하지만 이 값을 Dog 타입으로 단언하여 초과 프로퍼티 검사를 피했습니다.


// 타입 단언의 조건
// 타입 단언에도 조건이 있습니다.
// 값 as 타입 형식의 단언식을 A as B로 표현했을 때 아래의 두가지 조건중 한가지를 반드시 만족해야 합니다.
// A가 B의 슈퍼타입이다
// A가 B의 서브타입이다
// 다음은 예 입니다.
let num1 = 10 as never;   // ✅
let num2 = 10 as unknown; // ✅
// let num3 = 10 as string;  // ❌

// num1은 A(number 타입)의 값을 B(never) 타입으로 단언합니다. never 타입은 모든 타입의 서브타입이므로  A가 B의 슈퍼타입입니다. 따라서 단언이 가능합니다.
// num2는 A(number 타입)의 값을 B(unknown) 타입으로 단언합니다. unknown 타입은 모든 타입의 슈퍼타입이므로 A가 B의 서브타입입니다. 따라서 단언이 가능합니다.
// num3는 A(number 타입)의 값을 B(string) 타입으로 단언합니다. 그러나 number 타입과 string 타입은 서로 슈퍼-서브 타입 관계를 갖지 않습니다. 따라서 단언이 불가합니다.


// 다중 단언
// 타입 단언은 다중으로도 가능합니다. 다중 단언을 이용하면 앞서 살펴본 예제 중 불가능했던 단언을 다음과 같이 가능하도록 만들 수도 있습니다.
let num3 = 10 as unknown as string;
//이런 다중 단언의 경우 왼쪽에서 오른쪽으로 단언이 이루어집니다. 따라서 순서대로 살펴보면 다음과 같습니다.
// number 타입의 값을 unknown 타입으로 단언합니다.
// unknown 타입의 값을 string 타입으로 단언합니다.
// 이렇듯 중간에 값을 unknown 타입으로 단언하면 unknown 타입은 모든 타입의 슈퍼타입이므로 모든 타입으로 또 다시 단언하는게 가능합니다.
// 그러나 이렇게 단언하는 것은 매우 좋지 않은 방식입니다. 타입 단언은 실제로 그 값을 해당 타입의 값으로 바꾸는 것이 아니라 단순 눈속임에 불과합니다. 
// 따라서 이렇게 값을 이렇게 슈퍼-서브 관계를 갖지 않는 타입으로 단언하면 오류가 발생할 확률이 매우 높아집니다. 그러므로 정말 어쩔 수 없이 필요한 상황에서만 이용하기를 권장합니다.


// const 단언
// 타입 단언때에만 사용할 수 있는 const 타입이 존재합니다. 특정 값을 const 타입으로 단언하면 마치 변수를 const로 선언한 것 과 비슷하게 타입이 변경됩니다.
let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨


// Non Null 단언
// Non Null 단언은 지금까지 살펴본 값 as 타입 형태를 따르지 않는 단언입니다. 값 뒤에 느낌표(!) 를 붙여주면 이 값이 undefined이거나 null이 아닐것으로 단언할 수 있습니다.
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length;