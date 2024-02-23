//서로소 유니온 타입
//서로소 유니온 타입은 교집합이 없는 타입들 즉 서로소 관계에 있는 타입들을 모아 만든 유니온 타입을 말 합니다. 예시와 함께 살펴봅니다.
// 다음과 같은 간단한 회원 관리 프로그램이 있다고 가정합니다.
// type Admin = {
//     name: string;
//     kickCount: number;
//   };
  
//   type Member = {
//     name: string;
//     point: number;
//   };
  
//   type Guest = {
//     name: string;
//     visitCount: number;
//   };
  
//   type User = Admin | Member | Guest;
  
//   function login(user: User) {
//     if ("kickCount" in user) {
//           // Admin
//       console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
//     } else if ("point" in user) {
//           // Member
//       console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
//     } else {
//           // Guest
//       console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
//     }
//   }

//회원의 역할 분류에 따라 3개의 타입을 각각 정의해 주었습니다. 그리고 이 3개의 타입의 합집합 타입인 User 타입도 만들어 주었습니다. 
// login 함수는 User 타입의 매개변수 user를 받아 회원의 역할에 따라 각각 다른 기능을 수행하도록 합니다. 자세한 동작은 다음과 같습니다.
// 첫번째 조건문이 참이되면 user에 kickCount 프로퍼티가 있으므로 이 유저는 Admin 타입으로 좁혀집니다.
// 두번째 조건문이 참이되면 user에 point 프로퍼티가 있으므로 이 유저는 Member 타입으로 좁혀집니다.
// 세번째 else 문까지 오면 user는 남은 타입인 Guest 타입으로 좁혀집니다.
// 그러나 이렇게 코드를 작성하면 조건식만 보고 어떤 타입으로 좁혀지는지 바로 파악하기가 좀 어렵습니다. 결과적으로 직관적이지 못한 코드입니다.
// 이럴 때에는 다음과 같이 각 타입에 태그 프로퍼티를 추가 정의해주면 됩니다.

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin 타입에는 “ADMIN” String Literal 타입의 tag 프로퍼티를,
// Member 타입에는 “MEMBER” String Literal 타입의 tag 프로퍼티를,
// Guest 타입에는 “GUEST” String Literal 타입의 tag 프로퍼티를 각각 추가합니다.
// 그럼 이제 login 함수의 타입가드를 다음과 같이 더 직관적으로 수정할 수 있게 됩니다.
// function login(user: User) {
//   if (user.tag === "ADMIN") {
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
//   } else if (user.tag === "MEMBER") {
//     console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
//   } else {
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
//   }
// }

//또는 switch를 이용해 더 직관적으로 변경할 수도 있습니다.

function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
      break;
    }
  }
}