let userScore = 0;
let compScore = 0;
let drawScore = 0;
const choices = document.querySelectorAll(".choice");
console.log(choices);    //get 3 node stone paper scissor

// user choice
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        user_choice = choice.getAttribute("id");
        playGame(user_choice);
    });
});


const playGame = () => {
    console.log("user choice =", user_choice);

    // Generate computer choice
    let choose = ["rock", "paper", "scissor"];
    let comp_choice = choose[Math.floor(Math.random() * choose.length)];
    console.log("Computer choice:", comp_choice);

    // checking for winner
    if (comp_choice == user_choice) {
        console.log("Draw")
        drawScore += 1
    }
    else if (comp_choice == "scissor" && user_choice == "paper") {
        console.log("Computer win")
        compScore += 1
    }
    else if (comp_choice == "scissor" && user_choice == "rock") {
        console.log("user win")
        userScore += 1
    }
    else if (comp_choice == "paper" && user_choice == "scissor") {
        console.log("user win")
        userScore += 1
    }
    else if (comp_choice == "paper" && user_choice == "rock") {
        console.log("computer win")
        compScore += 1
    }
    else if (comp_choice == "rock" && user_choice == "scissor") {
        console.log("computer win")
        compScore += 1
    }
    else if (comp_choice == "rock" && user_choice == "paper") {
        console.log("user win")
        userScore += 1
    }

    // printing score at console
    console.log("Computer score", compScore)
    console.log("User score", userScore)

    // updating score at page
    let user_score = document.querySelector("#user-score");
    let comp_score = document.querySelector("#comp-score");
    let draw_score = document.querySelector("#draw-score");
    user_score.innerHTML = userScore;
    comp_score.innerHTML = compScore;
    draw_score.innerHTML = drawScore;
};