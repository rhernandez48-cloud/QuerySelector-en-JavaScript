
console.log("El titulo de esta pagina es: ", document.title);

let titulo = document.querySelector("#titulo-principal");

console.log(titulo);

console.log(titulo.textContent);
titulo.textContent = "Editado desde JavaScript"
titulo.style.color = "aqua";
titulo.style.backgroundColor = "pink";
titulo.style.fontSize = "1.5rem";

titulo.textContent = titulo.textContent + "Texto Nuevo";
titulo.textContent += "Otro texto nuevo";


let parrafo = document.querySelector("#parrafoPrin");
parrafo.innerHTML += "Nuevo texto <i> Pero este texto esta en cursiva</i>"; 

let caja1 = document.querySelector("#caja1");

caja1.innerHTML += "<p>Producto de Muestra $1500 </p>";


const bodega = [
    {nombre:"Prodcuto1", precio:100, stock: 3},
    {nombre:"Prodcuto2", precio:2000, stock: 2},
    {nombre:"Prodcuto3", precio:30000, stock: 0}
];

let caja = document.querySelector(".caja-producto");

bodega.forEach(item =>{
    let claseColor = "";

    if (item.stock >0) {
        claseColor = "aprobado";
    } else {
        claseColor = "no-aprobado";
    }

    console.log(claseColor);
    


    caja.innerHTML += `
        <div class= "caja-producto ${claseColor}">
        <h2> ${item.nombre}</h2>
        <p> Prcio: ${item.precio}</p>
        <p> Stock: ${item.stock}</p>
        </div>
    `;
});