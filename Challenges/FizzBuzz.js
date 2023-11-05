/*INTRODUCCIÓN*/

//Desafio FizzBuzz, en este desafio lo que hace es imprimir FizzBuzz en los multiplos de 3 y 5, Fizz en los multiplos de 3 y Buzz en los multiplos de 5 y si no son multiplos de ninguno de esas 3 coindiciones imprime el valor del numero

for(i=1; i<= 100; i++){
    if((i % 5=== 0) && (i % 3 === 0)){
        console.log("FizzBuzz")
    }
    else if(i % 3 === 0){
    console.log("Fizz")
    }
    else if(i % 5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
};

/*APRENDIZAJE*/

//En mi primero for me habia quedado mal ya que la condicion de si es multipo de 3 y 5 estaba al final por lo tanto esa condicion nunca se iba a cumplir porque se iba a cumplir las otras condiciones que es divisible entre 3 y 5 pero luego de estudiarlo y ver que nunca era divisible entre 3 y 5 me di cuenta de ese error, tambien me habia dado cuenta que el ultimo else if tenia una conidicion innecesaria que decia () ya que cualquiera que no se cumpla que sea divisible entre 3 y 5 iba a ser mostrado igual "else if(!(i % 5=== 0) && !(i % 3 === 0))" pero con poner else ya era suficiente 