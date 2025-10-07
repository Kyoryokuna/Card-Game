const board = document.querySelector(".board")
const cards = document.querySelectorAll(".card")
const notifs = document.querySelector("#notify")

const currentPair = ["",""]
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
    if (currentPair[1] = "") {
        c1 = card
        c1.UpdateState(c1, "toggled")
        currentPair[1] = c1
    }else{
        c2 = card
        c2.UpdateState(c2, "toggled")
        currentPair[2] = c2
    }

    if (currentPair[1] === currentPair[2]) {
        console.log("A match has been found")
        c1.Activate(c1, "active")
        c2.Activate(c2, "active")

        currentPair = ["",""]
        correctPairs++
        CheckWin()
    }

    if (currentPair[1] !== currentPair[2] && currentPair[2] !== "") {
        notifs.textContent = "Incorrect pair "
        setTimeout(() => {
            c1.UpdateState(c1, "toggled")
            c2.UpdateState(c2, "toggled")
            ResetTurn()
        },2000)
    }
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        CheckPair(card)
    })
})