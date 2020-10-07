describe("Given that I have chosen rock", () => {
	let myMove = moves.ROCK

	describe('When the opponent chooses scissors', () => {
		let theirMove = moves.SCISSORS;

		it("Then I win", () => {
			let winner = playRound(myMove, theirMove);
			expect(winner).toBe(winners.ME)
		})
	})
	
	describe('When the opponent chooses paper', () => {
		let theirMove = moves.PAPER

		it('Then they win', () => {
			let winner = playRound(myMove, theirMove)
			expect(winner).toBe(winners.THEM)
		})
	})

	describe('When the opponent chooses rock', () => {
		let theirMove = moves.ROCK

		it('Then it should be a draw', () => {
			let winner = playRound(myMove, theirMove)
			expect(winner).toBe(winners.DRAW)
		})
	})
})

describe('Given that I have chosen scissors', () => {
	let myMove = moves.SCISSORS

	describe('When the opponent chooses rock', () => {
		let theirMove = moves.ROCK

		it('Then they should win', () => {
			let winner = playRound(myMove, theirMove)

			expect(winner).toBe(winners.THEM)
		})
	})

	describe('When the opponent chooses paper', () => {
		let theirMove = moves.PAPER

		it('Then I should win', () => {
			let winner = playRound(myMove, theirMove)

			expect(winner).toBe(winners.ME)
		})
	})
	
	describe('When the opponent chooses scissors', () => {
		let theirMove = moves.SCISSORS

		it('Then it should be a draw', () => {
			let winner = playRound(myMove, theirMove)

			expect(winner).toBe(winners.DRAW)
		})
	})
})

describe('Given that I have chosen paper', () => {
	let myMove = moves.PAPER

	describe('When the opponent chooses rock', () => {
		let theirMove = moves.ROCK

		it('Then I should win', () => {
			let winner = playRound(myMove, theirMove)

			expect(winner).toBe(winners.ME)
		})
	})
	
	describe('When the opponent chooses scissors', () => {
		let theirMove = moves.SCISSORS

		it('Then they should win', () => {
			let winner = playRound(myMove, theirMove)

			expect(winner).toBe(winners.THEM)
		})
	})
	
	describe('When the opponent chooses paper', () => {
		let theirMove = moves.PAPER

		it('Then it should be a draw', () => {
			let winner = playRound(myMove, theirMove)

			expect(winner).toBe(winners.DRAW)
		})
	})
	
})

