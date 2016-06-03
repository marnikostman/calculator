  var currentNumber = 0;
  var memoryNumber = 0;
  var lastOperator = "";

  function clearCalc() {
    currentNumber = 0;
    memoryNumber = 0;
    lastOperator = "";
    document.getElementById("display").innerHTML = currentNumber;
  }

  function selectNum (number) {
    currentNumber *= 10;
    currentNumber += number;
    document.getElementById("display").innerHTML = currentNumber;
  }

  function plus() {
    memoryNumber = currentNumber;
    currentNumber = 0;
    lastOperator = "+";
  }

  function minus() {
    memoryNumber = currentNumber;
    currentNumber = 0;
    lastOperator = "-";
  }

  function multiply() {
    memoryNumber = currentNumber;
    currentNumber = 0;
    lastOperator = "*";
  }

  function divide() {
    memoryNumber = currentNumber;
    currentNumber = 0;
    lastOperator = "/";
  }

  function remainder() {
    memoryNumber = currentNumber;
    currentNumber = 0;
    lastOperator = "%";
  }

  function power() {
    memoryNumber = currentNumber;
    currentNumber = 0;
    lastOperator = "^";
  }

  function equals() {
    switch(lastOperator) {
      case "+":
          currentNumber = currentNumber + memoryNumber;
          document.getElementById("display").innerHTML = currentNumber;
          lastOperator = "";
          break;
      case "-":
          currentNumber = memoryNumber - currentNumber;
          document.getElementById("display").innerHTML = currentNumber;
          lastOperator = "";
          break;
      case "*":
          currentNumber = currentNumber * memoryNumber;
          document.getElementById("display").innerHTML = currentNumber;
          lastOperator = "";
          break;
      case "/":
          currentNumber = memoryNumber / currentNumber;
          document.getElementById("display").innerHTML = currentNumber;
          lastOperator = "";
          break;
      case "%":
          currentNumber = memoryNumber % currentNumber;
          document.getElementById("display").innerHTML = currentNumber;
          lastOperator = "";
          break;
      case "^":
          currentNumber = Math.pow(memoryNumber, currentNumber);
          document.getElementById("display").innerHTML = currentNumber;
          lastOperator = "";
          break;
      default:
          document.getElementById("display").innerHTML = currentNumber;
          lastOperator = "";
          break;
      }
  }
