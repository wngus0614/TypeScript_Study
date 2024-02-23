// 타입 좁히기
// 다음과 같은 함수가 하나 있다고 가정하겠습니다
// function func(value: number | string) { }
// 이때 매개변수 value의 타입이 number | string 이므로 함수 내부에서 다음과 같이 value가 number 타입이거나 string 타입일 것으로 기대하고 메서드를 사용하려고 하면 오류가 발생합니다.
// function func(value: number | string) {
//     value.toFixed() // 오류
//       value.toUpperCase() // 오류
//   }
//만약 value가 number 타입일거라고 기대하고 toFixed 메서드를 사용하고 싶다면 다음과 같이 조건문을 이용해 value의 타입이 number 타입임을 보장해줘야 합니다.
// function func(value: number | string) {
//     if (typeof value === "number") {
//       console.log(value.toFixed());
//     }
//   }
//또 똑같이 value가 string 타입일거라고 기대하고 toUpperCase 메서드를 사용하고 싶다면 다음과 같이 조건문을 이용해 value의 타입이 string 타입임을 보장해 주어야 합니다.
function func(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
//이렇게 조건문을 이용해 조건문 내부에서 변수가 특정 타입임을 보장하면 해당 조건문 내부에서는 변수의 타입이 보장된 타입으로 좁혀집니다. 
//따라서 첫번째 조건문 내부에서는 value의 타입이 number 타입이 되고, 두번째 조건문 내부에서는 value의 타입이 string 타입이 됩니다. 이를 타입 좁히기 라고 표현합니다.
//또 if (typeof === …) 처럼 조건문과 함께 사용해 타입을 좁히는 이런 표현들을 “타입 가드”라고 부릅니다. 정리하면 타입 가드를 이용해 타입을 좁혀 사용할 수 있습니다.


// instanceof 타입가드
// instanceof를 이용하면 내장 클래스 타입을 보장할 수 있는 타입가드를 만들 수 있습니다.
function func2(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}
//그러나 Instanceof는 내장 클래스 또는 직접 만든 클래스에만 사용이 가능한 연산입니다. 따라서 우리가 직접 만든 타입과 함께 사용할 수 없습니다.


// in 가드
// 우리가 직접 만든 타입과 함께 사용하려면 다음과 같이 in 연산자를 이용해야 합니다.
type Person = {
  name: string;
  age: number;
};

function func3(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`)
  }
}