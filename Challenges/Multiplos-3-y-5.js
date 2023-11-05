/*INTRODUCCIÓN*/

//Desafio Multiplos de 3 y 5,  en este desafio lo que hace es sumar todos los valores que son multiplos de 3 y 5 que sean menores que 1000,  los suma todos en una variable y una vez recorrido todo el bucle se imprime el valor que es igual a 233168

let suma = 0;
for (i=1; i<1000 ; i++){
    if(i % 3 === 0 || i % 5 === 0){
        suma +=  i;
    }
}

console.log(suma);

/*APRENDIZAJE*/

//En mi primera solucion cometi un error en el cual habia creado dos condiciones o sea un "if" y un "else if" que uno era para los multiplos de 3 y el otro para los multiplos de 5 pero no era necesario ya que podia trabajarlo con el operador logico "||", tambien tuve un error que imprimia en cada suma el valor "suma" en cada operacion realizada por lo tanto tenia cientos de impresiones,  aunque eso era para corroborar que se ejecutaran correctamente las sumas, al final lo puse fuera del bucle el "console.log(suma" para que me diera el resultado final.