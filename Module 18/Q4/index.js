const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade:"A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade:"B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade:"A" },
];
function addStudent(id, firstName, lastName, age, grade){
    if(students.some(student => student.id ===id)){
        console.log(`Student with ID ${id} already exists.`);
        return;
    }
    students.push({id, firstName, lastName, age, grade});
    console.log(`Student with ID ${id} added successfully.`);
}
function updateStudent(id, updatedData){
    const index = students.findIndex(student => student.id ===id);
    if(index!==-1){
        students[index] = {...students[index],...updatedData};
        console.log(`Student with ID ${id} updated successfully.`);
    }else{
        console.log(`Student with ID ${id} not found.`);
    }
}
function deleteStudent(id){
    const index = students.findIndex(student=>student.id===id);
    if(index!==-1){
        students.splice(index,1);
        console.log(`Student with ID ${id} deleted successfully.`);
    }else{
        console.log(`Student with ID ${id} not found.`);
    }
}
function listAllStudents() {
    console.log("All Students:");
    students.forEach(student=>{
        console.log(
            `ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade} `
        );
    });
}
function findStudentsByGrade(grade){
    const filtered = students.filter(student=>student.grade===grade);
    if(filtered.length===0){
        console.log(`No students found with grade ${grade}.`);
    }else{
        console.log(`Students with grade ${grade}:`);
        filtered.forEach(student=>{
            console.log(`${student.firstName} ${student.lastName}`);
        });
    }
}
function calculateAverageAge(){
    if(students.length===0){
        console.log("No students to calculate average age.");
        return;
    }
    const totalAge = students.reduce((sum,student)=>sum+student.age,0);
    const average = totalAge/students.length;
    console.log(`Average age: ${average.toFixed(2)}`);
}