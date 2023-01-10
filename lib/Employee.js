//each team member will use this constructor 
//each member will use the name id and email object. 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id
        this.email = email;
    }
    getName() {
        return this.name
    };
    getId() {
        return this.id

    };
    getEmail() {
        return this.email
    };
    getRole() {
        return "Employee"
    };
}

module.exports = Employee;