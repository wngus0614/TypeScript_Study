//분산적인 조건부 타입
// 이전 시간에 조건부 타입에 대해 살펴보았습니다.
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;
// 변수 a의 타입은 조건식이 참이되어 string으로 정의되고 변수 b의 타입은 조건식이 거짓이 되어 number 타입으로 정의됩니다.
// 그럼 이번에는 타입 변수에 Union 타입을 할당해 보겠습니다.
let c: StringNumberSwitch<number | string>;
// string | number

// 지금까지 배운 조건부 타입 문법에 따라 변수 c의 타입은 number | string은 number의 서브타입이 아니므로 조건식이 거짓이 되어 number가 될거라고 예상할 수 있습니다.
// 그러나 변수 c는 string | number 타입으로 정의됩니다. 왜 이렇게 되는 걸까요?
// 그 이유는 조건부 타입의 타입 변수에 Union 타입을 할당하면 분산적인 조건부 타입으로 조건부 타입이 업그레이드 되기 때문입니다. 
// 분산적인 조건부 타입은 다음과 같이 동작합니다.
// 타입 변수에 할당한 Union 타입 내부의 모든 타입이 분리됩니다. 따라서 StringNuberSwitch<number | string> 타입은 다음과 같이 분산됩니다.
// StringNumberSwitch<number>
// StringNumberSwitch<string>
// 그리고 다음으로 분산된 각 타입의 결과를 모아 다시 Union 타입으로 묶습니다.
// 결과 : number | string
 

//Exclude 조건부 타입 구현하기
// 분산적인 조건부 타입의 특징을 이용하면 매우 다양한 타입을 정의할 수 있습니다.
// 예를 들어 Union 타입으로부터 특정 타입만 제거하는 Exclude(제외하다) 타입을 다음과 같이 정의할 수 있습니다. 
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
//위 코드는 다음의 흐름으로 동작합니다.
// 1. Union 타입이 분리된다.
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>
// 2. 각 분리된 타입을 모두 계산한다.
// T = number, U = string 일 때 number extends string 은 거짓이므로 결과는 number
// T = string, U = string 일 때 string extends string 은 참이므로 결과는 never
// T = boolean, U = string 일 때 boolean extends string 은 거짓이므로 결과는 boolean
// 3. 계산된 타입들을 모두 Union으로 묶는다
// 결과 :  number | never | boolean
// 계산 결과 타입 A는 number | never | boolean 타입으로 정의됩니다. 그런데 여기서 공집합을 의미하는 never 타입은 Union으로 묶일 경우 사라집니다. 그 이유는 공집합과 어떤 집합의 합집합은 그냥 원본 집합이 되기 때문입니다.
// 따라서 최종적으로 타입 A는 number | boolean 타입이 됩니다. 