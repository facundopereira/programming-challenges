/*INTRODUCCIÓN*/ 

// Desafio lenguaje Numerico, en este desafio lo que realizare es una funcion que reciba como parametro una oracion o palabra y cambie ciertas letras por numeros y que sea legible 

let valor = process.argv[2];


function numericLanguage(valor){
    let oracion = valor.slice();
    let letras = oracion.toLowerCase().split("");
    let n = letras.length
    for(i=0; i < letras.length ; i ++ ){
        letras[i] === "a" ? letras[i] = "4" : "";
        letras[i] === "b" ? letras[i] = "8" : "";
        letras[i] === "e" ? letras[i] = "3" : "";
        letras[i] === "t" ? letras[i] = "7" : "";
        letras[i] === "g" ? letras[i] = "6" : "";
        letras[i] === "l" ? letras[i] = "1" : "";
        letras[i] === "o" ? letras[i] = "0" : "";
        letras[i] === "s" ? letras[i] = "5" : "";
        letras[i] === "p" ? letras[i] = "9" : "";
        letras[i] === "z" ? letras[i] = "2" : "";
    }
    oracion = letras.join("");
    console.log(letras)
    console.log(oracion)
    console.log(valor)
}

numericLanguage(valor)