function exampleOne(numberValue) {

  function integerCheck(data) {
    if(Number.isInteger(data) === true) {
      return data;
    } else {
      return new Error('이 함수는 정수가 필요합니다.');
    }
  }

  function innerOne(one) {
    return one + 1;
  }

  function innerTwo(two) {
    return two + 2;
  }

  function innerThree(three) {
    return three + 3;
  }

  function innerFour(four) {
    return four + 4;
  }

  integerCheck(numberValue);
  const first = innerOne(numberValue);
  console.log(first);
  const second = innerTwo(first);
  console.log(second);
  const third = innerThree(second);
  console.log(third);
  const fourth = innerFour(third);
  console.log(fourth);


  return fourth;
}

//? promise를 사용한 부분은 개념이 정립이 되어있지 않은 상태
//? 조금 더 해봐야하거나 개념을 좀 더 확실하게 정립해야할 필요가 있어보임

// promise를 사용한 경우
function exampleTwo(numberValue) {
  function integerCheck(data) {
    return new Promise((resolve, reject) => {
      if(Number.isInteger(data) === true) {
        resolve(data);
      } else {
        reject(new Error('이 함수는 정수가 필요합니다.'));
      }
    })
  }

  function innerOne(one) {
    return new Promise((resolve) => resolve(one + 1));
  }
  function innerTwo(two) {
    return new Promise((resolve) => resolve(two + 2));
  }
  function innerThree(three) {
    return new Promise((resolve) => resolve(three + 3));
  }
  function innerFour(four) {
    return new Promise((resolve) => resolve(four + 4));
  }

  //? promise 부분은 구글링 검색한 후 개념 찾아서 진행
  //? 밑 return 부분은 chatgpt이용해서 답을 구함
  return (async() => {
    try {
      vaildData = await integerCheck(numberValue);
      console.log(await innerOne(vaildData));
      console.log(await innerTwo(await innerOne(vaildData)));
      console.log(await innerThree(await innerTwo(await innerOne(vaildData))));
      const fourth = await innerFour(await innerThree(await innerTwo(await innerOne(vaildData))));
      console.log(fourth);
    } catch (error) {
      console.log(error);
    }
  })();
}

//? class는 계속해서 시도를 해도 처음부터 만드는게 손에 익지 않은 상태임
//? 강사님 말대로 간단한 class라도 계속 만들어보는 것이 중요할 듯 싶음
// class를 사용한 경우
class addCount {
  constructor(numberValue) {
    this.numberValue = numberValue;
  }

  integerCheck(data) {
    if(Number.isInteger(data) === true) {
      return data;
    } else {
      return new Error('이 함수는 정수가 필요합니다.');
    }
  }

  innerOne(one) {
    return one + 1;
  }

  innerTwo(two) {
    return two + 2;
  }

  innerThree(three) {
    return three + 3;
  }

  innerFour(four) {
    return four + 4;
  }

  consolePrint() {
    this.vaildData = this.integerCheck(this.numberValue);
    const first = this.innerOne(this.numberValue);
    const second = this.innerTwo(first);
    const third = this.innerThree(second);
    const fourth = this.innerFour(third);
    return fourth;
  }
}

// const result = exampleTwo(10);
// console.log(result);

const example = new addCount(10);
const result = example.consolePrint();
console.log(result);