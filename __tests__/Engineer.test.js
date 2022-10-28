const Engineer = require("../lib/Engineer");


// test start up
test("creating an employee profile", () => {
    const engineer = new Engineer ()
    
    expect(typeof(engineer)).toBe("object");
});



// setting
test("Set name arguemnts", () => {
    const testValue = "name";
    const engineer = new Engineer (testValue);

    expect(employee.name).toBe(testValue);
});

test("Set id arguments", () => {
    const testValue = 100;
    const engineer = new Engineer ("Foo", testValue);

    expect(employee.id).toBe(testValue);
});

test("Set email argument", () => {
    const testValue = "email";
    const employee = new Engineer ("nikih@email.com", testValue)

    expect(employee.email).toBe(testValue);
});

test("Set github argument", () => {
    const testValue = "github";
    const engineer = new Engineer ("niki10", testValue);

    expect(engineer.github).toBe(testValue);
});




// getting
test("get name argument", () => {
    const testValue ="Niki";
    const engineer = new Engineer(testValue);

    expect(engineer.getName()).toBe(testValue);
});

test("get id argument", () => {
    const testValue = 100;
    const employee = Engineer(testValue);

    expect(engineer.getId()).toBe(testValue);
})

test("get email argument", () => {
    const testValue = "niki@email.com";
    const engineer = new Engineer(testValue);

    expect(engineer.getEmail()).toBe(testValue);
});

test("get role argument", () => {
    const testValue = "engineer";
    const engineer = new Engineer(testValue)

    expect(engineer.getRole()).toBe(testValue);
});

test("get github argument", () => {
    const testValue = "niki10";
    const employee = new Employee(testValue);

    expect(employee.getGithub()).toBe(testValue);
});