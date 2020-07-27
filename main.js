// import the students csv file
const fs = require('fs')
const file = fs.readFileSync('../students.json', 'utf8');

//'`JSON.parse()` to change the JSON to an object'
//**name the array 'students' or it won't work lol */
const students = JSON.parse(file)


/* get student by index*/
const getStudentByIndex = function (index){

return students.students[index]
}







if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}
