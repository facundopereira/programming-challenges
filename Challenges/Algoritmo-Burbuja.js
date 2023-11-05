/*INTRODUCCIÓN*/

//Desafio Algoritmo Burbuja, en este desafio obtendremos un array con numeros de diferentes valores lo que hara este algoritmo es ordenar los valores de mayor a menor o visceversa sin usar la propiedad sort 

const numbers = [12, 23, 34, 2134, -148, 66, 30 , -30, 40, 28]


function burbuja(array){
    let ordenadoDeMenorAMayor = array.slice()
    let ordenadoDeMayorAMenor= array.slice()

    const n = array.length
    for(i=0 ; i < n - 1 ; i++){
        for(j=0; j < n - 1 - i ; j++ ){
            if(ordenadoDeMayorAMenor[j]<ordenadoDeMayorAMenor[j + 1]){
                let aux = ordenadoDeMayorAMenor[j];
                ordenadoDeMayorAMenor[j] = ordenadoDeMayorAMenor[j + 1];
                ordenadoDeMayorAMenor[j + 1] = aux;
            }
        }
        for(j=0; j < n - 1 - i ; j++ ){
            if(ordenadoDeMenorAMayor[j]>ordenadoDeMenorAMayor[j + 1]){
                let aux = ordenadoDeMenorAMayor[j];
                ordenadoDeMenorAMayor[j] = ordenadoDeMenorAMayor[j + 1];
                ordenadoDeMenorAMayor[j + 1] = aux;
            }
        }
    }
    console.log("Array Original:", array);
    console.log("Array Ordenado de mayor a menor:", ordenadoDeMayorAMenor);
    console.log("Array Ordenado de menor a mayor :", ordenadoDeMenorAMayor);

}

burbuja(numbers)

/*APRENDIZAJE*/

//En este desafio aprendi a realizar una interacion de pase completo con cada elemento del array y asi poder hacer una comparacion con el numero adyacente y si cumple la condicion de que es mayor o menor entonces lo que hace es realizar un intercambio entre los mismos en las partes de "n - 1" y "n - 1 - i" es para que  no realice interacciones ineccesarias para los elementos que ya se encuentran ubicados en su orden.

