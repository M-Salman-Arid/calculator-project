
let ArrNum = [];

function updatevalue(value){
  const  showNum = document.querySelector('.js-showResult');
  showNum.textContent = value;
}

function numberPass(n) {
  ArrNum.push(n);
  updatevalue(ArrNum.join(''));
}

function operation (op) {
  ArrNum.push(op);
  updatevalue(ArrNum.join(''));
}

function clearAll() {
  ArrNum = [];
  updatevalue('0');
}

function calculation () {
  const equation = ArrNum.join('');
  try {
    const result = eval(equation);
    updatevalue(result);
    ArrNum = [result]
  }
  catch (e) {
    updatevalue('Error!')
  }
}

document.addEventListener('keydown', function (event) {
  const key = event.key;
  if(!isNaN(key) && key !== '') {
     numberPass(Number(key));
  }

  if(key === '+' || key === '-' || key === '*' || key === '/') {
    operation(key);
  }

  if(key === 'Enter') {
    calculation();
  }

  if(key === 'Delete' || key === 'Backspace') {
    clearAll();
  }
});