/**
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
**/

// Array for random quotes
var quotes = [
  {
    quote: "The secret of being a bore is to tell everything.",
    source: "Voltaire",
    citation: "Sept Discours en Vers sur l'Homme",
    year: 1738,
  },
  {
    quote: "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
    source: "Mark Twain",
    citation: "Notebook",
    year: 1904,
  },
  {
    quote: "Patriotism is, fundamentally, a conviction that a particular country is the best in the world because you were born in it…",
    source: "George Bernard Shaw",
    citation: "The World",
    year: 1893,
  },
  {
    quote: "Love truth, but pardon error.",
    source: "Voltaire",
    citation: "Sept Discours en Vers sur l'Homme",
    year: 1738,
  },
  {
    quote: "The worst sin towards our fellow creatures is not to hate them, but to be indifferent to them: that's the essence of inhumanity.",
    source: "George Bernard Shaw",
    citation: "The Devil's Disciple, Act 2",
    year: 1901,
  },
   {
    quote: "“Wise men speak because they have something to say; fools because they have to say something.”",
    source: "Plato",
  }
];





// Function that selects and returns a random quote from the quotes array

function getRandomQuote ( ) {
  var upperLimit = quotes.length;
  console.log("upperLimit", upperLimit);
  var randNum = Math.floor(Math.random() * upperLimit);
  console.log("randNum", randNum);
  return quotes[randNum];
}

// Gets random background color

function randomBackgroundColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(backgroundColor);

  document.body.style.background = backgroundColor;
  }

randomBackgroundColor();


// Prints out quote with source, citation, and year if it has one

function printQuote (){
var randomQuote = getRandomQuote();
var htmlString = '';
htmlString += '<p class="quote">' + randomQuote.quote + '</p>';
htmlString += '<p class="source">' + randomQuote.source;

if (randomQuote.citation){
htmlString += '<span class="citation">' + randomQuote.citation + '</span>'
}
if (randomQuote.year){
htmlString += '<span class="year">' + randomQuote.year + '</span>'
}
htmlString += '</p>';
randomBackgroundColor();
document.getElementById('quote-box').innerHTML = htmlString;
};

// Prints a new quote and gets a new random color every 10 seconds

setInterval(printQuote, 10000);




/**
 * Click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
**/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


