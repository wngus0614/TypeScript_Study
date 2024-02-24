// 선언 합침
// 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면 인터페이스는 가능합니다.
// type Person = {
//     name: string;
//   };
  
//   type Person = { ❌
//     age: number;
//   };

interface Person {
    name: string;
  }
  
  interface Person { // ✅
    age: number;
  }
//이렇게 되는 이유는 중복된 이름의 인터페이스 선언은 결국 모두 하나로 합쳐지기 때문입니다.
// 따라서 위 코드에 선언한 Person 인터페이스들을 결국 합쳐져 다음과 같은 인터페이스가 됩니다.
interface Person {
	name: string;
	age: number;
}
//이렇게 동일한 이름의 인터페이스들이 합쳐지는 것을 선언 합침(Declaration Merging)이라고 부릅니다. 따라서 다음과 같이 사용할 수 있습니다.
interface Person {
  name: string;
}

interface Person {
  age: number;
}
  
const person: Person = {
  name: "이주현",
  age: 27,
};

//주의할 점
// 그런데 만약 다음과 같이 동일한 이름의 인터페이스들이 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의한다면 오류가 발생합니다.
// interface Person {
//   name: string;
// }

// interface Person {
//   name: number;
//   age: number;
// }
//첫번째 Person에서는 name 프로퍼티의 타입을 string 으로 두번째 Person 에서는 name 프로퍼티의 타입을 number 타입으로 정의했습니다.
// 이렇게 동일한 프로퍼티의 타입을 다르게 정의한 상황을 ‘충돌’ 이라고 표현하며 선언 합침에서 이런 충돌은 허용되지 않습니다.