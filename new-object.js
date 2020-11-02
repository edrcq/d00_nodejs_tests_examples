
class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    setPoints(pts) {
        this.points = pts
    }
}

const stud1 = new Student('Jean', 19)

console.log(stud1)

stud1.setPoints(10)

console.log(stud1)

Student.prototype.setPoints = function(pts) {
    this.points = 20
}

stud1.setPoints(11)

console.log(stud1)