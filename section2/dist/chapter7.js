// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
function func2() {
    console.log("hello");
}
//never
//never -> 존재하지 않는
//불가능한 타입
//보통 다음과 같이 함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용된다.
function func3() {
    while (true) { }
}
//함수 func3는 무한 루프를 돌기 때문에 아무런 값도 반환할 수 없다. 
//엄밀히 말하면 이 함수는 영원히 종료될 수 없기 때문에 뭔가를 반환한다는 것 자체가 '불가능' 하다.
//이렇게 불가능 한 값의 타입을 정의할 때 never 타입을 사용한다.
// 무한 루프 외에도 다음과 같이 의도적으로 오류를 발생시키는 함수도 never 타입으로 반환값 타입을 정의할 수 있다.
function func4() {
    throw new Error();
}
export {};
// 변수의 타입을 never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없게 된다. 
// let anyVar: any;
// (...)
// let a: never;
// a = 1;
// a = null;
// a = undefined;
// a = anyVar;
