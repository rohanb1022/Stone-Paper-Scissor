let options = ["paper", "rock", "scissor"];

let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let scissor = document.querySelector(".scissor");
let starter = document.querySelector(".main");
let userChoice = document.querySelector(".choice");
let compchoice = document.querySelector(".compChoice");
let result = document.querySelector(".score");
let result2 = document.querySelector(".cscore");
let refreshButton = document.getElementById('refreshButton');

let choice;
let computerchoice;
let score = 0;
let cscore = 0;


     
refreshButton.addEventListener('click', function() {
    location.reload(); // This will refresh the entire web page
});

paper.addEventListener("click" , () => {
  choice = "paper";
  userChoice.innerText = "paper"
  userChoice.style = "font-size : 40px"
  winning();
  result.innerText = score;
  result2.innerText = cscore;
})
rock.addEventListener("click" , () => {
  choice = "rock";
  userChoice.innerText = "rock"
  userChoice.style = "font-size : 40px"
  winning();
  result.innerText = score;
  result2.innerText = cscore
})
scissor.addEventListener("click" , () => {
  choice = "scissor";
  userChoice.innerText = "scissor"
  userChoice.style = "font-size : 40px"
  winning();
  result.innerText = score;
  result2.innerText = cscore;
})

let winning = () => {
  randomNumber = Math.floor(Math.random() * 3);
  computerchoice = options[randomNumber];
  compchoice.innerText = computerchoice;
  compchoice.style = "font-size: 40px"
  if (choice == computerchoice) {
    starter.innerText = "game Tie"
    starter.style = "font-size: 30px"
  }
  else if(choice == "paper"){
    let winner = true;
    winner = (computerchoice == "scissor") ? false : true;
    if(winner == true){
      starter.innerText = "You won";
      score++;
    }
    else{
      starter.innerText = "You loose";
      cscore++;
    }
  }
  else if (choice == "scissor"){
    let winner = true;
    winner = (computerchoice == "rock") ? false : true;
    if(winner == true){
      starter.innerText = "You won";
      score++;
    }
    else{
      starter.innerText = "You loose";
      cscore++;
    }
    }
  else if (choice == "rock"){
    let winner = true;
    winner = (computerchoice == "paper") ? false : true;
    if(winner == true){
      starter.innerText = "You Won";
      score++;
    }
    else{
      starter.innerText = "You loose";
      cscore++;
    }
  }
  else{
    starter.innerText = "you loose";
    cscore++;
  }
}

