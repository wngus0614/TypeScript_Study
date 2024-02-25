// 자바스크립트의 클래스
// 클래스는 동일한 모양의 객체를 더 쉽게 생성하도록 도와주는 문법입니다.
// 예를 들어 학생을 객체로 표현한다면 다음과 같이 할 수 있습니다.
// let studentA = {
// 	name: "이주현",
// 	grade: "A+",
// 	age: 27,
// 	study() {
// 		console.log("열심히 공부 함");
// 	},
// 	introduce() {
// 		console.log("안녕하세요!");
// 	},
// };

// let studentB = {
// 	name: "홍길동",
// 	grade: "B",
// 	age: 27,
// 	study() {
// 		console.log("열심히 공부 함");
// 	},
// 	introduce() {
// 		console.log("안녕하세요!");
// 	},
// };
// 이때 studentA와 studentB에 저장된 객체는 동일한 프로퍼티를 갖습니다. 프로퍼티의 값만 조금씩 다를 뿐 입니다. 동일한 모양의 객체라고 볼 수 있습니다.
// 이렇게 동일한 모양의 객체를 여러개 생성해야 하면 어쩔 수 없이 중복 코드가 발생하게 됩니다.
// 지금은 학생이 2명밖에 없어서 괜찮을지 몰라도 100명, 1000명의 학생을 만들어야 한다면 상상만해도 끔찍합니다.
// 이럴때 바로 자바스크립트의 클래스 라는 문법을 사용하면 도움이 됩니다.


// 클래스 선언하기
// 클래스는 앞서 이야기 했듯 객체를 생성하는 틀 입니다.
// class Student { //클래스의 이름은 앞글자를 대문자로 하는 파스칼 표기법을 사용합니다.

// }

// 붕어빵이 객체라면 붕어빵 기계는 클래스라고 볼 수 있습니다. 우리는 방금 붕어빵 기계를 만든겁니다.
// 클래스를 선언했다면 다음으로는 필드를 선언해야 합니다.
// 필드란 이 클래스가 생성할 객체가 갖는 프로퍼티를 의미합니다. 학생 객체는 name, age, grade 프로퍼티를 갖기 때문에 다음과 같이 필드를 선언합니다.
// class Student {
// 	//필드
// 	name;
// 	grade;
// 	age;
// }

//필드를 선언했다면 다음으로는 생성자를 선언합니다. 생성자는 특수한 메서드로 실질적으로 객체를 생성하는 함수입니다.
// class Student {
// 	// 필드
// 	name;
// 	grade;
// 	age;

// 	// 생성자 (실제로 객체를 생성하는 메서드)
// 	constructor(name, grade, age) { //name, grade, age로 매개변수를 설정.
// 		this.name = name; //this는 클래스가 만들고 있는 객체이다. 지금 생성하고 있는 객체의 name 프로퍼티의 값을 매개변수에 저장된 name으로 설정해줌.
// 		this.grade = grade;
// 		this.age = age;
// 	}
// }

//생성자에서는 매개변수로 프로퍼티 값을 받아 this.프로퍼티의 값으로 할당합니다.
//이때 this는 객체이며 현재 만들고 있는 객체를 의미합니다.
//따라서 이 생성자 메서드는 현재 만들고 있는 객체의 name, grade, age 프로퍼티의 값을 매개변수로 전달받은 값으로 설정하는 역할을 합니다.
//이렇게 생성자를 만들어 주었다면 이제 이 클래스를 호출하여 객체를 생성할 수 있습니다.
// 클래스를 이용해서 만든 객체를 인스턴스라고 부른다.
// 스튜던트 인스턴스
// const studentB = new Student("홍길동", "A+", 27);
// 클래스를 이용해 새로운 객체를 생성할 때에는 new 클래스이름 형태로 클래스의 생성자 함수를 호출합니다.
// 이때 인수로는 각각 name, grade, age를 전달합니다.
// 그럼 생성자가 호출되어 this.name에는 매개변수 name에 저장된 “홍길동”을 this.grade에는 매개변수 grade에 저장된 “A+”를 this.age에는 매개변수 age에 저장된 27을 저장합니다.
// 결과적으로 다음과 같이 생긴 객체를 생성합니다.
// class Student {
// 	// 필드
// 	name;
// 	age;
// 	grade;

