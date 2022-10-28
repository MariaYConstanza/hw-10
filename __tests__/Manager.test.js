const Manager = require("../lib/Manager");


// test start up
test("creating an employee profile", () => {
    const manager = new Manager ()
    
    expect(typeof(manager)).toBe("object");
});



// setting
test("Set name arguemnts", () => {
    const testValue = "name";
    const manager = new Manager (testValue);

    expect(manager.name).toBe(testValue);
});

test("Set id arguments", () => {
    const testValue = 100;
    const manager = new Manager ("Foo", testValue);

    expect(manager.id).toBe(testValue);
});

test("Set email argument", () => {
    const testValue = "email";
    const manager = new Manager ("levi@email.com", testValue)

    expect(manager.email).toBe(testValue);
});

test("Set office number argument", () => {
    const testValue = 1110;
    const manager = new Manager ("Foo", testValue);

    esxpect(manager.school).toBe(testValue);
})

test("Set github argument", () => {
    const testValue = "github";
    const manager = new Manager ("levi10", testValue);

    expect(manager.github).toBe(testValue);
});



// getting
test("get name argument", () => {
    const testValue ="Levi";
    const manager = new Manager(testValue);

    expect(manager.getName()).toBe(testValue);
});

test("get id argument", () => {
    const testValue = 100;
    const manager = Manager(testValue);

    expect(manager.getId()).toBe(testValue);
})

test("get email argument", () => {
    const testValue = "levi@email.com";
    const manager = new Manager(testValue);

    expect(manager.getEmail()).toBe(testValue);
});

test("get role argument", () => {
    const testValue = "manager";
    const manager = new Manager(testValue)

    expect(manager.getRole()).toBe(testValue);
});

test("get office number argument", () => {
    const testValue = 1110;
    const manager = new Manager(testValue);

    expect(manager.getOfficeNumber()).toBe(testValue);
});

test("get github argument", () => {
    const testValue = "levi10";
    const manager = new Manager(testValue);

    expect(manager.getGithub()).toBe(testValue);
});