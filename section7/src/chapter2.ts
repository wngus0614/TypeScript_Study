// Map, ForEach 메서드 타입 정의하기
// 이번 시간에는 이전에 배운 제네릭을 이용해 자바스크립트의 배열 메서드 Map, ForEach를 직접 구현하고 타입을 정의해보겠습니다. 

//1. Map 메서드 타입 정의하기
// 자바스크립트의 배열 메서드 Map은 다음과 같이 원본 배열의 각 요소에 콜백함수를 수행하고 반환된 값들을 모아 새로운 배열로 만들어 반환합니다.
// const arr = [1, 2, 3];
// const newArr = arr.map((it) => it * 2);
// // [2, 4, 6]

//map 메서드를 직접 함수로 만들고 타입도 정의하겠습니다. 먼저 제네릭 함수가 아닌 일반적인 함수로 만듭니다.
// function map(arr: unknown[], callback: (item: unknown) => unknown): unknown[] {}
//메서드를 적용할 배열을 매개변수 arr로 받고, 콜백 함수를 매개변수 callback으로 받습니다.
// map 메서드는 모든 타입의 배열에 적용할 수 있기 때문에 arr의 타입은 unknown[]으로 정의합니다. 
// callback의 타입은 배열 요소 하나를 매개변수로 받아 특정 값을 반환하는 함수로 정의합니다. 함수 타입 표현식을 이용했습니다. 
// 마지막으로 map 메서드의 반환값의 타입은 배열 타입으로 정의합니다.
// 다음으로는 이 함수에 타입 변수를 선언하여 제네릭 함수로 만듭니다.
// function map<T>(arr: T[], callback: (item: T) => T): T[] {}
//모든 unknown 타입을 타입 변수 T로 대체합니다. 다음으로는 함수 내부를 구현합니다.
// function map<T>(arr: T[], callback: (item: T) => T): T[] {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i]));
//     }
//     return result;
//   }
// //1차적으로 map 함수를 만들고 타입 정의도 마쳤습니다. 이제 함수를 호출합니다.
// const arr = [1, 2, 3];

// function map<T>(arr: T[], callback: (item: T) => T): T[] {
//   (...)
// }

// map(arr, (it) => it * 2);
// // number[] 타입의 배열을 반환
// // 결과 : [2, 4, 6]

//잘 동작하는 것 같습니다. 
//매개변수 arr에 number[] 타입의 배열을 제공하니 타입변수 T가 number로 추론되고 그 결과 map 함수의 반환값 타입도 number[]가 되었습니다.
// 그런데 문제가 한가지 있습니다. 함수 호출을 다음과 같이 수정하면 오류가 발생합니다.
// const arr = [1, 2, 3];

// function map<T>(arr: T[], callback: (item: T) => T): T[] {
//   (...)
// }

// map(arr, (it) => it.toString()); // ❌
//콜백함수가 모든 배열 요소를 String 타입으로 변환하도록 수정했습니다. 이러면 오류가 발생합니다. 
//첫번째 인수로 arr을 전달했을 때 타입 변수 T에는 number 타입이 할당되었기 때문에 콜백 함수의 반환값 타입도 number 타입이 되어야 하기 때문입니다. 
//그런데 map 메서드는 이렇게 원본 배열 타입과 다른 타입의 배열로도 변환할 수 있어야 합니다. 따라서 타입 변수를 하나 더 추가해 다음과 같이 수정합니다.
const arr = [1, 2, 3];

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
}

map(arr, (it) => it.toString());
// string[] 타입의 배열을 반환
// 결과 : ["1", "2", "3"]

// 원본 배열의 타입과 새롭게 반환하는 배열의 타입을 다르게 설정해 주었습니다. 그 결과 호출문의 오류가 사라지고 잘 작동합니다.


//2. ForEach 메서드 타입 정의하기
// 다음으로는 forEach 메서드도 직접 구현하고 타입도 함께 정의해보겠습니다. 
// forEach 메서드는 다음과 같이 배열의 모든 요소에 콜백함수를 한번씩 수행해주는 메서드 입니다.
const arr2 = [1, 2, 3];

arr2.forEach((it) => console.log(it));
// 출력 : 1, 2, 3

//ForEach 메서드는 Map 메서드보다 훨씬 만들기도 쉽고 타입 정의도 간단합니다.
function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }
// Map과 동일하게 2개의 매개변수를 받습니다.
// 첫번째 매개변수 arr에는 순회 대상 배열을 제공받고 두번째 매개변수 callback에는 모든 배열 요소에 수행할 함수를 제공 받습니다. 
// 이때 아까 Map 메서드의 타입 정의와는 달리 forEach 메서드는 반환값이 없는 메서드이므로 콜백 함수의 반환값 타입을 void로 정의합니다.