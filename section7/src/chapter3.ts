// 제너릭 인터페이스, 제너릭 타입 별칭

//1. 제너릭 인터페이스
// 제네릭은 인터페이스에도 적용할 수 있습니다. 다음과 같이 인터페이스에 타입 변수를 선언해 사용하면 됩니다.
interface KeyPair<K, V> {
  key: K;
  value: V;
}
//키페어를 저장하는 객체의 타입을 제네릭 인터페이스로 정의했습니다.
// 다음과 같이 변수의 타입으로 정의하여 사용할 수 있습니다.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};
// 변수 keyPair의 타입으로 KeyPair<string, number>를 정의했습니다. 
// 그 결과 K에는 string, V에는 number 타입이 각각 할당되어 key 프로퍼티는 string 타입이고 value 프로퍼티는 number 타입인 객체 타입이 됩니다. 따라서 값으로 해당 타입의 객체를 저장합니다.
// 변수 keyPair2의 타입으로 KeyPair<boolean, string[]>를 정의했습니다. 
// 그 결과 K에는 boolean, V에는 string[] 타입이 각각 할당되어 key 프로퍼티는 boolean 타입이고 value 프로퍼티는 string[] 타입인 객체 타입이 됩니다. 따라서 값으로 해당 타입의 객체를 저장합니다.
// 이때 주의해야 할 점이 한가지 있는데 제네릭 인터페이스는 제네릭 함수와는 달리 변수의 타입으로 정의할 때 반드시 꺽쇠와 함께 타입 변수에 할당할 타입을 명시해주어야 합니다. 
// 그 이유는 제네릭 함수는 매개변수에 제공되는 값의 타입을 기준으로 타입 변수의 타입을 추론할 수 있지만 인터페이스는 마땅히 추론할 수 있는 값이 없기 때문입니다.

//1-1. 인덱스 시그니처와 함께 사용하기
// 제네릭 인터페이스는 인덱스 시그니쳐와 함께 사용하면 다음과 같이 기존보다 훨씬 더 유연한 객체 타입을 정의할 수 있습니다.
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};
// 한개의 타입 변수 V를 갖는 제네릭 인터페이스 Map을 정의했습니다. 
// 이 인터페이스는 인덱스 시그니쳐로 key의 타입은 string, value의 타입은 V인 모든 객체 타입을 포함하는 타입입니다. 
// 변수 stringMap의 타입을 Map<string> 으로 정의했습니다. 따라서 V가 string 타입이 되어 이 변수의 타입은 key는 string이고 value는 string인 모든 프로퍼티를 포함하는 객체 타입으로 정의됩니다.
// 변수 booleanMap의 타입을 Map<boolean> 으로 정의했습니다. 따라서 V가 boolean 타입이 되어 이 변수의 타입은 key는 string이고 value는 boolean인 모든 프로퍼티를 포함하는 객체 타입으로 정의됩니다.


//2. 제너릭 타입 별칭
// 인터페이스와 마찬가지로 타입 별칭에도 역시 제네릭을 적용할 수 있습니다.
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};
// 제네릭 타입 별칭을 사용할 때에도 제네릭 인터페이스와 마찬가지로 타입으로 정의될 때 반드시 타입 변수에 설정할 타입을 명시해 주어야 합니다.


//3. 제너릭 인터페이스 활용 예
// 제네릭 인터페이스의 실용 사례를 하나 소개합니다. 
// 개발자 또는 학생이 이용하는 어떤 프로그램이 있다고 가정합니다.
// interface Student {
//   type: "student";
//   school: string;
// }

// interface Developer {
//   type: "developer";
//   skill: string;
// }

// interface User {
//   name: string;
//   profile: Student | Developer;
// }

// function goToSchool(user: User<Student>) {
//   if (user.profile.type !== "student") {
//     console.log("잘 못 오셨습니다");
//     return;
//   }

//   const school = user.profile.school;
//   console.log(`${school}로 등교 완료`);
// }

// const developerUser: User = {
//   name: "이주현",
//   profile: {
//     type: "developer",
//     skill: "typescript",
//   },
// };

// const studentUser: User = {
//   name: "홍길동",
//   profile: {
//     type: "student",
//     school: "한국대학교",
//   },
// };
// 학생을 의미하는 Student와 개발자를 의미하는 Developer 타입을 정의했습니다.
// 두 타입 모두 String Literal 타입의 type 프로퍼티를 갖고 있으며, 서로소 유니온 타입입니다. 
// 그리고 그 아래에 학생일수도 개발자일 수도 있는 User 타입을 정의합니다. 
// 특정 객체가 학생이라면 profile 프로퍼티에 Student 타입의 객체가 저장될 것이고, 그렇지 않다면 Developer 타입의 객체가 저장될 것 입니다.
// 그 아래에 학생 유저만 이용할 수 있는 함수 goToSchool을 선언했습니다. 이 함수에서는 일단 User 타입의 객체를 받아 타입을 좁혀 이 유저가 학생일 때에만 “등교 완료”를 콘솔에 출력합니다.
// 위 코드는 겉으로 보았을때에는 지금 당장은 별 문제가 없어보입니다. 
// 그러나 학생만 할 수 있는 기능이 점점 많아진다고 가정하면 매번 기능을 만들기 위해 함수를 선언할 때 마다 조건문을 이용해 타입을 좁혀야 하기 때문에 결국 매우 불편해 질 것 입니다. 
// 게다가 타입을 좁히는 코드는 중복 코드가 될 것 입니다.
// 이럴 때 바로 제네릭 인터페이스를 이용하면 좋습니다. 다음과 같이 User 인터페이스를 제네릭 인터페이스로 업그레이드 합니다.
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "이주현",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "한국대학교",
  },
};
//그럼 이제 goToSchool 함수의 매개변수 타입을 User<Student> 처럼 정의해 학생 유저만 이 함수의 인수로 전달하도록 제한할 수 있습니다. 
//결과적으로 함수 내부에서 타입을 좁힐 필요가 없어지므로 코드가 훨씬 간결해집니다.