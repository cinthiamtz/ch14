console.log("Sesión tenebrosa de JS09 muajajajajaja")

// GET request for remote image in node.js
function adquirirDatos(direccionhttp){
    axios({
        method: 'get',
        url: direccionhttp,
        responseType: 'stream'
      })
        .then((response)=> {
          console.log(response.data.data);
          
        });

}


solicitudBtn();
function solicitudBtn(){
datos=adquirirDatos("https://reqres.in/api/users?page=2");
console.log("solicitud BTn" + datos );
}


    // .then(function (response) {
    //     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    //   });
    