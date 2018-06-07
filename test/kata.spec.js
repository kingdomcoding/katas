describe("Person", function () {
  it("has a greeting", function() {
	// arrange
	let person = new Person();
	// act
	let actual = person.greet;
	// assert
	const expected = "Hello!";
	expect(actual).toBe(expected);
  });
});
