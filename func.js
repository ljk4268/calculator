// 연산을 위한 함수
export function operating(firstNum, op, secondNum) {
  if (op === '') {
    return secondNum
  }
  // 연산을 하고 연산한 결과를 리턴해줘야함. 
  else {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (op === '÷')
      return firstNum / secondNum;
    if (op === '+')
      return firstNum + secondNum;
    if (op === '-')
      return firstNum - secondNum;
    if (op === '*')
      return firstNum * secondNum;
  }
}
