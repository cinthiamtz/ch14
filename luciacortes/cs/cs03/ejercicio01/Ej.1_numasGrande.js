let numeroA = prompt("Escribe un número de 1 a 100");
let numeroB = prompt("Escribe otro número de 1 a 100");
let numeroC = prompt("Escribe otro número de 1 a 100");

if (numeroA > numeroB && numeroB> numeroC) {
    alert("El número más grande es " +numeroA);
} 

else if (numeroA < numeroB && numeroB > numeroC) {
    alert("El número más grande es " +numeroB);
}  

else {
    alert("El número más grande es " +numeroC);
}