// 타입 별칭
// 타입 별칭을 이용하면 다음과 같이 변수를 선언하듯 타입을 별도로 정의할 수 있다.
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
  };
  
  let user: User = {
    id: 1,
    name: "이주현",
    nickname: "wngus",
    birth: "1998.06.14",
    bio: "안녕하세요",
    location: "경산시",
  };
  
  let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "wngus",
    birth: "1998.06.14",
    bio: "안녕하세요",
    location: "경산시",
  };


// 인덱스 시그니처
// 인덱스 시그니쳐는 객체 타입을 유연하게 정의할 수 있도록 돕는 특수한 문법이다.
// 다양한 국가들의 영어 코드를 저장하는 객체가 하나 있다고 가정해보자.
// 만약 이때 countryCodes에 100개의 프로퍼티(국가 코드)가 추가 되어야 한다면 타입 정의에도 각100개의 프로퍼티를 모두 정의해주어야 하기 때문에 매우 불편할 것 이다.
// 바로 이럴때 인덱스 시그니쳐를 이용하면 다음과 같이 간단하게 타입을 정의할 수 있다.
// [key : string] : string 은 인덱스 시그니쳐 문법으로 이 객체 타입에는 key가 string 타입이고 value가 string 타입인 모든 프로퍼티를 포함된다 라는 의미이다. 
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil : 'bz'
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let CountryNumberCodes : CountryNumberCodes = {
  Korea : 410
};