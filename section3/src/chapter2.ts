//----------타입 계층도와 함께 기본 타입간의 호환성 살펴보기-----------

// Unknown 타입(전체 집합)
// unknown 타입은 타입 계층도의 최 상단에 위치합니다.
// 따라서 unknown 타입 변수에는 모든 타입의 값을 할당할 수 있습니다. 바꿔 말하면 모든 타입은 unknown 타입으로 업 캐스트 할 수 있습니다.
// unknown 타입이 타입 계층도에서 가장 위에 위치한다는 뜻은 unknown 타입은 모든 타입의 슈퍼타입이라는 뜻 입니다. 그러므로 모든 타입은 unknown 타입의 부분집합입니다.
// 결국 unknown 타입은 모든 타입을 부분집합으로 갖는 타입스크립트 전체 집합 입니다.

let a: unknown = 1;                 // number -> unknown
let b: unknown = "hello";           // string -> unknown
let c: unknown = true;              // boolean -> unknown
let d: unknown = null;              // null -> unknown
let e: unknown = undefined;         // undefined -> unknown
let f: unknown = [];                // Array -> unknown
let g: unknown = {};                // Object -> unknown
let h: unknown = () => {};          // Function -> unknown


//앞서 다운캐스트는 예외적인 경우가 아니면 허용되지 않는다고 배웠습니다. 따라서 unknown 타입의 값은 any를 제외한 어떤 타입의 변수에도 할당할 수 없습니다.
// let unknownValue: unknown;

// let num: number = unknownValue; // 오류 : unknown 타입은 number 타입에 할당할 수 없습니다.
// let str:string = unknownValue;
// let bool: boolean = unknownValue;


// Never 타입(공집합 타입)
// 앞서 never 타입은 불가능, 모순을 의미하는 타입이라고 설명한 적이 있습니다. 
// 타입이 집합임을 이해한 지금 never 타입을 다시 표현하자면 never는 공집합을 뜻하는 타입입니다. 
// 수학에서의 공집합은 아무것도 포함하지 않는 집합이라는 뜻 입니다.
// 따라서 never 타입에 해당하는 값은 말 그대로 아무것도 없습니다. 따라서 다음과 같은 상황에 never 타입이 주로 사용됩니다.

function neverExam(){
	function neverFunc():never { // neverFunc가 반환 하는 것은 공집합이다. 반환 값이 아무것도 없다를 의미.
		while(true){}
	}

	let num : number = neverFunc();
	let str : string = neverFunc();
	let bool : boolean = neverFunc();

	// let never1 : never = 10;           // 오류(다운캐스팅이므로), never 타입엔 아무것도 넣을 수 없다.
	// let never2 : naver = "string";
	// let never3 : naver = true;
}


// Void타입
// 타입 계층도에서 void 타입을 찾아보면 void 타입은 undefined 타입의 슈퍼타입임을 알 수 있습니다.
// 따라서 반환값을 void로 선언한 함수에서 undefined을 반환 해도 오류가 발생하지 않습니다. undefined 타입은 void 타입의 서브 타입이므로 업캐스팅이 가능하기 때문입니다.
function noReturnFuncA(): void {
  return undefined;
}

function noReturnFuncB(): void {
  return;
}

function noReturnFuncC(): void {}
// void 타입의 서브타입은 undefined 타입과 never 타입 밖에 없습니다. 따라서 void 타입에는 undefined, never 이외에 다른 타입의 값을 할당할 수 없습니다.


// Any타입
// any 타입은 다운캐스팅도 허용됩니다. 사실상 타입 계층도를 완전히 무시합니다. any는 일종의 치트키같은 타입입니다.
// any는 뭐든지 예외입니다. 모든 타입의 슈퍼타입이 될 수도 있고 모든 타입의 서브 타입이 될 수도 있습니다.
function anyExam(){
	let unknownVar:unknown;
	let anyVar:any;
	let undefinedVar: undefined;
	let neverVar:never;

	anyVar = unknownVar;

	undefinedVar = anyVar;

	// neverVar = anyVar; //예외적으로 never타입은 공집합이기에 never타입에는 그 어떤 타입도 다운캐스트 할 수 없습니다.
}