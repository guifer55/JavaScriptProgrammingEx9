/* */
/*logging the entire document to the console */
/* console.log(document);*/

/* entire collection of things in the document, check inspect console in live server, so in JS you can access all this
, can check attributees of the tags*/
//console.log(document.all);

/* modify the elements of the document, after this code below changes the title*/
//document.title = 'I love Javascript';


/*just to inspect the body */
//console.log(document.body);

/* get id instructuions and put in variab*/
/*let instructions = document.getElementById('instructions');*/

/* info in the inner html property, writes all in the p tag*/
/*console.log(instructions.innerHTML);

/* to get only the text. notice above using innerhtml display contents of the elemnt including html tags and whitespace
below, if we don't want that, just use innertext*/
/*console.log(instructions.innerText);*/

/* */
/*change the value */
/*instructions.innerHTM = '<span> hello there</ span>';*/

/* do something with all the elements that have the css class= but
inspect and access the elements in live server*/

let buttons = document.getElementsByClassName('but');
console.log(buttons);

/*only want to get one of the class */
//console.log(buttons[1]);

/* only want the id name*/

//console.log(buttons[1].id);

/* change properties and styles in the collection, change clear button color to pink...it is changing the css*/

buttons[1].style.color = 'pink';

/*get elements by the tag name */

//let labels = document.getElementsByTagName('label');
//console.log(labels);


/* */
/* */
/* query selector, will get the specified css selector*/
/* could use p as the selector and so on or instructions p*/
let instructions = document.querySelector('#instructions');
console.log(instructions);

let num1 = document.querySelector('#num1');

num1.value = 45;

//let buttons = document.querySelectorAll('but');



