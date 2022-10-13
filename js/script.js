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
        
        // box.innerHTML = fizz;
    }
    // aggiungo adesso il cambio colore e scritta se multiplo di 5
    if(!(i % 5)){
        box.classList.add('coral')
    }
    // aggiungo adesso il cambio colore e scritta se multiplo di 15
    if(!(i % 15)){
        box.classList.add('purple')
    }
    // posso anche provare a cambiare il colore nel caso semplice in cui entrambe le prime due sono vere in modo da non farlo con i multipli di 15 ma con sia (&&) i multipli di 3 che di 5

    // NON FUNZIONA COSI?!
    // if(!(i % 5)) && (!(i % 3)){
    //     box.classList.add('purple')
    // }
    
    // scrivo dentro al box i numeri dati dal ciclo i 
    box.innerHTML = i;

    if(!(i % 3)){
        box.innerHTML = 'fizz';
        
        // box.innerHTML = fizz;
    }
    // aggiungo adesso il cambio scritta se multiplo di 5
    if(!(i % 5)){
        box.innerHTML = 'buzz';
    }
    // aggiungo adesso il cambio patola al multiplo di 15
    if(!(i % 15)){
        box.innerHTML = 'fizzbuzz';
    }
    // lo aggiungo poi al container
    container.append(box);
    
}
