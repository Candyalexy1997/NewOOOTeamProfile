const Employee = require('./Employee');

class Intern {
    constructor (id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

}

module.exports = Intern;