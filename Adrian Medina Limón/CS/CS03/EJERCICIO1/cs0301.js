//SOLICITAR 3 NÚMEROS (ENTRE EL 1 Y EL 100)  Y DEFINIR CUÁL ES EL MAYOR

let a=parseInt(prompt("Escribe tu primer número (mayor o igual a 1 y menor o igual a 100)"));

if (a>=1 && a<=100){
    console.log("Primer número: ", a);
let b=parseInt(prompt("Escribe tu segundo número (mayor o igual a 1 y menor o igual a 100)"));

//Instrucciones para b
if (b>=1 && b<=100){
    console.log("Segundo número: ", b); 
let c=parseInt(prompt("Escribe tu tercer número (mayor o igual a 1 y menor o igual a 100)"));

 //Instrucciones para c 
     if(c>=1 && c<=100){
        console.log("Tercer número: ", c);    
        //Comparación
        if(a>b && a>c){
            alert("El primer número = "+ a +" es el mayor");
}
else if (b>a && b>c){
    alert("El segundo número = "+ b +" es el mayor");
    }

else if (c>a && c>b){
        alert("El tercer número = "+ c +" es el mayor");
        }
        else{
         alert("Hay un error");
        }
}
    
    else {
     alert("El tercer número no está en el rango permitido");
    }
    
    }
    
    else{
    alert("El segundo número no está en el rango permitido");
    }
    
    
    }
    
    else{
     alert("El primer número no está en el rango permitido");
     
    }