console.log("Sesión JS04");

//Cómo definir un arreglo
const miArreglo=["dato String", false, 23, null, true];
console.log(miArreglo.toString()); // 'dato String,false,23,,true
console.log(miArreglo.join("-")); // 'dato String-falsee-23--true

//Eliminar último dato del arreglo y pasarlo a una variable**
const frutas=["Mango","Plátano","Melón", "Guanábana", "Aguacate","Kiwi"];
let fruta = frutas.pop(); // .pop() es un método
console.log(frutas.join(" * "));
console.log(`Fruta eliminada: ${fruta}`)  //¡¡NO regresa un string!!
