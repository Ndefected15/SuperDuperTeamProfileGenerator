const Employee = require("../lib/Employee");

test("Generates Employee Object", () => {
  const employee = new Employee("nick");
  employee.id = "1";
  employee.email = "nick@example.com";

  expect(employee.name).toBe("nick");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("nick@example.com");
});
