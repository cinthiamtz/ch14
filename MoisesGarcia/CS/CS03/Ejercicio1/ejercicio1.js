//Solicitar 3 números (entre el 1 y el 100) y definir cuál es el mayor// 

let num1;
let num2;
let num3;

num1 = prompt("Ingresa un número entre el 1 y el 100");
num2 = prompt("Ingresa un número entre el 1 y el 100");
num3 = prompt("Ingresa un número entre el 1 y el 100");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

//console.log( num1 > num2);

if(num1> num2){
    //console.log("Num 1 es mayor");
    if(num1 > num3){
        console.log("Num 1 es mayor "+num1);

    }
    else{
        console.log("Num 3 es mayor "+num3);
    }
}
else{
    //console.log("Num 2 es mayor");
    if(num2 > num3){
        console.log("Num 2 es mayor "+num2);

    }
    else{
        console.log("Num 3 es mayor "+num3);
    }
}