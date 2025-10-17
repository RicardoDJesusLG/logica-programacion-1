

const numero1 = parseFloat(prompt("Ingresa el primer numero: "));
const numero2 = parseFloat(prompt("Ingresa el segundo numero: "));
const numero3 = parseFloat(prompt("Ingresa el tercer numero: "));

const arr = [numero1, numero2, numero3];


let menorMayor = [...arr].sort((a,b) => a-b);


let mayorMenor = [...arr].sort((a,b) => b-a);


function existenDuplicados(array){
    return new Set(array).size !== array.length;
}

console.log("Los numeros ingresados son: ", arr);
console.log("Ordenados de menor a mayor: ", menorMayor);
console.log("Ordenados de mayor a menor: ", mayorMenor);

if(existenDuplicados(arr)){
    const div4 = document.querySelector("#contenedor4");
    const contenidoHijo4 = document.createElement("h1");
    contenidoHijo4.textContent = "Hay numeros duplicados"
    div4.appendChild(contenidoHijo4);
}
else{
    const div4 = document.querySelector("#contenedor4");
    const contenidoHijo4 = document.createElement("h1");
    contenidoHijo4.textContent = "No hay numeros duplicados";
    div4.appendChild(contenidoHijo4);
}

//manipulacion del dom
const div = document.querySelector("#contenedor1");
const div2 = document.querySelector("#contenedor2");
const div3 = document.querySelector("#contenedor3");


const contenidoHijo1 = document.createElement("h1");
contenidoHijo1.textContent = "Los numeros ingresados son: " + arr;
div.appendChild(contenidoHijo1);

const contenidoHijo2 = document.createElement("h1");
contenidoHijo2.textContent = "Los numeros ordenados de menor a mayor son: " + menorMayor;
div2.appendChild(contenidoHijo2);

const contenidoHijo3 = document.createElement("h1");
contenidoHijo3.textContent = "Los numero ordenados de mayor a menor son: " + mayorMenor;
div3.appendChild(contenidoHijo3);

