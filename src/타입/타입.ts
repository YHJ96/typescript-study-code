{
  /*
  1. any 
  - 타입 타입스크립트 컴파일러가 타입검사를 포기한다.
  - any 타입은 되도록 사용하지 않아야 한다.
*/

  const a1: any = 666;
  const b1: any = ['danger'];
  const c1 = a1 + b1;

  /*
  2. unknown
  - any처럼 모든 값을 대표하지만 타입을 검사한다.
  - 현재의 타입은 모르지만 나중에는 타입을 지정하는 느낌으로 사용한다.
  - any 대신 unknown을 사용해야 한다.
*/

  const a2: unknown = 30;
  const b2 = a2 === 123;
  // 현재 값은 30으로 number 타입이지만 타입 지정을 unknown이라고 했으므로 c2의는 타입 오류가 나오게된다.
  // const c2 = a2 + 10;

  if (typeof a2 === 'number') {
    const d2 = a2 + 10;
  }

  /*
  3. 원시 타입
  - 원시 타입에는 string, number, boolean, bigint, symbol, undefined, null이 존재한다.
  - 타입을 알려주는 방식은 4가지가 존재한다.
  - let과 const에 따라서 타입이 달라질 수 도 있다. (타입 좁히기, 타입 넓히기)
*/

  // 원시 값은 보통 타입을 지정하지 않고 사용한다. (a3, b3) 변수의 방법을 선택한다.
  let a3 = 'str';
  const b3 = 'str';
  let c3: string = 'str';
  let d3: 'str' = 'str';

  /*
  4. 참조 타입 (객체)
  - 객체의 프로퍼티에 타입을 지정해주지 않아도 자동으로 타입을 추론한다.
  - 객체는 프로퍼티를 추가하거나 필요한 프로퍼티를 제공하지 않으면 오류를 발생시킨다.
*/

  let a4 = {
    a: 'x',
  };

  // 타입추론으로 인해 오류가 발생한다.
  // a4.a = 1;

  // 타입을 프로퍼티에 맞게 지정할 수 있다.
  const b4: {
    name: string;
    age: number;
  } = {
    name: 'YHJ',
    age: 25,
  };

  /* 
  객체 프로퍼티 방법 3가지
  1. 프로퍼티 타입 지정
  2. 옵셔널
  3. 인덱스 시그니처
  4. readonly
*/

  const c4: {
    // (1)
    name: string;
    // (2) 프로퍼티를 포함할 수 있다.
    age?: number;
    // (3) [key: T]: U T타입의 키를 가지면서 U타입의 값을 갖는 프로퍼티를 가질 수 있다.
    [key: number]: boolean;
    // (4) 프로퍼티의 값을 읽기 전용으로 수정한다.
    readonly address: string;
  } = {
    name: 'YHJ',
    1: true,
    address: 'seoul',
  };

  // readonly으로 인해 오류가 발생한다.
  // c4.address = 'busan';

  /*
  4. 참조 타입 (배열)
  - 2가지 문법을 지원한다.
  - 배열을 동형으로 제작하는 방법이 제일 좋은 방법이다. (타입)
  - 타입 스크립트는 튜플 타입도 지원한다.
  - readonly 사용이 가능하다.
  */

  const a5: string[] = [];
  const b5: Array<string> = [];
  a5.push('a');
  a5.push('b');
  // 오류 출력
  // a5.push(1);

  // 튜플은 배열의 서브 타입으로 길이가 고정되어있으며 인덱스의 타입이 알려진 배열이다.
  const c5: [string, string] = ['홍길동', 'seoul'];
  const d5: readonly string[] = ['한석봉', 'busan'];

  // readonly으로 인해 오류가 발생한다.
  // d5[1] = 'seoul';
  // d5.push('a');

  /* 
  5. 기타 타입
  - 자바스크립트에서는 존재하지 않으며 타입스크립트에만 존재하는 타입이다.
  - void, never 타입을 지원한다.
  - void는 함수에서 사용하며 명시적으로 아무것도 반환하지 않는다는 의미이다.
  - tsconfig에서 암시적인 any를 피하기 위해서 noImplicitAny fasle를 해줘야한다.
  - never 타입은 존재하지 않는 값이다. (공집합) 타입 필터링도 가능하게 한다.
  */

  // void 타입
  function log(): void {
    console.log('Hello World');
  }

  // never 타입 필터링
  type Foo = {
    name: 'foo';
    id: number;
  };

  type Bar = {
    name: 'bar';
    id: number;
  };

  type All = Foo | Bar;

  type ExtractTypeByName<T, G> = T extends { name: G } ? T : never;

  type ExtractedType = ExtractTypeByName<All, 'foo'>; // 결과 타입은 Foo
}
