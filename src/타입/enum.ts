{
  /*
  - enum은 열거형으로 객체와 사용 방법이 비슷하다.
  - 값을 숫자로 받으면 자동으로 추론한다.
  - 요즘에는 사용하지 않으며 as const로 대체하여 사용할 것을 공식문서에서도 권장한다.
  */

  enum Grade {
    first = 1,
    second = 2,
    third,
  }

  const a = Grade.first;
  console.log(a);
  // enum의 모든 프로퍼티 값은 읽기 전용으로 에러 발생
  // Grade.first = 3;
  /*
    자바스크립트 엔진이 컴파일 과정에서 즉시 실행함수로 설정한다.
    let Grade;
    (function (Grade) {
        Grade[Grade["first"] = 1] = "first";
        Grade[Grade["second"] = 2] = "second";
        Grade[Grade["third"] = 3] = "third";
    })(Grade || (Grade = {}));
    const a = Grade.first;
    console.log(a);
  */

  // as const로 enum을 대체한다.
  const GradeObj = {
    first: 1,
    second: 2,
    third: 3,
  } as const;

  const b = GradeObj.first;
}
