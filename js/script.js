// devo far comparire in pagina 100box, se sono mltipli di tre compare Fizz al posto del multiplo, se sono multipli di 5 Buzz, se sono entrambi FizzBuzz

const container = document.querySelector('.container');

const limit = 100;
 
for(let i = 1; i <= limit; i++){
    // creo il box 
    const box = document.createElement('div');
    box.className = 'box';
    // aggiungo adesso il cambio colore e scritta se multiplo di 3
    // metodo logico con il multiplo di 15
    // if(!(i % 15)){
    //     box.classList.add('purple')
    // }
    // aggiungo adesso il cambio colore e scritta se multiplo di 5
    
    // aggiungo adesso il cambio colore e scritta se multiplo di 15
    
    // posso anche provare a cambiare il colore nel caso semplice in cui entrambe le prime due sono vere in modo da non farlo con i multipli di 15 ma con sia (&&) i multipli di 3 che di 5

    // Adesso funziona
    
    
    // scrivo dentro al box i numeri dati dal ciclo i 
    
    

    // aggiungo adesso il cambio scritta se multiplo di 5
    // messe cosi è megio pooichè mi evita di scrivere, ad esempio sul 15, prima il 3 poi sovrsacrivere il 5 e poi ancora sovrascrivere il 15
    if(!(i % 15)){
        box.classList.add('purple')
        box.innerHTML = 'FizzBuzz';
    }else if(!(i % 3)){
        box.classList.add('acqua')
        box.innerHTML = 'Fizz';
        // box.innerHTML = fizz;
    }else if(!(i % 5)){
        box.classList.add('coral')
        box.innerHTML = 'Buzz';
    }else{
        box.innerHTML = i;
    }
    // aggiungo adesso il cambio scritta se multiplo di 5
    
    // aggiungo adesso il cambio patola al multiplo di 15
    
    // lo aggiungo poi al container
    container.append(box);
    
}
