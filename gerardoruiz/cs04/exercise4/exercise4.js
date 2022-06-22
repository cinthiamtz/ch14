/* Exercise #4

Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourse = [...student1Courses, ...student2Courses].reduce((total, item, index, array) => {
  (array.indexOf(item, index + 1) !== -1 && total.indexOf(item) === -1) ? total.push(item) : null
  return total
}, [])

console.log("Los cursos son: " + student1Courses + " y " + student2Courses)
console.log("El curso en común es: " + commonCourse)