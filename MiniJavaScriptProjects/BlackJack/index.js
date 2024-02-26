let firstCard
let secondCard
let sum
let hasBlackJack = false
let isAlive = true
let message = ""
let printedMsg = document.getElementById("message-el")
let printedCnum = document.getElementById("cards-el")
let printedSum = document.getElementById("sum-el")


function startGame()
{
    firstCard = Math.floor(Math.random() * 14) + 2
    secondCard = Math.floor(Math.random() * 14) + 2
    sum = firstCard + secondCard

    if(sum <= 20)
    {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21)
    {
        message = "You've got BlackJack!"
        hasBlackJack = true
    }
    else 
    {
        message = "You're out of the game!"
        isAlive = false
    }

    printedCnum.textContent = "Cards:"
    printedSum.textContent = "Sum:"
    printedMsg.textContent = message
    printedCnum.textContent += firstCard + ", " + secondCard
    printedSum.textContent += sum
}


