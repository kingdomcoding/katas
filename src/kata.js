let winners = {
  ME: 'me',
  THEM: 'them',
  DRAW: 'draw'
}

let moves = {
	ROCK: "rock",
	PAPER: "paper",
	SCISSORS: "scissors"
}

function playRound(myMove, theirMove) {
  if((myMove === moves.ROCK && theirMove === moves.SCISSORS) || (myMove === moves.SCISSORS && theirMove === moves.PAPER) || (myMove === moves.PAPER && theirMove === moves.ROCK))
    return winners.ME

  if((myMove === moves.SCISSORS && theirMove === moves.ROCK) || (myMove === moves.ROCK && theirMove === moves.PAPER) || (myMove === moves.PAPER && theirMove === moves.SCISSORS))
    return winners.THEM

  return winners.DRAW
}