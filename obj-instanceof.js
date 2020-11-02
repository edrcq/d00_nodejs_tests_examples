
class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    setPoints(pts) {
        this.points = pts
    }
}

const stud1 = new Student('Jean', 22)

function checkStudent(student) {
    // ... if ()
    console.log('is student instanceof Student', student instanceof Array)
    if (student.age > 21) {
        return true
    }
    return false
}

console.log(checkStudent([]))