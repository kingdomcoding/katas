describe("Person", function () {
  it("has a greeting", function() {
	// arrange
	var person = new Person();
	// act
	var actual = person.greet;
	// assert
	expect(actual).toBe("Hello!");
  });
});
