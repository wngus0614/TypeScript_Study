//접근제어자
// 접근 제어자(Access Modifier)는 타입스크립트에서만 제공되는 기능으로 클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능입니다.
// 타입스크립트에서는 다음과 같은 3개의 접근 제어자를 사용할 수 있습니다.
// public : 모든 범위에서 접근 가능
// private : 클래스 내부에서만 접근 가능
// proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
// 실습과 함께 3가지 접근 제어자를 살펴보겠습니다. 지난 시간에 만들어 두었던 클래스 Employee를 그대로 사용할 예정입니다.


// Public
// 첫번째 접근 제어자는 public 입니다. public은 공공의 라는 뜻으로 어디서든지 이 프로퍼티에 접근할 수 있음을 의미합니다. 
// 앞서 만들었던 클래스와 같이 필드의 접근 제어자를 지정하지 않으면 기본적으로 public 접근 제어자를 갖게 됩니다.
// class Employee {
//     // 필드
//     name: string;      // 자동으로 public
//     age: number;       // 자동으로 public
//     position: string;  // 자동으로 public
  
//     // 생성자
//     constructor(name: string, age: number, position: string) {
//       this.name = name;
//       this.age = age;
//       this.position = position;
//     }
  
//     // 메서드
//     work() {
//       console.log("일함");
//     }
//   }
  
//   const employee = new Employee("이주현", 27, "devloper");
  
//   employee.name = "홍길동";
//   employee.age = 30;
//   employee.position = "디자이너";

//다음과 같이 public 접근 제어자를 직접 명시하는것도 가능합니다.
//   class Employee {
//     // 필드
//     public name: string;
//     public age: number;
//     public position: string;
  
//     ...
//   }
  
//   const employee = new Employee("이주현", 27, "devloper");
  
//   employee.name = "홍길동";
//   employee.age = 30;
//   employee.position = "디자이너";


// Private
// private은 제한된, 사적인 이라는 뜻으로 특정 필드나 메서드의 접근 제어자를 private으로 설정하면 클래스 내부에서만 이 필드에 접근할 수 있게 됩니다.
// class Employee {
//     // 필드
//     private name: string; 
//     public age: number; 
//     public position: string;
  
//     // 생성자
//     constructor(name: string, age: number, position: string) {
//       this.name = name;
//       this.age = age;
//       this.position = position;
//     }
  
//     // 메서드
//     work() {
//       console.log("일함");
//     }
//   }
  
//   class ExecutiveOfficer extends Employee {
//     //필드
//     officeNumber: number;
  
//     //생성자
//     constructor(name: string,age: number,position: string, officeNumber: number){
//       super(name, age, position);
//       this.officeNumber = officeNumber;
//     }
//   }

//   const employee = new Employee("이주현", 27, "devloper");
  
// //   employee.name = "홍길동"; // ❌ 접근 불가
//   employee.age = 30;
//   employee.position = "디자이너";
//name 필드를 private으로 설정했으므로 클래스 외부에서는 접근이 불가합니다. 그러나 클래스 내부에서는 work 메서드(`${this.name} 일함`;) 처럼은 접근이 자유롭게 가능합니다.


// Proteced
// proteced 접근제어자는 private과 public의 중간으로 클래스 외부에서는 접근이 안되지만 클래스 내부와 파생 클래스에서 접근이 가능하도록 설정하는 접근 제어자입니다.
// class Employee {
//     // 필드
//     private name: string; // private 접근 제어자 설정
//     protected age: number;
//     public position: string;
  
//     // 생성자
//     constructor(name: string, age: number, position: string) {
//         this.name = name;
//         this.age = age;
//         this.position = position;
//       }

//     // 메서드
//     work() {
//       console.log(`${this.name}이 일함`); // 여기서는 접근 가능
//     }
//   }
  
//   class ExecutiveOfficer extends Employee {
//    // 메서드
//     func() {
//       this.name; // ❌ 오류 
//       this.age; // ✅ 가능
//     }
//   }
  
//   const employee = new Employee("이주현", 27, "devloper");
  
//   employee.name = "홍길동"; // ❌ 오류
//   employee.age = 30; // ❌ 오류
//   employee.position = "디자이너";
// Employee 클래스를 확장(상속)하는 파생 클래스 ExecutiveOfficer를 선언한 다음 메서드 func를 만들었습니다. 
// 이 메서드에서는 name과 age에 접근하는데 이때 name은 private으로 접근이 불가하지만 age는 protected이므로 파생 클래스에서는 접근이 가능합니다. 
// 그러나 클래스 외부에서는 접근이 불가합니다.


// 필드 생략하기
// 접근 제어자는 다음과 같이 생성자의 매개변수에도 설정할 수 있습니다.
// class Employee {
//   // 필드
//   private name: string;    // ❌
//   protected age: number;   // ❌
//   public position: string; // ❌

//   // 생성자
//   constructor(
//     private name: string,
//     protected age: number,
//     public position: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//   }

//   // 메서드
//   work() {
//     console.log(`${this.name} 일함`);
//   }
// }
//그러나 생성자에 접근 제어자를 설정하면 동일한 이름의 필드를 선언하지 못하게 됩니다. 
//그 이유는 생성자 매개변수에 name, age, position 처럼 접근 제어자가 설정되면 자동으로 필드도 함께 선언되기 때문입니다. 
//따라서 동일한 이름으로 필드를 중복 선언할 수 없게 됩니다. 
// 다음과 같이 중복된 필드 선언을 모두 제거해 주어야 합니다.
// class Employee {
//   // 생성자
//   constructor(
//     private name: string,
//     protected age: number,
//     public position: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//   }

//   // 메서드
//   work() {
//     console.log(`${this.name} 일함`);
//   }
// }
//또 다음과 접근 제어자가 설정된 매개변수들은 this.필드 = 매개변수가 자동으로 수행됩니다. 
//따라서 위 코드의 name, age, position은 모두 this 객체의 프로퍼티 값으로 자동 설정되기 때문에 다음과 같이 생성자 내부의 코드를 제거해도 됩니다.
class Employee {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

const employee = new Employee("이주현", 27, "devloper");
  
// employee.name = "홍길동"; // ❌ 오류
// employee.age = 30; // ❌ 오류
employee.position = "디자이너";
console.log(employee);
//{ name: '이주현', age: 27, position: '디자이너' }
// 그러므로 타입스크립트에서 클래스를 사용할 때에는 보통 생성자 매개변수에 접근 제어자를 설정하여 
// 필드 선언과 생성자 내부 코드를 생략하는것이 훨씬 간결하고 빠르게 코드를 작성할 수 있어 좋습니다.