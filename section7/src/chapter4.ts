//제너릭 클래스
// 제네릭의 마지막으로 제네릭 클래스에 대해 살펴보겠습니다.
// 예시와 함께 살펴보기 위해 먼저 제네릭이 아닌 간단한 Number 타입의 리스트를 생성하는 클래스를 하나 만듭니다.
// class NumberList {
//     constructor(private list: number[]) {}
  
//       push(data: number) {
//       this.list.push(data);
//     }
  
//     pop() {
//       return this.list.pop();
//     }
  
//     print() {
//       console.log(this.list);
//     }
//   }
  
//   const numberList = new NumberList([1, 2, 3]);
// list 필드를 private(접근 제어자)으로 설정해 클래스 내부에서만 접근할 수 있도록 만들고, 생성자에서 필드 선언과 함께 초기화 합니다. 
// 새로운 요소를 추가하는 push, 제거하는 pop, 출력하는 print 메서드도 만들어 주었습니다.
// 그런데 만약 이때 StringList 클래스도 하나 필요하다면 어떻게 해야 할까요? 제네릭 없이는 다음과 같이 어쩔 수 없이 새로운 클래스를 하나 더 만들어줘야 합니다.
// class NumberList {
//   constructor(private list: number[]) {}
//   push(data: number) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// class StringList {
//   constructor(private list: string[]) {}

// 	push(data: string) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// const numberList = new NumberList([1, 2, 3]);
// const numberList = new StringList(["1", "2", "3"]);
//매우 비 효율적입니다. 모든 리스트에 메서드가 새롭게 추가된다거나 동작이 수정되는 경우라도 생각하면 벌써 끔찍합니다. 
//따라서 이럴 때 다음과 같이 제네릭 클래스를 사용해 여러 타입의 리스트를 생성할 수 있는 범용적을 클래스를 정의하면 됩니다.
// class List<T> {
//   constructor(private list: T[]) {}

//   push(data: T) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// const numberList = new List([1, 2, 3]);
// const stringList = new List(["1", "2"]);
// 클래스의 이름 뒤에 타입 변수를 선언하면 제네릭 클래스가 됩니다. 
// 이 타입 변수는 이제 클래스 내부에서 자유롭게 사용할 수 있습니다. 
// 또 클래스는 생성자를 통해 타입 변수의 타입을 추론할 수 있기 때문에 생성자에 인수로 전달하는 값이 있을 경우 타입 변수에 할당할 타입을 생략해도 됩니다.
// 만약 타입변수의 타입을 직접 설정하고 싶다면 다음과 같이 하면 됩니다.
class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List<number>([1, 2, 3]);
const stringList = new List<string>(["1", "2"]);