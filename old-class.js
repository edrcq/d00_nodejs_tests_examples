function Student(name, age) {
    this.name = name
    this.age = age
}

const stud1 = new Student('Jean', 18)

console.log(stud1)

Student.prototype.setPoints = function(pts) {
    this.points = pts
}

stud1.setPoints(10)
console.log(stud1)