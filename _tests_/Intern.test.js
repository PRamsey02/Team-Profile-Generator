const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Steve Harrington', 9, 'Steve@demogorgon.com', 'HU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Steve Harrington', 9, 'Steve@demogorgon.com', 'HU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Steve Harrington', 9, 'Steve@demogorgon.com', 'HU');

    expect(intern.getRole()).toEqual("Intern");
});