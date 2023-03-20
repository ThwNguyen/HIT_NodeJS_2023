//object constructor
function User1(studentCode, password, firstName, lastName, age, faculty, role) {
    this.studentCode = studentCode
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.faculty = faculty
    this.role = role
}

var user = new User1('2021605518', '123', 'hung', 'Truong', 17, 'IT', ['admin', 'user'])

console.log(user)

//class 
class User2 {
    constructor(studentCode, password, firstName, lastName, age, faculty, role) {
        this.studentCode = studentCode
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.faculty = faculty
        this.role = role
    }
}

user = new User2('2021605518', '123', 'Hung', 'Truong', 17, 'IT', ['admin', 'user'])


console.log(user)