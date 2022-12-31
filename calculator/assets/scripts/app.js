const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calcutateResult(calculationType){
  const enteredNumber = getUserNumberInput();
  if(
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ){
  return 
 }
 const initialResult = currentResult;
 let mathOperator;
 if(calculationType === 'ADD'){
  currentResult += enteredNumber
  mathOperator = '+'
} else if (calculationType === 'SUBTRACT'){
  currentResult -= enteredNumber
  mathOperator = '-'
}  else if (calculationType === 'MULTIPLY') {
  currentResult *= enteredNumber;
  mathOperator = '*';
} else if (calculationType === 'DIVIDE') {
  currentResult /= enteredNumber;
  mathOperator = '/';
}
createAndWriteOutput('+', initialResult, enteredNumber);
writeToLog('ADD', initialResult, enteredNumber, currentResult);


}



function add() {
  calcutateResult('ADD')
  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult += enteredNumber;
  // createAndWriteOutput('+', initialResult, enteredNumber);
  // writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  calcutateResult('SUBTRACT')

  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult -= enteredNumber;
  // createAndWriteOutput('-', initialResult, enteredNumber);
  // writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  calcutateResult('MULTIPLY')

  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult *= enteredNumber;
  // createAndWriteOutput('*', initialResult, enteredNumber);
  // writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  calcutateResult('DIVIDE')

  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult /= enteredNumber;
  // createAndWriteOutput('/', initialResult, enteredNumber);
  // writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);