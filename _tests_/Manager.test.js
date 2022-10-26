const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Jim Hopper', 8, 'Jim@demogorgon.com', 8);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Jim Hopper', 8, 'Jim@demogorgon.com', 8);

    expect(manager.getRole()).toEqual("Manager");
});