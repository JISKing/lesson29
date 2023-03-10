function count(expression) {
  let values;
  try {
    if (typeof expression !== "string") {
      throw new Error("Please write in string format");
    }
    values = Values(expression); //line1
  } catch (error) {
    console.log(error.name + ": " + error.message);
    values = [0, "+", 0];
  }

  function getValues(expression) {
    let values = [...expression];
    return values;
  }

  switch (values[1]) {
    case "+":
      return showResult(sum(values));
    case "-":
      return showResult(subtract(values));
    case "*":
      return showResult(multiply(values));
    case "/":
      return showResult(divide(values));
  }
  function showResult(value) {
    return value;
  }
}

function sum(values) {
  return parseInt(values[0]) + parseInt(values[2]);
}
function subtract(values) {
  return parseInt(values[0]) - parseInt(values[2]);
}
function multiply(values) {
  return parseInt(values[0]) * parseInt(values[2]);
}
function divide(values) {
  return parseInt(values[0]) / parseInt(values[2]);
}

console.log(count(5 * 2)); // выведет "Please write in string format"
console.log(count("5 * 2")); // вызовет ошибку "Values is not defined"
