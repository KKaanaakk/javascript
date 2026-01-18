let student = [
    {name: "Kanak", rollNumber: 31, marks: 99},
    {name: "Jenny", rollNumber: 6, marks: 40},
    {name: "Bunny", rollNumber: 15, marks: 30},
    {name: "Sara", rollNumber: 55, marks: 80},
]

// Q - Return only name of students in Capital

const nameOnly = student.map(stu => stu.name.toUpperCase())

console.log(nameOnly)

// ------------------------------------

// Q - Return only details of those who scored more than 60 marks

const toppers = student.filter(stu => stu.marks >= 60)

console.log(toppers)

// ------------------------------------

// Q - Return only details of those who marks more that 25 & rollNumber greater that 10

const toppersTop = student.filter(stu => stu.marks >= 25 && stu.rollNumber > 10)

console.log(toppersTop)

// ------------------------------------

// Q - Sum of marks of all of the students

const toppersSum = student.reduce((acc, curr) => acc+curr.marks, 0)

console.log(toppersSum)

// ------------------------------------

const toppersNames = student.filter((stu) => stu.marks > 60).map(stu => stu.name)

console.log(toppersNames)

// ------------------------------------

// Q - Return total marks for students with marks greater that 60 after 20 marks have been added to those who scored less than 60

const toppersHiKehde = student.map((stu) => {
    if(stu.marks < 50){
        stu.marks += 20
    }
    return stu
}).filter(stu => stu.marks > 50).reduce((acc, curr) => acc+curr.marks, 0)

console.log(toppersHiKehde)