console.log("OOP CLASES");
/**
 * Pausa para recordar cosas
 * Formas de crear un arreglo
 */
// const miArreglo = [1,2,3,4];
// const miArregloConstructor = new Array(10);

// console.log(miArreglo);
// console.log(miArregloConstructor);


/************************************************ */
class Elote{
    //Definiendo atributos
    tipo;
    color;
    costo;
    servido;

    //Definiendo constructor
    constructor(tipo="criollo", costo=0, servido=""){
        this.tipo = tipo;
        this.costo = costo;
        this.servido = servido;
        console.log(`Se ha creado un objeto de tipo elote
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido en: ${this.servido}
        `);
    }
    //Realizando métodos de mi clase
    imprimir(){
        return(`Se ha creado un objeto elote:
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido en: ${this.servido}
        `);
    }
}

const esquite = new Elote("blanco", 25, "vasito");
const vasoElote = new Elote("amarillo", 23, "vasito");
const doriloko = new Elote("mezcla fina", 35, "palito");
const entero = new Elote("asado", 25, "palito");

console.log(esquite.imprimir());
