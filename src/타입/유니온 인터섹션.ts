{
  /*
  유니온: 
  - 두 집합이 존재할 때 합집합을 나타내며 (|)로 표시한다.
  - 수학적 합집합과 개념이 다르다.
  - 타입스크립트에서 유니온은 항상 둘 중 하나의 타입을 모두 사용해야 하며 다른 타입을 가져올 수 있다.
  
  인터섹션: 
  - 두 집합이 존재할 때 교집합을 나타내며 (&)로 표시한다.
  - 수학적 교집합과 개념이 다르다.
  - 항상 둘 중 하나의 타입을 모두 사용해야 하며 겹치는 교집합의 원소들이 아닌 프로퍼티도 포함시켜야 한다.
  - 유니온이 더 넓은 개념으로 인터섹션은 자주 사용하지 않는다.
*/

  type Student = { name: string; age: number; grade: number };
  type People = { name: string; age: number; sex: string };
  type StudentOrPeople = Student | People;
  type StudentAndPeople = Student & People;

  // 유니온
  let a: StudentOrPeople = {
    name: '홍길동',
    age: 20,
    grade: 1,
  };

  a = {
    name: '한석봉',
    age: 21,
    sex: 'male',
  };

  a = {
    name: '홍길동',
    age: 20,
    grade: 1,
    sex: 'male',
  };

  // 인터섹션
  const b: StudentAndPeople = {
    name: '홍길동',
    age: 20,
    grade: 1,
    sex: 'male',
  };
}
