//인터페이스와 클래스
// 타입스크립트의 인터페이스는 클래스의 설계도 역할을 할 수 있습니다.
// 쉽게말해 다음과 같이 인터페이스를 이용해 클래스에 어떤 필드들이 존재하고, 어떤 메서드가 존재하는지 정의할 수 있습니다.
interface CharacterInterface { //캐릭터 객체 타입을 정의하는 인터페이스
    name: string;       //이름
    moveSpeed: number;  // 이동속도
    move(): void;       // 실제로 이동하는 메서드, 호출시그니처사용
  }
  
  class Character implements CharacterInterface { // implements:구현하다. 캐릭터 클래스는 캐릭터 인터페이스를 구현한다.
    //생성자
    constructor(public name: string, public moveSpeed: number,private extra: string) { //인터페이스로 정의하는 필드들은 무조건 public입니다. private 필드가 필요하다면 인터페이스에 정의하지말고 따로 정의를 해줘야합니다. 
      
    }
  
    move(): void {
      console.log(`${this.moveSpeed} 속도로 이동!`);
    }
  }

//인터페이스 CharacterInterface는 name, moveSpeed 프로퍼티와 move 메서드를 갖는 객체 타입을 정의합니다. 
//그런데 이 인터페이스를 클래스에서 implements 키워드와 함께 사용하면 이제부터 이 클래스가 생성하는 객체는 모두 이 인터페이스 타입을 만족하도록 클래스를 구현해야 합니다.