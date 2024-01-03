
const squares = document.querySelectorAll('.square')

const mole = document.querySelector('.mole')

//
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')


let result = 0 
let hitPostion  
let timeId = null
let currentTime = 60



function randomSquare() {
    squares.forEach(square  => {
        square.classList.remove('mole')
    })
     
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPostion = randomSquare.id 
   

}

// grab the 

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.id == hitPostion ){
            result++
            score.textContent = result
            hitPostion = null
        }


    })

})


function moveMole() {
    timeId = setInterval(randomSquare, 1000)


}


moveMole()


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0){
        clearInterval(countDowntimeId)
        clearInterval(timeId)
        alert('Game Over! Your final score is ' + result)
    }


}

let countDowntimeId = setInterval(countDown,1000)

