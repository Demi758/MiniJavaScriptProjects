let countEl = document.getElementById("counter-el")
let count = 0

let saveEl = document.getElementById("save-el")

function increment()
{
    count += 1
    countEl.textContent = count
}

function save()
{
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}