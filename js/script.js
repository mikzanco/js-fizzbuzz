// devo far comparire in pagina 100box, se sono mltipli di tre compare Fizz al posto del multiplo, se sono multipli di 5 Buzz, se sono entrambi FizzBuzz

const container = document.querySelector('.container');

const limit = 100;
 
for(let i = 1; i <= limit; i++){
    // creo il box 
    const box = document.createElement('div');
    box.className = 'box';
    // aggiungo adesso il cambio colore e scritta se multiplo di 3
    if(!(i % 3)){
        box.classList.add('acqua')
    }

    if(!(i % 5)){
        box.classList.add('coral')
    }

    if(!(i % 15)){
        box.classList.add('purple')
    }
    
    // scrivo dentro al box i numeri dati dal ciclo i 
    box.innerHTML = i;
    // lo aggiungo poi al container
    container.append(box);
    
}
