var arrayOfQuotes = 
[

    {
        "author":"Jim Rohn",
        "quote":"Beware of what you become in pursuit of what you want."
    },

    {
        "author":"Epictetus",
        "quote":"It's not what happens to you, but how you react to it that matters."
    },

    {
        "author":"Frank Sintra",
        "quote":"The best revenge is massive success."
    },

    {
        "author":"Wayne Gretzy",
        "quote":"You miss 100% of the shots you don't take."
    }

]

function randomSelector(arrayLength)
{
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote()
{
    var randomNumber = randomSelector(arrayOfQuotes.length);

    document.getElementById("quoteOutput").innerHTML = ' " ' + arrayOfQuotes[randomNumber].quote + ' " ';

    document.getElementById("authorOutput").innerHTML = ' - ' + arrayOfQuotes[randomNumber].author + ' - ';
}