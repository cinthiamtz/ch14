let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);

people.splice(1,1);
console.log(people);
people.splice(2,1);
console.log(people);
people.splice(0,2,"Luis","Maria")

console.log(people);
people.push("Francisco");
console.log(people);
for(let i=0;i<people.length;i++){
   nombre = people[i];
    console.log(nombre);
    if(nombre == "Maria"){
        break;
    }
}
console.log("El índice de Maria es: ", people.indexOf("Maria"));