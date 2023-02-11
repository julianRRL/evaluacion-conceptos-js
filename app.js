/*let nombre = prompt("Nombre del Usuario", "");
if(nombre == "Manolo"){
    alert("Bienvenido")
}

let valor1 = prompt("Escriba un numero")
let valor2 = prompt("Escriba un numero")
let suma = parseInt(valor1) + parseInt(valor2)
alert("El resultado es " + suma)
if(valor1 > valor2){
    alert("El mayor numero es " + valor1)
}else
if(valor1 < valor2){
    alert("El mayor numero es  + valor2)
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
*/
/*
let valor = 0;
while(valor != 1){
    valor = parseInt(prompt("ingrese un numero"));
    if(isNaN(valor)){
        console.error("ingrese un valor numerico");
        valor = 0;
    }else{
        console.log("el valor ingresado es un numero");
        valor = 1
    }
}
*/

let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
for(let i = 0; i < dias.length; i++){
    if(dias[i] === "sabado" || dias[i] === "domingo"){
        console.log("fin de semana")
    }else{
        console.log(dias[i]);
    }
}