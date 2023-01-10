const Employee = require("../lib/Employee");

test("Can create new Employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("From constructor should be able to set a NAME", () => {
  const name = "Name";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("From constructor should be able to set an ID", () => {
  const testValue = 100;
  const e = new Employee("Bob", testValue);
  expect(e.id).toBe(testValue);
});

test("From constructor should be able to set an EMAIL", () => {
  const testValue = "test@test.com";
  const e = new Employee("Email", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Name";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Id", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Test", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Name", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});