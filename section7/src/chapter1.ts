//4가지의 사례를 살펴보며 제네릭의 타입 변수를 더 잘 활용하는 방법에 대해 살펴봅니다.

//사례 1
//만약 2개의 타입 변수가 필요한 상황이라면 다음과 같이 T, U 처럼 2개의 타입 변수를 사용해도 됩니다.
function swap<T, U>(a: T, b: U) {
    return [b, a];
  }
  
  const [a, b] = swap("1", 2);
//위 코드에서 T는 String 타입으로 U는 Number 타입으로 추론됩니다.

//사례 2
// 다양한 배열 타입을 인수로 받는 제네릭 함수를 만들어야 한다면 다음과 같이 할 수 있습니다.
// function returnFirstValue<T>(data: T[]) {
//   return data[0];
// }

// let num = returnFirstValue([0, 1, 2]);
// // number

// let str = returnFirstValue([1, "hello", "mynameis"]);
// // number | string

// 함수 매개변수 data의 타입을 T[]로 설정했기 때문에 배열이 아닌 값은 인수로 전달할 수 없게 됩니다. 배열을 인수로 전달하면 T는 배열의 요소 타입으로 할당됩니다.
// 첫번째 호출에서는 인수로 Number[] 타입의 값을 전달했으므로 이때의 T는 Number 타입으로 추론됩니다. 이때의 함수 반환값 타입은 Number 타입이 됩니다.
// 두번째 호출에서는 인수로 (String | Number)[] 타입의 값을 전달했으므로 이때의 T는 String | Number 타입으로 추론됩니다. 이때의 함수 반환값 타입은 String | Number 타입이 됩니다.


//사례 3
// 위 사례에서 만약 반환값의 타입을 배열의 첫번째 요소의 타입이 되도록 하려면 다음과 같이 튜플 타입과 나머지 파라미터를 이용하면 됩니다.
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str = returnFirstValue([1, "hello", "mynameis"]);
// number

//함수 매개변수의 타입을 정의할 때 튜플 타입을 이용해 첫번째 요소의 타입은 T 그리고 나머지 요소의 타입은 …unknown[] 으로 길이도 타입도 상관 없도록 정의합니다.
// 함수를 호출하고 [1, “hello”, “mynameis”] 같은 배열 타입의 값을 인수로 전달하면 T는 첫번째 요소의 타입인 Number 타입이 됩니다. 따라서 함수 반환값 타입또한 Number 타입이 됩니다.


//사례 4
// 마지막으로 살펴볼 사례는 타입 변수를 제한하는 사례입니다. 타입 변수를 제한한다는 것은 함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한을 두는 것을 의미합니다. 
// 다음은 타입 변수를 적어도 length 프로퍼티를 갖는 객체 타입으로 제한한 예시 입니다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123");            // ✅

getLength([1, 2, 3]);        // ✅

getLength({ length: 1 });    // ✅

// getLength(undefined);        // ❌

// getLength(null);             // ❌

//타입 변수를 제한할 때에는 확장(extends)을 이용합니다.
// 위와 같이 T extends { length : number } 라고 정의하면 T는 이제 { length : number } 객체 타입의 서브 타입이 됩니다. 
// 바꿔말하면 이제 T는 무조건 Number 타입의 프로퍼티 length 를 가지고 있는 타입이 되어야 한다는 것 입니다. 
// 따라서 이렇게 extends를 이용해 타입 변수를 제한하면 아래와 같은 결과가 나타납니다.
// 1번 호출은 인수로 length 프로퍼티가 존재하는 String 타입의 값을 전달 했으므로 허용됩니다.
// 2번 호출은 인수로 length 프로퍼티가 존재하는 Number[] 타입의 값을 전달 했으므로 허용됩니다.
// 3번 호출은 인수로 length 프로퍼티가 존재하는 객체 타입의 값을 전달 했으므로 허용됩니다.
// 4번 호출은 인수로 undefined을 전달했으므로 오류가 발생합니다.
// 5번 호출은 인수로 null을 전달했으므로 오류가 발생합니다.