alert("welcome to calculator");



//input number 1
const number1 = document.getElementById("number1");
//input number 2
const number2 = document.getElementById("number2");
//input operator
const operator = document.getElementById("operator");
//submit operator
const submit = document.getElementById("submit");
//view result
const result = document.getElementById("result");
//process operator
submit.addEventListener("click", () => {
    result.innerText = eval(number1.value + operator.value + number2.value);
});