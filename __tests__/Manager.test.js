const Manager = require("../lib/Manager");

test("Generates manager Object", () => {
  const manager = new Manager("big cheese");
  manager.officeNumber = "1";

  expect(manager.officeNumber).toEqual("1");
});
