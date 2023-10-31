/*INTRODUCCIÓN*/

//Desafio Verificador de palíndromo, este desafio lo que haces es recibir una palabra a traves de la consola como argumento y lo que haces es formatear la palabra o sea limpiarla de espacios y simbolos, luego la guarda en una variable "palabraFormateada", luego crea la "palabraInvertida" que es la palabra formateada pero invertida y luego las compara si es un palíndomo entonces retornara verdadero sino sera falso, en resumen toma como argumento una palabra o oracion y corrobora si se lee de igual de ambos sentidos

let valor = process.argv[2];

function esPalindromo(palabra){
    let palabraFormateada = palabra.toLowerCase().replace(/[^a-z]/g, '');
    console.log(palabraFormateada)
    let palabraInvertida = palabraFormateada.split("").reverse().join("")
    console.log(palabraInvertida)
    
    return palabraFormateada === palabraInvertida
}

console.log(esPalindromo(valor));


/*APRENDIZAJE*/

//Tuve un if innecesario, que lo que hacia era comparar ambas frases y si se cumplia que ambas variables eran iguales consoleaba true o sino false, pero encontre una mejora al compararla en una sola linea con un operador logico de "===" y me ahorre varias lineas de codigo 