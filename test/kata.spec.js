describe("Person", function () {
  it("has a greeting", function() {
	// arrange
    	var person = new Person();
	// act
	var result = person.greet;
	// assert
    	expect(result).toBe("Hello!");
  });
});
