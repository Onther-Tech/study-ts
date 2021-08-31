//Type Alias와 Interface 차이를 이해하는 것이 중요

type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

//공통점
//Object
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
};

//Class
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

//Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

//차이점
//interfaces can be merged
// interface PositionInterface {
//      z: number;
//  }

//Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; //string

//Union type
type Direction = "left" | "right";

//Interface는 규격 사항
//규격을 통한 구현이 이루어질 땐 Interface 사용을 권장

//Type은 데이터를 담을 목적일 때 Type을 사용하는 것이 대부분 좋음
//레거시 코드는 Interface를 선호하는 코드가 많은데
//이는 타입 스크립트 초창기 Type이 단순 데이터 타입 선언 이외에 지금처럼 발전하지 않았기 때문
