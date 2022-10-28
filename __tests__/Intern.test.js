const Intern = require("../lib/Intern");

// test start up
test("creating an employee profile", () => {
    const intern = new Intern ()
    
    expect(typeof(intern)).toBe("object");
});

// setting
test("Set name arguemnts", () => {
    const testValue = "name";
    const intern = new Intern (testValue);

    expect(intern.name).toBe(testValue);
});

test("Set id arguments", () => {
    const testValue = 100;
    const intern = new Intern ("Foo", testValue);

    expect(employee.id).toBe(testValue);
});

test("Set email argument", () => {
    const testValue = "email";
    const intern = new Intern ("brandon@email.com", testValue)

    expect(intern.email).toBe(testValue);
});

test("Set school argument", () => {
    const testValue = "school";
    const intern = new Intern ("school", testValue);

    esxpect(intern.school).toBe(testValue);
})


// getting
test("get name argument", () => {
    const testValue ="Brandon";
    const intern = new Intern(testValue);

    expect(intern.getName()).toBe(testValue);
});

test("get id argument", () => {
    const testValue = 100;
    const intern = Intern(testValue);

    expect(intern.getId()).toBe(testValue);
})

test("get email argument", () => {
    const testValue = "brandon@email.com";
    const intern = new Intern(testValue);

    expect(intern.getEmail()).toBe(testValue);
});

test("get role argument", () => {
    const testValue = "Intern";
    const intern = new Intern(testValue)

    expect(intern.getRole()).toBe(testValue);
});

test("get school argument", () => {
    const testValue = "UCF";
    const intern = new Intern(testValue);

    expect(intern.getSchool()).toBe(testValue);
});