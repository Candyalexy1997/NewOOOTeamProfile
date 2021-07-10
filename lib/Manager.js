const Employee = require('./Employee')

class Manager {
    constructor (id, name, email, officeNumber ) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
