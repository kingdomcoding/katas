describe("Given that I have chosen rock", function () {
	let myMove = "rock";

	describe("When the opponent chooses scissors", function () {
		let theirMove = "scissors";

		it("Then I should win", function () {
			
			let winner = playRound(myMove, theirMove);

			expect(winner).toBe("me");
		});
	});

	describe("When the opponent chooses paper", function() {
		let theirMove = "paper";

		it("Then they should win", function() {
			let winner = playRound(myMove, theirMove);

			expect(winner).toBe("them");
		});
	});

	describe("When the opponent chooses rock", function() {
		let theirMove = "rock";

		it("Then it should be a draw", function() {
			let winner = playRound(myMove, theirMove);

			expect(winner).toBe("neither");
		})
	})
	
});

describe("Given that I have chosen scissors", function () {
	let myMove = "scissors";

	describe("When the opponent chooses rock", function () {
		let theirMove = "rock";

		it("Then they should win", function() {
			let winner = playRound(myMove, theirMove);

			expect(winner).toBe("them");
		})
	});

	describe("When the opponent chooses paper", function() {
		let theirMove = "paper";

		it("Then I should win", function() {
			let winner = playRound(myMove, theirMove);

			expect(winner).toBe("me");
		})
	})

	describe("When the opponent chooses scissors", function() {
		let theirMove = "scissors";

		it("Then it should be a draw", function() {
			let winner = playRound(myMove, theirMove);

			expect(winner).toBe("neither");
		});
	})
});

describe("Given that I have chosen paper", function () {
	let myMove = "paper";

	describe("When the opponent chooses scissors", function () {
		let theirMove = "scissors";

		it("Then they should win", function() {
			let winner = playRound(myMove, theirMove);

			expect(winner).toBe("them");
		});
	});
	
	describe("When the opponent chooses rock", function() {
		let theirMove =  "rock";

		it("Then I should win", function() {
			let winner = playRound(myMove, theirMove);

			expect(winner).toBe("me");
		});
	});	

	describe('When the opponent chosses paper', function() {
		let theirMove = "paper";

		it("Then it should be a draw", function() {
			let winner = playRound(myMove, theirMove);

			expect(winner).toBe("neither");
		})
	})
	
});