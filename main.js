// the file itself 
const fs = require('fs')
const file = fs.readFileSync('../students.json', 'utf 8')

// const getStudentByIndex = function (index){
// console.log(index)
// }




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
