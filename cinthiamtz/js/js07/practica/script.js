console.log("Prueba Practica");



function pagina1() {
    return api("https://reqres.in/api/users?page=1");
}

function pagina2() {
    return api("https://reqres.in/api/users?page=2");
}


function pagina3() {
    return api("https://reqres.in/api/users?delay=3");
}

function api(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then(usuario => traerDato(usuario))
}

function traerDato(usuario) {
    console.log(usuario)
    let datos = "";
    for (let user of usuario.data) {
        console.log(user);
        //console.log("*****************")
        //console.log(user.data)
        datos = datos + `<tr><td>${user.id} </td>
                            <td>${user.first_name} </td>
                            <td>${user.last_name} </td>
                            <td>${user.email} </td>
                            <td><img class="avatar" src ="${user.avatar}"> </td>`;
        //console.log("DENTRO DEL FOR" + datos)
    }
    document.getElementById("data").innerHTML = datos;
    console.log("333333333333333")
}








// segunda prueba exitosa
// fetch("https://reqres.in/api/users?page=2")
//     .then((responseJSON) => {
//         return responseJSON.json();
//     })
//     .then(usuario => traerDato(usuario))



// function traerDato(usuario) {
//     console.log(usuario)
//     let datos = "";
//     for (let user of usuario.data) {
//         console.log(user);
//         console.log("*****************")
//         console.log(user.data)
//         datos = datos + `<tr><td>${user.id} </td>
//                             <td>${user.first_name} </td>
//                             <td>${user.last_name} </td>
//                             <td>${user.email} </td>
//                             <td><img class="avatar" src ="${user.avatar}"> </td>`;
//         //console.log("DENTRO DEL FOR" + datos)
//     }
//     document.getElementById("data").innerHTML = datos;
// }










///*primera prueba exitosas*////
//     console.log("Prueba Practica");
// fetch("https://reqres.in/api/users?page=1")
//     .then((responseJSON) => {
//         return responseJSON.json();
//     })


//     .then((usuarios) => {
//         //console.log(usuarios.data[0]);//llamando solo un elemento
//         let datos = "";
//         for (let user of usuarios.data) {
//             //console.log(`id :  ${user.id} tienen email ${user.email}`) //Para acceceder a los objetos clave:valor
//             //console.log(user);
//             datos = datos + `<tr><td>${user.id} </td>
//                     <td>${user.first_name} </td>
//                     <td>${user.last_name} </td>
//                     <td>${user.email} </td>
//                     <td><img class="avatar" src ="${user.avatar}"> </td>`;
//          console.log("DENTRO DEL FOR" + datos)
//         }
//         document.getElementById("data").innerHTML = datos;
//     });
