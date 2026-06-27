const board = document.querySelector(".board");
const startbtn = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".startGame");
const gameOverModal = document.querySelector(".gameOver");
const restartBtn = document.querySelector(".btn-restart");
const high_Score = document.querySelector("#highScore");
const Score = document.querySelector("#score");
const Time = document.querySelector("#time");

let highScore = localStorage.getItem("highScore") || 0;
let score = 0;
let time = "00-00";


const blockHeight = 30;
const blockWidth = 30;

// it generate required blocks
const cols = Math.ceil(board.clientWidth / blockWidth);
const rows = Math.ceil(board.clientHeight / blockHeight);
let intervalID = null;
let timmerIntervalID = null;

let food = {
    x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)
}

// array of blocks
const blocks = []

// Cell of snake body 
let snake = [{ x: 1, y: 3 }]

// snake direction
let direction = "down"

board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

// loop for generating blocks
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
        blocks[`${row} - ${col}`] = block
    }
}


function rander() {
    // calculate snake head
    let head = null

    // food logic
    blocks[`${food.x} - ${food.y}`].classList.add("food")

    // snake movement
    if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 }
    }
    else if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 }
    }
    else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y }
    }
    else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y }
    }
    // if snake collapse to wall
    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        clearInterval(intervalID)
        // alert("game over")
        modal.style.display = "flex"
        startGameModal.style.display = "none"
        gameOverModal.style.display = "flex"

        return;
    }
    // if snake head eat food
    if (head.x == food.x && head.y == food.y) {
        blocks[`${food.x} - ${food.y}`].classList.remove("food")
        food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }
        blocks[`${food.x} - ${food.y}`].classList.add("food")
        snake.unshift(head)  //add food at end

        // updating score
        score += 10;
        Score.innerText = score;
    }
    // saving highscore to local storage
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore.toString())
        high_Score.innerText = highScore;

    }

    snake.forEach(segment => {
        blocks[`${segment.x} - ${segment.y}`].classList.remove("fill");
    })

    // add box 
    snake.unshift(head)

    // remove box
    snake.pop()

    snake.forEach(segment => {
        blocks[`${segment.x} - ${segment.y}`].classList.add("fill");
    })
}

// intervalID = setInterval(() => {
//     rander()
// }, 300);

// onclicking start btn rander funtion call to start game
startbtn.addEventListener("click", () => {
    modal.style.display = "none"
    intervalID = setInterval(() => {
        rander()         // here we call randar function to start game 
    }, 300)

    timmerIntervalID = setInterval(() => {
        let [min,sec] = time.split("-").map(Number)

        if(sec == 59){
            min += 1
            sec = 0 
        }
        else{
            sec +=1 
        }

        
        time = `${String(min).padStart(2,"0")}-${String(sec).padStart(2, "0")}`
        Time.innerText = time
    },1000)

})

// Restart btn click function
restartBtn.addEventListener("click", restartGame)

// Restart game
function restartGame() {
    clearInterval(intervalID);
    // remove old food
    blocks[`${food.x} - ${food.y}`].classList.remove("food")

    // remove old snake
    snake.forEach(segment => {
        blocks[`${segment.x} - ${segment.y}`].classList.remove("fill")
    })

    score = 0;
    time = "00-00";

    score.innerText = score;
    time.innerText = time;
    high_Score.innerText = highScore;

    modal.style.display = "none";
    direction = "down";

    snake = [{ x: 1, y: 3 }];   //recalculate the position of snake

    food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };

    intervalID = setInterval(() => {
        rander()         // here we call randar function to restart game 
    }, 300)
};



// user key input to control snake
addEventListener("keydown", (Event) => {
    if (Event.key === "ArrowUp") {
        direction = "up"
    }
    else if (Event.key === "ArrowDown") {
        direction = "down"
    }
    else if (Event.key === "ArrowRight") {
        direction = "right"
    }
    else if (Event.key === "ArrowLeft") {
        direction = "left"
    }

});