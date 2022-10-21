{
  /*
    1. 함수 타입 표현 방법
    - 매개변수의 타입은 명시적으로 정의한다.
    - 반환 타입은 자동으로 추론하게 하는 것이 보통이다.
    - 매개변수의 타입은 필수로 사용하며 반환 타입은 선택적으로 사용한다.
    - 함수의 선언 방식은 보통 4가지 형태이다.
  */

  // 1. 함수 선언식
  function a(x: number, y: number): number {
    return x + y;
  }
  // 2. 함수 표현식
  const b = function (x: number, y: number): number {
    return x + y;
  };
  // 3. 화살표 함수 표현식
  const c = (x: number, y: number): number => {
    return x + y;
  };
  // 4. 화살표 함수 단축 표현식
  const d = (x: number, y: number): number => x + y;

  /* 
    2. 함수의 매개변수의 종류
    - 함수의 매개변수에는 크게 4가지로 필수 매개변수, 선택 매개변수, 기본 매개변수, 나머지 매개변수가 존재한다.
  */

  // (1) 필수 매개변수
  function a1(x: number, y: number) {
    return x + y;
  }

  a1(3, 2);
  // 필수 매개변수는 반드시 함수 호출을 할 경우 파라미터의 값으로 모두 사용되어야 한다.
  // a1(3);

  // (2) 선택 매개변수
  function b1(x: number, y?: number) {
    if (y) return x + y;
    else return x;
  }

  b1(3, 2);
  b1(3);

  // (3) 기본 매개변수
  // 파라미터의 기본값을 설정하면 자동으로 타입을 지정한다.
  function c1(x = 0, y = 0) {
    return x + y;
  }

  /* 
    이런 형태도 가능하지만 기본 값을 설정하여 파라미터 타입 추론이 가능함으로 사용하지 않는다.
    function c1(x: number = 0, y: number = 0) {
      return x + y;
    }
  */

  // (4) 나머지 매개변수
  function d1(...args: number[]) {
    return args.reduce((acc, curr) => acc + curr);
  }

  d1(1, 2, 3, 4);
  d1(1, 2, 3);

  /*
    3. this 타입
    - 함수에서 call,apply,bind로 인해 this의 사용이 가능함으로 this 타입도 지원한다.
    - this 타입은 파라미터를 정의하는 부분의 맨 첫 번째로 정의한다.
    - this는 클래스를 제외하고 사용을 지양한다.
    - 객체의 메소드에서도 this를 사용하기 보다는 순수함수로 만드는 것이 좋다.
  */

  type Num = {
    x: number;
    y: number;
  };

  function a2(this: Num, x: number, y: number) {
    return this.x + this.y + x + y;
  }
}
