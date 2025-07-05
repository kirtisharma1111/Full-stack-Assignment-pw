const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true
};
function displayStudentInfo(studentObj){
    for(let key in studentObj){
        console.log(`Property: ${key}, value: ${studentObj[key]}`);
    }
}
displayStudentInfo(student);