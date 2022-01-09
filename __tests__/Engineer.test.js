const Engineer = require("../lib/engineer");

test("Generates Engineer Object", () => {
  const engineer = new Engineer("EngineNick");
  engineer.github = "username";

  expect(engineer.github).toBe("username");
});
