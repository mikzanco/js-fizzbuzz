// devo far comparire in pagina 100box, se sono mltipli di tre compare Fizz al posto del multiplo, se sono multipli di 5 Buzz, se sono entrambi FizzBuzz

const container = document.querySelector('.container');

const limit = 100;
 
for (let i = 1; i <= limit; i++) {
    // creo il box 
    const box = document.createElement('div');
    box.className = 'box';
    // aggiungo la classe al box
    // scrivo dentro al box i numeri dati dal ciclo i 
    // lo aggiungo poi al container
}