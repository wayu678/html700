// String , number boolean , array , object
// 1. String 
let name = 'Print'
const idcard = '6521604376';
console.log('My name is',firstname);

// 2. Number
let number = 20;
let height = 164.5;

// 3. Boolean
let isHandsome = true;

// 4. Array
firstname = 'Pim'
idcard = '4567';

console.log('My name is',firstname);
console.log('Number is',number);

/*
+ บวก
- ลบ
* คูณ
/ หาร 
% หารเอาเศษ
*/
let num1 = 10;
let num2 = 5;
let result = num1 - num2;
console.log('result is',result)

/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>= มากกว่าหรือเท่ากับ
< น้อยกว่า
<= น้อยกว่าหรือเท่ากับ
*/
let num3 = 5;
let num4 = 3;
let condition = num3 != num4; // boolean (true/false)
console.log('num is',condition);
// if - else condition
if (num3 >= num4) { //false
    console.log('Yes'); 
} elseif (num3 == num4)  { 
    console.log('this is elseif')
} else {
    console.log('this is else');
}
if () {

}

/*
grade
>= 80 = A
>= 70 = B
>= 60 = C
>= 50 = D
*/
let score = prompt('Enter your score');
console.log('have score',score);
// if - else condition
if (score >= 80) { //false
    console.log('you are A')
} else if (score >= 70) { //false
    console.log('you are B')
} else if (score >= 60) { //true
    console.log('you are C')
} else if (score >= 50) {
    console.log('you are D')
} else {
    console.log('you are F')
}

/*
&& และ
|| หรือ
! not หรือ ไม่
*/
let number1 = 5
let number2 = 8
// true && true
let condition = number1 >= 3 || number2 >= 10
console.log('result of condition:',condition)

let age = 30
let gender = 'male'

if (age >= 20 && gender == 'male') {
    console.log('you are male.')
}

let number = 20
if (!(number % 2 == 0)) {
    console.log('you are evan number')
}

/*
while
for
*/
let counter = 0;

while (counter <= 10) { //true
    console.log('hello word');
    counter = counter + 1
    counter += 1
    counter++
}

for (let counter = 0 ; counter < 10; counter = counter++) {
    console.log('hello word')
}

/*
array
*/
let age1 = 20;
let age2 = 30;
let age3 = 40;
console.log(age1, age2, age3);

let ages = [20, 30, 40, 45, 50]

if(!ages.includes(40)){ //true
    console.log('you have 40')
}

let ages = [35, 15, 20]
console.log(ages);

ages.sort();

console.log(ages);

let name_list = ['Bob', 'Alice', 'Joe'];
name_list.push('Carol');

console.log(name_list.length);
console.log(name_list[0]);
console.log(name_list[1]);
console.log(name_list[2]);
console.log(name_list[3]);

for (let index = 0; index < name_list.length; index++) {
    console.log('name list ',name_list[index]);
}

/*
object
*/
let student = [{
    age: 30,
    name: 'mario',
    grade: 4.5,
},{
    age: 30,
    name: 'yoshi',
    grade: 4.5,
}]

students.pop()

for(let index = 0; index < student.length; index++) {
    console.log('Student number',(index + 1))
    console.log('name',student[index].name);
    console.log('age',student[index].age);
    console.log('grade',student[index].grade);
}

/*
array
*/
let scores = [10, 20, 30, 40];
for (let index = 0; index < score.length; index++) {
    console.log('score:',score[index]);
}
score.forEach((s) => {
console.log('score:',s)
})
//map , filter
//score[0] = score[0] * 2
//score[1] = score[1] * 2
//score[2] = score[2] * 2
//score[3] = score[3] * 2

score = score.map((s) => {
        return s * 2
    })

score.forEach((s) => {
    console.log('new score:',s)
    })

/*object*/
let score1 = 50
let score2 = 60
// ประกาศ function, arrow function
let calculation_grade = (score) => {
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}
// การเรียกใช้ function
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('score1 = ' + grade1)
console.log('score2 = ' + grade2)

function calculation_grade2(score) {
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

/*array*/
let score = [10, 20, 30, 40];

for (let index = 0; index < score.length; index++) {
    console.log('score:',score[index]);
   // if (score[index] >= 30) {
   //     newScore.push(score[index])
   // }
}
let newScore = score.filter((s) => {
    return s >= 30
})
newScore.forEach((ns) => {
    console.log('new score:',ns)
})

/*object function*/
let students = [
    {
        name: 'Aa',
        score: 90,
        grade: 'A'
    },{
        name: 'Bb',
        score: 80,
        grade: 'B' 
    },{
        name: 'Cc',
        score: 70,
        grade: 'C'
    }
]

let student = students.find((s) => {
    if (s.name == 'Bb') {
        return true
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
    return s
})
console.log('student',student)
console.log('doublescore_student',doublescore_student)

let highScore_student = students.filter((s) => {
    if (s.score >= 80) {
    return true
    }
})
console.log('student',student)
console.log('highScore_student',highScore_student)