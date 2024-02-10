
// Se trata de un emprendimiento de chaquetas (y otros productos) pintados y customizados a mano

const camperaCompra = [
    { Opcion:1, nombre: "Campera Flower", precio: 35000},
    { Opcion:2, nombre: "Campera Frida", precio: 40000},
    { Opcion:3, nombre: "Campera Freddie", precio: 40000},
    { Opcion:4, nombre: "Campera Cat", precio: 45000},
    { Opcion:5, nombre: "Campera Love", precio: 45000},

]

let shoppingCart = [];

let selection = prompt("Hola! Te damos la bienvenida a Ara Morena, camperas personalizadas. Esta es nuestra nueva colección. Deseas comprar? escribe: si para continuar y no para salir");

while(selection != "si" && selection != "no"){
    alert("Por favor ingrese si o no")
    seleccionar = prompt("Deseas comprar: si o no?")
}

if(selection === "si"){

    alert("A continuacion vas a ver las camperas disponibles");
    let listaProductos = camperaCompra.map(
        (producto) => producto.Opcion + "." + producto.nombre + " " +  "$" + producto.precio
    );

    alert(listaProductos.join("/"));   

}else if (selection === "no"){

    alert("Gracias por visitarnos! ♥");
}

while(selection != "no"){

    let idProducto = parseInt(prompt("Ingrese la opción de la campera que te gustaría comprar para agregarla al carrito"));
    let price = 0;
    let chaqueta = [];

    if(idProducto === 1 || idProducto === 2 || idProducto === 3 || idProducto === 4 || idProducto === 5 ){
        
            switch(idProducto){

            case 1:
            chaqueta = "Campera Flower"
            price = 35000;
            break;
            
            case 2:
            chaqueta = "Campera Frida"
            price = 40000;
            break; 

            case 3:
            chaqueta = "Campera Freddie"
            price = 40000;
            break;
            
            case 4:
            chaqueta = "Campera Cat"
            price = 45000;
            break; 

            case 5:
            chaqueta = "Campera Love"
            price = 45000;
            break;


            default:
            break; 
        }

        let units = parseInt(prompt("Cuantas camperas querés agregar?"));
        shoppingCart.push({idProducto, price, chaqueta, units})
        console.log(shoppingCart);

    }else{

        alert("Esta campera no se enuentra!");

    };

    selection = prompt("Querés seguir comprando?")

    while(selection === "no"){

        shoppingCart.forEach((carritoFinal) => {

            alert(`

            Opción: ${carritoFinal.idProducto}
            Producto: ${carritoFinal.chaqueta} 
            Unidades: ${carritoFinal.units}
            Total a pagar por producto: $${carritoFinal.units * carritoFinal.price}

            `)
        });

        break;
    }
}

const precioTotal = shoppingCart.reduce((acumulador, totalProductos) => acumulador + totalProductos.price * totalProductos.units, 0);
alert(`El total a pagar es: $${precioTotal}`);