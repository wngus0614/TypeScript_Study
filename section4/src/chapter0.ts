// 함수 타입 정의
// 자바스크립트 함수가 있을 때, 이 함수를 다른 사람에게 설명하는 가장 좋은 방법은 
// 이 함수가 어떤 매개변수를 받고 어떤 값을 반환 하는지 이야기 하는 것 입니다.
// 그럼 타입스크립트는? 타입스크립트 함수를 설명하는 가장 좋은 방법
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 값을 반환하는지 이야기 하면 됩니다. 
// function func(a: number, b: number): number {
//   return a + b;
// }
//참고로 함수의 반환값 타입은 자동으로 추론되기 때문에 다음과 같이 생략해도 됩니다.
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수 타입 정의 하기
//화살표 함수의 타입 정의 방식은 다음과 같습니다. 함수 선언식과 동일합니다.
// const add = (a: number, b: number): number => a + b;
//화살표 함수 역시 반환값의 타입은 자동으로 추론됩니다
const add = (a: number, b: number) => a + b;

//매개변수 기본값 설정하기
//다음과 같이 함수의 매개변수에 기본값이 설정되어있으면 타입이 자동으로 추론됩니다. 이럴 경우 타입 정의를 생략해도 됩니다.
function introduce(name = "이주현") {
	console.log(`name : ${name}`);
}
//이때 당연히 기본값과 다른 타입으로 매개변수의 타입을 정의하면 오류가 발생합니다.
// function introduce(name:number = "이주현") {  //오류
// 	console.log(`name : ${name}`);
// }
//또 당연히 기본값과 다른 타입의 값을 인수로 전달해도 오류가 발생합니다.
// function introduce(name = "이주현") {
//   console.log(`name : ${name}`);
// }

// introduce(1); // 오류


// 선택적 매개변수 설정하기
// 다음과 같이 매개변수의 이름뒤에 물음표(?)를 붙여주면 선택적 매개변수가 되어 생략이 가능합니다.
// function introduce2(name = "이주현", tall?: number) {
//   console.log(`name : ${name}`);
//   console.log(`tall : ${tall}`);
// }

// introduce2("이주현", 170);

// introduce2("이주현");
//위 코드의 tall 같은 선택적 매개변수의 타입은 자동으로 undefined와 유니온 된 타입으로 추론됩니다. 
//따라서 tall의 타입은 현재 number | undefined이 됩니다. 그러므로 이 값이 number 타입의 값일 거라고 기대하고 사용하려면 다음과 같이 타입 좁히기가 필요합니다.
// function introduce2(name = "이주현", tall?: number) {
//   console.log(`name : ${name}`);
//   if (typeof tall === "number") {
//     console.log(`tall : ${tall + 10}`);
//   }
// }
//또 한가지 주의할 점은 선택적 매개변수(tall?:number)는 필수 매개변수(age:number) 앞에 올 수 없습니다. 선택적 매개변수는 반드시 뒤에 배치해야 합니다.
function introduce2(name = "이주현", age: number, tall?: number ) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce2("이주현",27, 170);

introduce2("이주현",27);


// 나머지 매개변수
// rest 파라미터
// function getSum(...rest) {
//   let sum = 0;
//   rest.forEach((it) => (sum += it));
//   return sum;
// }
// getSum 함수는 나머지 매개변수 rest로 배열 형태로 number 타입의 인수들을 담은 배열을 전달받습니다. 
// 이때 rest 파라미터의 타입은 다음과 같이 정의하면 됩니다.
// function getSum(...rest: number[]) {
//   let sum = 0;
//   rest.forEach((it) => (sum += it));
//   return sum;
// }
// 이때 만약 나머지 매개변수의 길이를 고정하고 싶다면 다음과 같이 튜플 타입을 이용해도 됩니다.
function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3)    // ✅
// getSum(1, 2, 3, 4) // ❌