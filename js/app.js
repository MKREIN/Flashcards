const term = document.querySelector(".term");
const definition = document.querySelector(".definition")
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");

words = {
    "==": "Is equal to",
    "===": "Is equal to and equal type",
    "!=": "Is not equal value or not equal type",
    " > " : "Is greater than",
    " < ": "Is less than",
    ">=": "Is greater than or equal to",
    "<=": "Is less than or equal to",
    "?": "Ternary operator",
    "&&": "Logical AND",
    "||": "Logical OR",
    "!": "Logical NOT",
    "alert()": "Output data in an alert box",
    "confirm()": "Open up a yes/no dialog and return true false",
    "console.log()": "Browser console, good for debugging",
    "document.write()": "Write directly to the HTML document",
    "prompt()": "Create a dialog for the user input",
    "Array": "Object that can hold multiple values",
    "concat()": "Join several arrays into one",
    "index Of()": "Return the primitive value of the specified object",
    "join()": "Combine elements of an array into a single string and return the string",
    "lastIndexOf()": "Gives the last position at which a given element appears in an array",
    "pop()": "Removes last element of an array",
    "push()": "Add a new element at the end of an array",
    "reverse()": "Sort elements in descending order",
    "shift()": "Removes first element of an array",
    "slice()": "Pull a copy of a portion of an array into a new array",
    "splice()": "Add a positions and elements in a specified way",
    "toString()": "Converts elements to strings",
    "unshift()": "Add a new element to the beginning",
    "valueOf()": "Return the first position at which a given element appears in an array",
    "Boolean": "True/ False",
    "Number": "Any number",
    "String": "Any letter",
    "for": "Creates a conditional loop",
    "while": "Sets up conditions under which a loop executes at least once",
    "%": "modulo, gives the remainder of 2 divided numbers",
    "break": "Stops and exits the cycle at a certain condition",
    "if/else": "Executes the code within brackets as long as the condionals are true",
    "toUppercase()": "Converts string to uppercase",
    "toLowercase()": "Converts strings to lowercase",


};

data = Object.entries(words)
// console.log(data[2][1]);

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
    
};



checkButton.addEventListener("click", function() {
    definition.style.display = "block"
    

});

nextButton.addEventListener("click", function() {
    definition.style.display = "none"; // Hide definition when next button is clicked
    getRandomWord();
});

