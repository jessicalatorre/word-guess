//es5 doesn't have classes but es6 does
//since we're using es6 syntax, we'd need to create a constructure function to represent a class

//step 1 - class is the data that represent student
function Student (name, ageFoo, addressFoo) {
    this.name = name;
    this.age = ageFoo || 15;
    // this.age = ageFoo;
    this.address = addressFoo;
    //action
    this.myAge = function () {
        console.log("Hell I am "+ this.name + "I am " + this.age);
    }
}

//STep 2 - This is where we actually construct the data for each specific student
//when constructing student; need to give it a parameter
var student1 = new Student("John", 25, "Elm Street1"); //use the class name Student to initialize properties to student 1

//NOTE: student2 undefined, so we're initializing with default age of 15 (line 6)
var student2 = new Student(); //use the class name Student to initialize properties to student 2


console.log(student1.age);
console.log(student2.address);

 //step 3 - executing the function of a class instance of the constructor function for each student
 //these are called AFTER the constructor function for each student is executed
student1.myAge();
student2.myAge();


//once the new student are constructed we need to put them into the school!

//class for school
function School (studenNum) {
    this.studentNum = studentNum;
    this.Students = []; //created an empty array because we don't know the exact number of student until we construct
    // for (var i = 0;  i < this.studentNum; i ++) {
    //     var student = new Student (); //this is where we construct a new instance of class for the new student. this creates a new instance each time it iterates
    //     this.Students.push(student); //now we're going to push the student into an array
    // }
    //instead using for loop we can add each particulare student, John, Hinh, etc one-by-one
    //we built new student and pushed to array

    //pushed student into array without knowing students name
        this.addStudentByClass = function () {
            this.Students.push(student);
        }
}

function SpecialStudent () {

}

var student3 = new SpecialiStudent();

function StudentOver25 () {

}

var student3 = new StudentOver25();

//construct number of students for each school
var mySchool = new School();
mySchool.addStudents(student1);
mySchool.addStudentByClass(specStudent);