function playRound(myMove, theirMove) {
  if((myMove === "rock"  && theirMove === "scissors") || (myMove === "scissors" && theirMove === "paper") || (myMove === "paper" && theirMove === "rock"))
    return "me";
  
  if(myMove === theirMove)
    return "neither";

  return "them";
}