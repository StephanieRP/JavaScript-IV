// CODE here for your Lambda Classes


/*

Person
First we need a Person class. This will be our base-class
Person receives name age location gender all as props
Person receives speak as a method.
This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

*/

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

/*

Instructor
Now that we have a Person as our base class, we'll build our Instructor class.
Instructor uses the same attributes that have been set up by Person
Instructor has the following unique props:
specialty what the Instructor is good at i.e. 'redux'
favLanguage i.e. 'JavaScript, Python, Elm etc.'
catchPhrase i.e. Don't forget the homies
Instructor has the following methods:
demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

*/

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student) {
       let grade = Math.floor((Math.random() * 100) + 1);
       student.grade = grade;
        return `${student.name} receives a score of ${grade}`;
    }


}

/*

Student
Now we need some students!
Student uses the same attributes that have been set up by Person
Student has the following unique props:
previousBackground i.e. what the Student used to do before Lambda School
className i.e. CS132
favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
Student has the following methods:
listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}


*/

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;

    }

    listsSubjects() {
        return this.favSubjects;
    }

    prAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate() {
        if(this.grade < 70) {
            return `Sorry ${this.name} you need to get a higher score to graduate.`
        } else {
            return `Congrats ${this.name}!!! You are can graduate from Lambda School!!`
        }
    }
}

/*

Project Manager
Now that we have instructors and students, we'd be nowhere without our PM's
ProjectManagers are extensions of Instructors
ProjectManagers have the following unique props:
gradClassName: i.e. CS1
favInstructor: i.e. Sean
ProjectManagers have the following Methods:
standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

*/

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.specialty;
        this.favInstructor = attr.favLanguage;    
    }

    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel} channel, @channel standup time!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

//Objects 

const tom = new Person({
    name: 'Tom',
    age: 30,
    location: 'Los Angeles',
    gender: 'Male'
})

const sara = new Person({
    name: 'Sara',
    age: 35,
    location: 'Chicago',
    gender: 'Female'
})

const jerry = new Person({
    name: 'Jerry',
    age: 22,
    location: 'New York',
    gender: 'Male'
})

// console.log(jerry.speak())
// console.log(sara.speak())
// console.log(tom.speak())

const sam = new Instructor({
    name: 'Sam',
    age: 41,
    location: 'New York',
    gender: 'Male',
    specialty: 'PHP',
    catchPhrase: 'Am I right?!'
})

const olivia = new Instructor({
    name: 'Olivia',
    age: 29,
    location: 'San Francisco',
    gender: 'Female',
    specialty: 'Ruby on Rails',
    catchPhrase: 'That was easy :)'
})



const samuel = new Student({
    name: 'Samuel',
    age: 19,
    location: 'Ohio',
    gender: 'Male',
    className: 'WEB30',
    previousBackground: 'Banker',
    favSubjects: ['JavaScript', 'HTML', 'Machine Learning'],
    grade: 100
})

const angel = new Student({
    name: 'Samuel',
    age: 33,
    location: 'Washington',
    gender: 'Male',
    className: 'WEB29',
    previousBackground: 'Consultant',
    favSubjects: ['Java', 'AI', 'PHP'],
    grade: 65
})

const diamond = new Student({
    name: 'Diamond',
    age: 22,
    location: 'Philadelphia',
    gender: 'Male',
    className: 'WEB10',
    previousBackground: 'Accountant',
    favSubjects: ['CSS', 'AI', 'Python'],
    grade: 80
})

// Teachers Test 
// console.log(sam.speak())
// console.log(olivia.speak())
// console.log(sam.demo('PHP'))
// console.log(olivia.demo('Ruby on Rails'))
// console.log(sam.specialty)
// console.log(olivia.catchPhrase)
// console.log(Sam.grade(diamond, 'PHP'))
// Students Test 
// console.log(diamond.speak())
// console.log(angel.speak())
// console.log(samuel.listsSubjects())
// console.log(angel.listsSubjects())
// console.log(diamond.sprintChallenge('JavaScript'))
// console.log(samuel.prAssignment('JavaScript'))
console.log(sam.grade(diamond, 'JavaScript'))
console.log(diamond.graduate())

const roger = new ProjectManager({
    name: 'Roger',
    age: 43,
    location: 'Springfield',
    gender: 'Male',
    gradClassName: 'CS2',
    favInstructor: 'David'
})

const gary = new ProjectManager({
    name: 'Gary',
    age: 35,
    location: 'Tennessee',
    gender: 'Male',
    gradClassName: 'CS4',
    favInstructor: 'Howard'
})

// console.log(roger.speak())
// console.log(gary.speak())
// console.log(gary.standUp('Working Hard'))
// console.log(roger.debugsCode(diamond, 'Javascript'))