const hand = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
  return hand[Math.floor(Math.random()*hand.length)];
}
function getHumanChoice(choice){
  if (hand.includes(choice)) {
    return choice;
  }else {
  return ("Geçersiz Seçim."); 
  }
} 
let humanScore=(0);
let computerScore=(0);
function playRound(humanChoice,computerChoice){
  humanChoice=humanChoice.toLowerCase();
computerChoice=computerChoice.toLowerCase();
//İkisini de küçük harflere dönüştürdük.
 if(humanChoice===computerChoice){
  return "It's a tie!";
 } 
 if((humanChoice==='rock'&& computerChoice==='scissors')||
 (humanChoice==='paper'&&computerChoice==='rock')||
 (humanChoice==='scissors'&&computerChoice==='paper')){
   humanScore++;
   return `You win! ${humanChoice} beats ${computerChoice}`;
 }else {
   computerScore++;
   return "You lose! "+computerChoice+" beats "  +humanChoice;
 }
}
function playGame() {
for (let i = 0; i < 3; i++) {
    const humanChoice = hand[i % 3]; 
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
 }
  if (humanScore > computerScore) {
    const result = "You win the game!";
    console.log(result);
    return result;
  } else if (computerScore > humanScore) {
    const result = "You lose the game!";
    console.log(result);
    return result;
  } else {
    const result = "The game is a tie!";
    console.log(result);
    return result;
  }
}