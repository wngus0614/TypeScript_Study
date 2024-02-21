// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "juhyun"];

let boolArr: Array<boolean> = [true,false,true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:(number|string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1:[number,number] = [1,2];

let tup2: [number, string, boolean] = [1, "hello", true];

// 튜플을 왜 쓰는걸까?
// 다음과 같이 회원 정보를 2차원 배열로 저장하는 상황을 가정해 보자.
const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "조아무개"], // 순서를 잘못 배치해 새로 추가, 바로 오류가 발생한다. 
                     //튜플을 사용하면 이와 같은 실수를 빨리 잡을 수 있다.
  ];