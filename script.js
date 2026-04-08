//variables
let quote = document.querySelector('p');
let button = document.querySelector('button');

//logic
let quotations = [
    "Practice makes a man perfect",
    "Good things take time",
    "Hard work is the key to success",
    "Believe in yourself and all that you are",
    "Dream big, work hard, stay focused",
    "Success is the sum of small efforts repeated daily",
    "Don’t watch the clock; do what it does—keep going",
    "The harder you work for something, the greater you’ll feel when you achieve it",
    "Push yourself, because no one else is going to do it for you",
    "Mistakes are proof that you are trying"
];
const generateQuote = () =>{
    let randomIndex = Math.floor(Math.random() * quotations.length);
    quote.innerHTML = quotations[randomIndex];
console.log("click");
}
//event listener
button.addEventListener('click',generateQuote)