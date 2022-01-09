const Intern = require("../lib/Intern");

test("Generate Intern Object", () => {
  const intern = new Intern("WageCuck");
  intern.school = "uni";

  expect(intern.school).toBe("uni");
});
