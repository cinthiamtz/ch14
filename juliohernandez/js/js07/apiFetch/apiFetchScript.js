console.log("Sesión JS07 API Fetch");

//El método por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then(usuarios => {
    //console.log(usuarios.data[0])
    for (user of usuarios.data){
        console.log(`${user.id} tiene email ${user.email}`);
    }
});

/* fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json)) */


