// class Explore{
//     constructor(){
//         // 
//     }
// // };

// list = [0, 1, 2, 3]
// for (let obj of list) {
//     console.log(obj)
// }


//   console.log(quote);

// number= [2, 4, 6, 7, 9];
// Math.floor((Math.random() * 10) + 1);

// console.log(number)


// function favQuote() {
//     var x = Math.floor((Math.random() * 10) + 1);
//     document.getElementById("quote").innerHTML = x;
// };

// function Quote(quote, speaker) {
//     this.quote = quote;
//     this.speaker = speaker;
//     }

//       //  getRandom
//       Quote.prototype.getRandom = function() {
//         return `${this.quote} was said by ${this.speaker}`;
//     }; 

//     const quote1 = new Quote("Girls are like mangoes", "Arthur Ibik");
//     const quote2 = new Quote("All your problem solution na ego", "Arthur Ibik");
//     const quote3 = new Quote("Your problem is your proble", "Arthur Ibik");

    // console.log(quote3);


    function myFunction() {
        let x = document.getElementById("number")
        x.innerHTML = Math.floor((Math.random() * 100));
    }

    function myQuote() {
        let quote = ['quote1', 'quote2', 'quote3', 'quote4', 'quote5', 'quote6', 'quote7', 'quote8', 'quote9', 'quote-0', 'quote-11', 'quote-12'];
        document.getElementById("quote").innerHTML = quote;
    };

    let array = ['quote1', 'quote2', 'quote3', 'quote4', 'quote5', 'quote6', 'quote7', 'quote8', 'quote9', 'quote-10', 'quote-11', 'quote-12'];

    array.forEach(function(item) {
     console.log(item);
})



// function getQuote() {
//     let array = ['quote1', 'quote2', 'quote3', 'quote4', 'quote5', 'quote6', 'quote7', 'quote8', 'quote9', 'quote-10', 'quote-11', 'quote-12'];

//     array.forEach(function(element) {
//      console.log(element);
// })

// }
// console.log(getQuote());


// function myQuote() {
//     let array = ['quote1', 'quote2', 'quote3', 'quote4', 'quote5', 'quote6', 'quote7', 'quote8', 'quote9', 'quote-10', 'quote-11', 'quote-12'];
//     document.getElementById("quote").innerHTML = array; 
//     array.forEach(function(element) {
//      console.log(element);
// })
   
// }



