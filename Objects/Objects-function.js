let myBook={
    title:'1984',
    author:'Gorge Orwell',
    pageCount:326
}

let otherBook ={
    title:'A peoples History',
    author:'Haward Zinn',
    pageCount:723
}

let getSummary = function(book){
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummmary:`${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let othebookSummary =getSummary(otherBook);

console.log(bookSummary.pageCountSummmary);

//challange
let convertFahrenheit = function(fahrenheit){
    return{
        fahrenheit : fahrenheit,
        kelvin:(fahrenheit +  459.67) * (5 / 9),
        celcius:(fahrenheit -32)*(5 / 9)
    }
}

let temps = convertFahrenheit(74);
console.log(temps);

