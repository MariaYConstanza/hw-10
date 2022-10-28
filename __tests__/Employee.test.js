const Employee = require("../lib/Employee");


// test start up
test("creating an employee profile", () => {
    const employee = new Employee ()
    
    expect(typeof(employee)).toBe("object");
});



// setting
test("Set name arguemnts", () => {
    const testValue = "name";
    const employee = new Employee (testValue);

    expect(employee.name).toBe(testValue);
});

test("Set id arguments", () => {
    const testValue = 100;
    const employee = new Employee ("Foo", testValue);

    expect(employee.id).toBe(testValue);
});

test("Set email argument", () => {
    const testValue = "email";
    const employee = new Employee ("sarah@email.com", testValue);

    expect(employee.email).toBe(testValue);
});

test("Set github argument", () => {
    const testValue = "github";
    const employee = new Employee ("sarah10", testValue);

    expect(employee.github).toBe(testValue);
});



// getting
test("get name argument", () => {
    const testValue ="Sarah";
    const employee = new Employee(testValue);

    expect(employee.getName()).toBe(testValue);
});

test("get id argument", () => {
    const testValue = 100;
    const employee = Employee(testValue);

    expect(employee.getId()).toBe(testValue);
})

test("get email argument", () => {
    const testValue = "sarah@email.com";
    const employee = new Employee(testValue);

    expect(employee.getEmail()).toBe(testValue);
});

test("get role argument", () => {
    const testValue = " ";
    const employee = new Employee(testValue)

    expect(employee.getRole()).toBe(testValue);
});

test("get github argument", () => {
    const testValue = "sarah10";
    const employee = new Employee(testValue);

    expect(employee.getGithub()).toBe(testValue);
});