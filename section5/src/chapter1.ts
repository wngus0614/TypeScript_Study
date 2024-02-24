//인터페이스 확장
//인터페이스 확장이란 하나의 인터페이스를 다른 인터페이스들이 상속받아 중복된 프로퍼티를 정의하지 않도록 도와주는 문법입니다. 
//말로만 하면 어려우니 예제와 함께 살펴보겠습니다. 다음과 같이 3개의 타입이 정의되어있다고 가정하겠습니다.
// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }
//각 타입 들을 자세히 살펴보면 Animal 타입을 기반으로 Dog, Cat, Chicken이 각각의 추가적인 프로퍼티를 갖고 있는 형태임을 알 수 있습니다. 추가로 name 그리고 age 프로퍼티가 모든 타입에 중복해서 정의되어 있다는 점도 함께 발견하실 수 있습니다. 

//interface 타입이름 extends 확장_할_타입이름 형태로 extends 뒤에 확장할 타입의 이름을 정의하면 해당 타입에 정의된 모든 프로퍼티를 다 가지고 오게 됩니다. 따라서 Dog, Cat, Chicken 타입은 모두 Animal 타입을 확장하는 타입이기 때문에 name, age 프로퍼티를 갖게 됩니다.
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  breed: string;
}

interface Cat extends Animal {
  isScratch : boolean;
}

const dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};
//이때 확장 대상 타입인 Animal은 Dog 타입의 슈퍼타입이 됩니다.


//프로퍼티 재 정의하기
//다음과 같이 확장과 동시에 프로퍼티의 타입을 재 정의 하는 것 또한 가능합니다.
// interface Animal {
//   name: string;
//   color: string;
// }

// interface Dog extends Animal {
//   name: "doldol"; // 타입 재 정의
//   breed: string;
// }
// Dog 타입은 Animal 타입을 확장하며 동시에 name 프로퍼티의 타입을 String 타입에서 “doldol” String Literal 타입으로 재정의 했습니다. 
// 이렇게 확장받는 타입에서 프로퍼티의 타입을 재정의 할 수 있습니다.
// 그런데 한가지 주의할 점은 프로퍼티를 재 정의할 때 원본 타입을 A 재 정의된 타입을 B라고 하면 반드시 A가 B의 슈퍼 타입이 되도록 재정의 해야 합니다.
// 따라서 다음과 같이 name을 Number 타입으로 재 정의 하는 것은 불가능합니다
// interface Animal {
//   name: string;
//   color: string;
// }

// interface Dog extends Animal {
//   name: number; // ❌
//   breed: string;
// }
//그 이유는 Dog 타입이 Animal 타입을 확장한 다는 것은 Animal 타입의 서브타입이 된다는 의미입니다. 
//그런데 name 프로퍼티를 Number 타입으로 재 정의 해 버리면 이제는 Dog는 Animal의 서브 타입이 아니게 됩니다. 
//따라서 이런 재 정의는 불가한 것 입니다.


//타입 별칭을 확장하기
//참고로 인터페이스는 인터페이스 뿐만 아니라 타입 별칭으로 정의된 객체도 확장할 수 있습니다.
// type Animal = {
//   name: string;
//   color: string;
// };

// interface Dog extends Animal {
//   breed: string;
// }

// 다중 확장
// 또 여러개의 인터페이스를 확장하는 것 또한 가능합니다.
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true
};