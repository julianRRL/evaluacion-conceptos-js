var nombre = prompt("Nombre del Usuario", "");
if(nombre == "Manolo"){
    alert("Bienvenido")
}

let valor1 = prompt("Escriba un numero")
let valor2 = prompt("Escriba un numero")
let suma = parseInt(valor1) + parseInt(valor2)
alert(suma)
if(valor1 > valor2){
    alert(valor1)
}else
if(valor1 < valor2){
    alert(valor2)
}

let numeroUno = prompt("Escriba un numero")
let numeroDos = prompt("Escriba un numero")
let numeroTres = prompt("Escriba un numero")
if(numeroUno === numeroDos && numeroDos === numeroTres){
    alert("los tres numeros son iguales")
}else
if(numeroUno !== numeroDos && numeroDos !== numeroTres){
    alert("los tres numeros no son iguales")
}

let altura = prompt("escriba su altura en metros")
let peso = prompt("escriba su peso en kilogramos")
let IMC = parseInt(peso) / parseInt(altura**2)
console.log(IMC)
if(IMC <= 18.5){
    alert("bajo peso")
}else
if(IMC >= 18.6 && IMC <= 24.9){
    alert("normal")
}else
if(IMC >=25 && IMC <= 29,9){
    alert("sobrepeso")
}else
if(IMC > 30){
    alert("obesidad")
}


