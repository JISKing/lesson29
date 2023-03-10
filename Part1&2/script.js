function count(expression) {
  function getValues(expression) {
    let values = [...expression];
    return values;
  }

  let values = getValues(expression);
  switch (values[1]) {
    case "+":
      return showResult(sum(values));
    case "-":
      return showResult(subtract(values));
    case "*":
      return showResult(multiply(values));
    case "/":
      return showResult(devide(values));
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
function devide(values) {
  try {
    if (values[2] === "0") {
      throw new Error("Can't divide by 0");
    }
    return parseInt(values[0]) / parseInt(values[2]);
  } catch (e) {
    console.log(e.name + ": " + e.message);
    return 0;
  }
}
