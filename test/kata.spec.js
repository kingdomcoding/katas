describe("Person", function () {
  it("has a greeting", function() {
	// arrange
	let person = new Person();
	// act
	let actual = person.greet;
	// assert
	let expected = "Hello!";
	expect(actual).toBe(expected);
  });
});
