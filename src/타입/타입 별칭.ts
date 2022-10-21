{
  /*
  1. type을 선언해서 변수처럼 사용이 가능하다 (타입 별칭)
  2. 타입 리터럴이 가능하다.
  3. 타입 리터럴을 사용하면 유니온, 인터섹션을 사용가능하다.
*/

  // 타입 별칭을 사용하지 않는 경우
  const a: {
    name: string;
    age: number;
    grade: number;
  } = {
    name: '홍길동',
    age: 20,
    grade: 3,
  };

  // 타입 별칭을 사용하면 형태의 추론을 분리하여 알아보기가 쉬워진다.
  type Student = {
    name: string;
    age: number;
    grade: number;
  };

  const b: Student = {
    name: '한석봉',
    age: 21,
    grade: 10,
  };
}
