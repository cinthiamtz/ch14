console.log("SESION JS07 apiFetch");

//el mètodo por default que hace fetch es get

fetch('https://reqres.in/api/users?page=2')
  //.then(response => response.json())
  .then(responseJSON => {return responseJSON.json()})
  .then(usuarios=>{
    //console.log(usuarios.data);
    //este es un for of
    
    for (user of usuarios.data) {
        info=`
        <tr>
        <th scope="row">${user.id} </th>
        <td>${user.first_name} </td>
        <td>${user.last_name} </td>
        <td>${user.email} </td>
        <td><img class="avatar" src ="${user.avatar}"> </td>
        </tr>`;

        
    }
  });

  function encontrarPorSelector() {
    //las clases van con . o sea .saludo por ejemplo
    const elements= document.querySelectorAll("p.saludo");
    

    //p es para llamar solo a la clase "saludo" en los <p>
    console.log("datos en elements: "+ elements.length);

    let unirStr="";
    elements.forEach(dato=> unirStr+=dato.innerHTML+" ");
    document.getElementById("junta").innerHTML=unirStr;
}


// for (user of usuarios.data) {
//   info=`
//   <tr>
//   <th scope="row">${user.id} </th>
//   <td>${user.first_name} </td>
//   <td>${user.last_name} </td>
//   <td>${user.email} </td>
//   <td><img class="avatar" src ="${user.avatar}"> </td>
//   </tr>`;

  //document.getElementById("info").innerHTML=info;
/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */

  //user hace referencia a cada index, es una variable
  //que nosotros pusimos 

  //.then(data => console.log(data));

  //el segundo then agarra el valor del json
  //porque es lo inmediato
