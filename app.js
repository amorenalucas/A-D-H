const productosConteiner = document.querySelector('#contenedor-productos')
var contenedor = document.getElementById('ListaProducto');

const item = stockProductos[0]
var articulos=[];

stockProductos.forEach((item) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `
                    <img src="${item.img}" alt="">
                    <h3>${item.nombre}</h3>
                    <p>${item.desc}</p>
                    <p>Espesor:${item.espesor}</p>
                    <P class="precioProducto">Precio: ${item.precio}</P>
                    <button class="boton-agregar" onclick="agregarCarro(${item.id})">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    productosConteiner.append(div);
})

function agregarCarro(articulo){

    const agregar = stockProductos.find((item) => item.id === articulo);

    articulos.push(agregar);

    document.getElementById("contadorcarrito").textContent = articulos.length;

    mostrarArticulos();
}

const removerDelCarrito = (id) =>{

    const remover = articulos.find((item) => item.id === id)
    const index = articulos.indexOf(remover);
    articulos.splice(index, 1);

    document.getElementById("contadorcarrito").textContent = articulos.length;

    mostrarArticulos();
}

function mostrarArticulos(){

var total = 0;
contenedor.innerHTML = ``;

articulos.forEach((item) => {

    var newDiv = document.createElement('div');

    newDiv.classList.add('productoEnCarrito')

    newDiv.innerHTML = `
        <label> ${item.nombre} - $ ${ item.precio} </label>
        <br>
        <button onClick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    var contenedor = document.getElementById('ListaProducto');
    contenedor.appendChild(newDiv);

    total = total + item.precio;
    
})

document.getElementById("precioTotal").innerHTML = "Total: $" + total;

}