// 	// 생성자
// 	constructor(name, grade, age) {
// 		this.name = name;
// 		this.grade = grade;
// 		this.age = age;
// 	}
// }

// const studentB = new Student("홍길동", "A+", 27);

// console.log(studentB);
// // Student { name: '홍길동', age: 27, grade: 'A+' }

//다음으로는 클래스가 생성할 객체의 메서드도 설정해 주겠습니다.
// class Student {
// 	// 필드
// 	name;
// 	grade;
// 	age;

// 	// 생성자
// 	constructor(name, grade, age) {
// 		this.name = name;
// 		this.grade = grade;
// 		this.age = age;
// 	}

// 	// 메서드
// 	study() {
// 		console.log("열심히 공부 함");
// 	}

// 	introduce() {
// 		console.log(`안녕하세요!`);
// 	}
// }

// let studentB = new Student("홍길동", "A+", 27);

// studentB.study(); // 열심히 공부 함
// studentB.introduce(); // 안녕하세요!


// this 활용하기
// 앞서 클래스 내부에서 this는 현재 만들고 있는 객체를 의미한다고 했습니다.
// 따라서 메서드에 다음과 같이 this를 활용해 객체 프로퍼티의 값을 활용하는 것 또한 가능합니다.
class Student {
	// 필드
	name;
	grade;
	age;

	// 생성자
	constructor(name, grade, age) {
		this.name = name;
		this.grade = grade;
		this.age = age;
	}

	// 메서드
	study() {
		console.log("열심히 공부 함");
	}
	introduce() {
		console.log(`안녕하세요 ${this.name} 입니다!`);
	}
}

let studentB = new Student("이주현", "A+", 27);
// studentB.introduce(); // 안녕하세요 이주현 입니다!


// 상속
// 만약 앞서 만든 Student 클래스를 기반으로 추가적인 필드와 메서드를 갖는 클래스를 선언하고 싶다면 다음과 같이 상속을 이용하면 됩니다
// class StudentDeveloper extends Student {
// }

// StudentDeveloper 클래스는 Student 클래스를 확장(상속)합니다. 
// 이 확장은 앞서 살펴본 인터페이스의 확장과 기본적으로 비슷합니다. 따라서 Student 클래스에 정의된 모든 필드와 메서드를 자동으로 갖게 됩니다.
// StudentDeveloper 클래스만의 새로운 필드나 메서드도 다음과 같이 정의할 수 있습니다.
// class StudentDeveloper extends Student {
// 	// 필드
// 	favoriteSkill;

// 	// 생성자
// 	constructor(name, grade, age, favoriteSkill) {
// 		this.favoriteSkill = favoriteSkill;
// 	}

// 	// 메서드
// 	programming() {
// 		console.log(`${this.favoriteSkill}로 프로그래밍 함`);
// 	}
// }
// 그런데 이때 StudentDeveloper 클래스에서 Student 클래스의 생성자를 함께 호출해줘야 합니다. 
// 그렇지 않으면 생성되는 객체의 name, grade, age 값이 제대로 설정되지 않습니다. 
// 따라서 다음과 같이 super 라는 메서드를 호출합니다.
class StudentDeveloper extends Student {
	// 필드
	favoriteSkill;

	// 생성자
	constructor(name, grade, age, favoriteSkill) {
		super(name, grade, age);
		this.favoriteSkill = favoriteSkill;
	}

	// 메서드
	programming() {
		console.log(`${this.favoriteSkill}로 프로그래밍 함`);
	}
}

const studentDeveloper = new StudentDeveloper("이주현", "A+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();


//super를 호출하고 인수로 name, grade, age를 전달하면 슈퍼 클래스(확장 대상 클래스)의 생성자를 호출합니다.
//따라서 this.name, this.grade, this.age의 값을 설정하게 됩니다.