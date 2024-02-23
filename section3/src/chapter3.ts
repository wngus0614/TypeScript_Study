//----------타입 계층도와 함께 객체 타입간의 호환성 살펴보기-----------

// 객체 타입간의 호환성도 동일한 기준으로 판단합니다. 
// 모든 객체 타입은 각각 다른 객체 타입들과 슈퍼-서브 타입 관계를 갖습니다. 
// 따라서 업 캐스팅은 허용하고 다운 캐스팅은 허용하지 않습니다. 다음 예시와 함께 자세히 살펴보겠습니다.
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // ✅ OK
// dog = animal; // ❌ NO
//Animal 타입의 변수 animal에 Dog 타입의 변수 dog를 할당하는 것은 가능합니다. 
//그러나 반대로 dog 변수에 animal 변수의 값을 할당하는 것은 불가능합니다. Animal 타입이 Dog 타입의 슈퍼타입이기 때문입니다. 
//그런데 Animal 타입이 왜 Dog 타입의 슈퍼 타입일까요? 언뜻 보면 Dog 타입이 더 많은 프로퍼티를 정의하고 있어 슈퍼타입처럼 보일 수 있지만 그 반대입니다.
//타입스크립트는 프로퍼티를 기준으로 타입을 정의하는 구조적 타입 시스템을 따른다고 배웠던 적 있습니다. 
//따라서 Animal 타입은 name과 color 프로퍼티를 갖는 모든 객체들을 포함하는 집합으로 볼 수 있고 Dog 타입은 name과 color 거기에다 추가로 breed 프로퍼티를 갖는 모든 객체를 포함하는 집합으로 볼 수 있습니다.
//그러므로 어떤 객체가 Dog 타입에 포함된다면 무조건 Animal 타입에도 포함됩니다. 그러나 반대로 Animal 타입에 포함되는 모든 객체가 Dog 타입에 포함되는것은 아닙니다. 따라서 결국 Animal은 Dog의 슈퍼타입입니다.

type Book = {
    name: string;
    price: number;
  };
  
  type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
  };
  
  let book: Book;
  let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
  };
  
  book = programmingBook; // ✅ OK
//   programmingBook = book; // ❌ NO
// Book 타입은 ProgrammingBook 타입의 슈퍼타입입니다. 이유는 위 예제와 동일합니다.


// 초과 프로퍼티 검사
// 그런데 이때 만약 새로운 변수를 만들고 다음과 같이 초기값을 설정하면 오류가 발생합니다.
type Book2 = {
  name: string;
  price: number;
};

type ProgrammingBook2 = {
  name: string;
  price: number;
  skill: string;
};

let book3: Book2 = { // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs"
};

//이것은 ‘초과 프로퍼티 검사’가 발동해서 그렇습니다. 초과 프로퍼티 검사란 변수를 객체 리터럴로 초기화 할 때 발동하는 타입스크립트의 특수한 기능입니다. 
//이 기능은 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막습니다.
//따라서 위 코드는 Book 타입에 정의되지 않은 skill 프로퍼티를 갖는 객체를 할당하려고 했으므로 초과 프로퍼티 검사가 실패해 오류가 발생하고 있는 것 입니다.
//이런 초과 프로퍼티 검사는 단순히 변수를 초기화 할 때 객체 리터럴을 사용하지만 않으면 발생하지 않습니다. 
//따라서 다음과 같이 값을 별도의 다른 변수에 보관한 다음 변수 값을 초기화 값으로 사용하면 발생하지 않습니다.

let book4: Book = programmingBook; // 앞서 만들어둔 변수

function func(book: Book) {}
func({ // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs"
});
// 함수의 매개변수에 인수로 값을 전달하는 과정도 변수를 초기화 하는 과정과 동일합니다. 
// 따라서 초과 프로퍼티 검사가 발동하게 됩니다. 이때에도 역시 검사를 피하고 싶다면 다음과 같이 변수에 미리 값을 담아둔 다음 변수값을 인수로 전달하면 됩니다.
func(programmingBook);