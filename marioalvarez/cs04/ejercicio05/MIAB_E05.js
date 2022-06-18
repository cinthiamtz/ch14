/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.

*/ 

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1
/*
console.log("P1.");
console.log(people);
*/

//2
/*
console.log("P2.");
people.splice(1,1);
console.log(people);
*/

//3
/*
console.log("P3.");
people.splice(3,1);
console.log(people);
*/

//4

console.log("P4.");
people.splice(0,0,people.splice(2,1)[0]);
console.log(people);

//5
/*
console.log("P5.");
people.push("Mario");
console.log(people);
*/


//6
/*
console.log("P6.");
for(let i=0; i<people.length;i++){
    console.log(people[i]);
    if(people[i]=="Maria")
        break;
}
*/


//7
/*
console.log("P7.");
console.log(people.indexOf("Maria"));
*/