// 타입스크립트의 클래스
//타입스크립트에서는 클래스의 필드를 선언할 때 타입 주석으로 타입을 함께 정의해주어야 합니다. 
//그렇지 않으면 함수 매개변수와 동일하게 암시적 any 타입으로 추론되는데 엄격한 타입 검사 모드(strict 옵션이 true로 설정되어 있을 경우)일 때에는 오류가 발생하게 됩니다. 
//추가로 생성자에서 각 필드의 값을 초기화 하지 않을 경우 초기값도 함께 명시해주어야 합니다.
// class Employee {
//   // 필드
//   name: string = "";
//   age: number = 0;
//   position: string = "";
  
//   // 메서드
//   work() {
//     console.log("일함");
//   }
// }
//만약 다음과 같이 생성자 함수에서 필드의 값들을 잘 초기화 해 준다면 필드 선언시의 초기값은 생략해도 됩니다.
// class Employee {
//   // 필드
//   name: string;
//   age: number;
//   position: string;

//   // 생성자
//   constructor(name: string, age: number, position: string) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//   }

//   // 메서드
//   work() {
//     console.log("일함");
//   }
// }

// const employee = new Employee("이주현", 27, "개발자");
// console.log(employee);
// employee.work(); 
// //{ name: '이주현', age: 27, position: '개발자' } 로 출력됨.

//이때 만약 이 클래스가 생성하는 객체의 특정 프로퍼티를 선택적 프로퍼티로 만들고 싶다면 다음과 같이 필드의 이름 뒤에 물음표를 붙여주면됩니다.
// class Employee {
//   // 필드
//   name: string;
//   age: number;
//   position?: string;

//   // 생성자
//   constructor(name: string, age: number, position: string) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//   }

//   // 메서드
//   work() {
//     console.log("일함");
//   }
// }


// 클래스는 타입
// 타입스크립트의 클래스는 타입으로도 사용할 수 있습니다. 
// 클래스를 타입으로 사용하면 해당 클래스가 생성하는 객체의 타입과 동일한 타입이 됩니다.
class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
// 변수 employeeC의 타입을 Employee 클래스로 정의했습니다. 
//따라서 이 변수는 name, age, position 프로퍼티와 work 메서드를 갖는 객체 타입으로 정의됩니다.


// 상속
// 타입스크립트에서 클래스의 상속을 이용할 때 파생 클래스(확장하는 클래스)에서 생성자를 정의 했다면 
// 반드시 super 메서드를 호출해 슈퍼 클래스(확장되는 클래스)의 생성자를 호출해야 하며, 호출 위치는 생성자의 최상단 이어야만 합니다.
class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  //생성자
  constructor(name: string,age: number,position: string, officeNumber: number){
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}