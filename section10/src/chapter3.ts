//조건부 타입

//1. Exclude<T, K>
// Exclude 타입은 다음과 같이 T로부터 U를 제거하는 타입입니다.
type A = Exclude<string | boolean, string>;
// boolean
//직접 구현 하면 다음과 같습니다.
type Exlcude<T, U> = T extends U ? never : T;


//2. Extract<T, K>
// Extract 타입은 다음과 같이 T로 부터 U를 추출하는 타입입니다
type B = Extract<string | boolean, boolean>;
// boolean
//직접 구현하면 다음과 같습니다.
type Extract<T, U> = T extends U ? T : never;


//3. ReturnType<T>
// ReturnType은 타입변수 T에 할당된 함수 타입의 반환값 타입을 추출하는 타입입니다. 이 타입도 이전에 살펴본 적 있으므로 간단히 살펴보겠습니다.
type ReturnType<T extends (...args: any) => any> = T extends (
    ...agrs: any
  ) => infer R
    ? R
    : never;
  
  function funcA() {
    return "hello";
  }
  
  function funcB() {
    return 10;
  }
  
  type ReturnA = ReturnType<typeof funcA>;
  // string
  
  type ReturnB = ReturnType<typeof funcB>;
  // number
   