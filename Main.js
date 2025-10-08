const board = document.querySelector(".board")
const cards = document.querySelectorAll(".card")
const notifs = document.querySelector("#notify")

let currentPair = ["",""]
let c1 = ""
let c2 = ""
let correctPairs = 0

const UpdateState = function(card, state) {
    card.classList.toggle(state)
}

const ResetBoard = function() {
    
}

const ResetTurn = function() {
    currentPair = ["", ""]
    c1 = ""
    c2 = ""
}

const CheckWin = function() {
    if (correctPairs === 10) {
        notifs.textContent = "Congratulations you won"
        ResetBoard()
    }
}

const CheckPair = function(card) {
    if (card.classList.contains("toggled") || card.classList.contains("active") || c2 !== "") return; 

    if (currentPair[0] === "") {
        c1 = card
        console.log(c1)
        UpdateState(c1, "toggled")
        currentPair[0] = c1
    }else{
        c2 = card
        console.log(c2)
        UpdateState(c2, "toggled")
        currentPair[1] = c2
    }

    if (!currentPair[0] || !currentPair[1]) return;

    if (currentPair[0].dataset.image === currentPair[1].dataset.image) {
        UpdateState(c1, "toggled")
        UpdateState(c2, "toggled")
        console.log("A match has been found")
        UpdateState(c1, "active")
        UpdateState(c2, "active")

        notifs.textContent = "Correct"
        setTimeout(() => {
            ResetTurn()
            correctPairs++
            CheckWin()
            notifs.textContent = `Matches: ${correctPairs}`
        }, 800)
    }else{
        notifs.textContent = "Incorrect pair "
        setTimeout(() => {
            UpdateState(c1, "toggled")
            UpdateState(c2, "toggled")
            ResetTurn()
            notifs.textContent = `Matches: ${correctPairs}`
        },800)
    }
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        CheckPair(card)
    })
})