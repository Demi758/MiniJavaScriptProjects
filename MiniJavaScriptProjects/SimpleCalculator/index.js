let num1 = document.getElementById("thing1")
let num2 = document.getElementById("thing2")
let textEl = document.getElementById("result-el")
document.getElementById("dugme").addEventListener("click",clear())

function summarize()
{
    textEl.textContent = "RESULT: "
    result = parseInt(num1.value) + parseInt(num2.value)
    textEl.textContent += " " + result
}

function subtract()
{
    textEl.textContent = "RESULT: "
    result = num1.value - num2.value
    textEl.textContent += " " + result
}

function multiply()
{
    textEl.textContent = "RESULT: "
    result = num1.value * num2.value
    textEl.textContent += " " + result
}

function divide()
{
    textEl.textContent = "RESULT: "
    result = num1.value / num2.value
    textEl.textContent += " " + result
}

function clear_result()
{
    textEl.textContent = "RESULT: "
}
