// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
//문자열 열거형
// enum의 멤버에는 숫자 말고도 문자열 값도 할당할 수 있다.
// 따라서 만약 다음과 같이 국가별 언어를 열거하는 enum이 필요하다면 각 멤버에 문자열 값을 할당하면 된다.
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이주현",
    role: Role.ADMIN, // 0 관리자
    language: Language.korean // "ko" ,문자열 enum을 사용하면 user1.language 같은 프로퍼티에 실수로 “ko”라고 적었어야 할 것을 오타가 발생해 “kos”로 적거나 또는 순간적으로 헷갈려 “KO-kr” 처럼 적는 실수를 방지할 수 있습니다.
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 1 회원
    language: Language.english
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2 게스트
};
console.log(user1, user2, user3);
export {};
