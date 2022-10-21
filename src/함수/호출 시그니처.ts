{
  /*
    1. 호출 시그니처
    - 함수 타입의 문법이며 함수의 전체 타입을 표현하는 방법이다.
    - 화살표 함수의 생김새와 비슷하다.
    - 함수 호출 시그니처는 함수 바디를 포함하지 않기 때문에 타입을 추론할 수 없으므로 반환타입을 명시한다.
  */

  type A = (x: number, y: number) => number;
  type B = (x: string, y?: string) => void;
  type C = (...args: number[]) => number;

  const a: A = (x, y) => x + y;
  a(1, 3);

  const b: B = (x) => {
    console.log(x);
  };
  b('B');

  const c: C = (...args) => args.reduce((acc, curr) => acc + curr);
  c(1, 2, 3, 4);
  /*
    2. 문맥적 타입화
    - 함수 호출을 할 경우 매개변수에 타입을 지정하지 않아도 된다.
    - 콜백함수는 설정된 타입이 있으며 인라인으로 콜백함수를 주지 않으면 타입추론이 any가 된다.
  */

  // 타입 추론 가능
  function times(f: (index: number) => void, n: number) {
    for (let i = 0; i < n; i++) {
      f(i);
    }
  }

  times((n) => console.log(n), 4);

  // 타입 추론 n: number를 필수로 명시한다.
  function f(n: number) {
    console.log(n);
  }

  times(f, 4);

  /*
    3. 호출 시그니처 종류
    - 호출 시그니처에는 2가지로 단축형 호출 시그니처와 전체 호출 시그니처가 있다.
    - 오버로딩을 사용할 경우에는 전체 호출 시그니처를 사용한다.
  */

  type Sum1 = (x: number, y: number) => number;
  const sum1: Sum1 = (x, y) => x + y;
  sum1(3, 2);

  // 함수 오버로딩을 사용할 경우에는 any 타입을 사용한다.
  // Sum2에서 타입 검사를 해주기 때문이다.

  type Sum2 = {
    (x: number, y: number): number;
    (x: string, y: string): string;
  };

  const sum2: Sum2 = (x: any, y: any) => x + y;
  sum2(3, 2);
  sum2('a', 'b');
  // 오버로드 오류 발생
  // sum2(1, '2');
}
