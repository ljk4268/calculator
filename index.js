let display = document.querySelector('.result');
let buttons = document.querySelectorAll('button');
let $operator = document.querySelectorAll('.operator');
let operators = '';
let firstNum = 0;
let checkOp = false;
// 실제 필요한 값이 아니더라도 변수를 선언할 때는 초기화를 해준다. 

// 연산을 위한 함수
function operating(firstNum, op, secondNum) {
  if (op === '') {
    return secondNum
  }
  // 연산을 하고 연산한 결과를 리턴해줘야함. (2 + 2)
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



buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (display.innerText === '0') {
      display.innerText = '';
    }
    if (button.className === 'number') {
      if (checkOp === true) {
        display.innerText = '';
        checkOp = false;
      }
      display.innerText += button.innerText;
    }
    if (button.className === 'operator') {
      checkOp = true;
      // 1. 입력한 값이 없을 때
      if (display.innerText === '') {
        alert('숫자를 입력해주세요 ><!');
      } else {
        // 2. 입력한 값이 있을 때
        // 2-1. 숫자를 처음 누르고 연산자를 눌렀을 경우. (ex: 2 + ) -> 
        // 2-2. 이미 앞에 숫자 연산자 숫자를 눌르고 연산자를 또 눌렀을 경우. (ex: 2 + 2 +) = 4 + 2 +
        firstNum = operating(firstNum, operators, display.innerText);
        operators = button.innerText;
        display.innerText = firstNum;
      }
      if (button.innerText === '=') {
        display.innerText = firstNum;
      }
    }
    if (button.className === 'ac') {
      operators = '';
      firstNum = 0;
      checkOp = false;
      display.innerText = '0';
    }
  })
})



