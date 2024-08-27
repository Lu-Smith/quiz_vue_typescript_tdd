const javaScriptQuestions = [
    {
      "question": "What is JavaScript?",
      "answer": 1,
      "options": [
        "A styling language for web pages.",
        "A programming language for web development.",
        "A database management system.",
        "A markup language for documents."
      ],
      "selected": null
    },
    {
      "question": "What indexOf() doesn't returns?",
      "answer": 0,
      "options": [
        "returns a string",
        "returns the first index at which given elemnt can be found in the array.",
        "returns -1 if the element is not present.",
        "returns a number."
      ],
      "selected": null
    },
    {
      "question": "Who created JavaScript?",
      "answer": 0,
      "options": [
        "Brendan Eich",
        "Mark Zuckerberg",
        "Tim Berners-Lee",
        "Douglas Crockford"
      ],
      "selected": null
    },
    {
      "question": "What the method splice() do?",
      "answer": 0,
      "options": [
        "it replace or remove existing elements from an array",
        "It adds new elements to an array without removing any existing elements",
        "It sorts the elements of an array alphabetically",
        "It reverses the order of elements in an array"
      ],
      "selected": null
    },
    {
      "question": "What is the purpose of 'console.log()' in JavaScript?",
      "answer": 2,
      "options": [
        "To create a loop in the code.",
        "To perform mathematical calculations.",
        "To print messages or values to the browser console.",
        "To modify the HTML structure of a web page."
      ],
      "selected": null
    },
    {
      "question": "What is the difference between 'let', 'const', and 'var' in JavaScript?",
      "answer": 3,
      "options": [
        "'let' is used for function scope, 'const' is used for block scope, and 'var' is used for global scope.",
        "'let' is used for global scope, 'const' is used for function scope, and 'var' is used for block scope.",
        "'let' is used for block scope, 'const' is used for global scope, and 'var' is used for function scope.",
        "'let' is used for block scope, 'const' is used for function scope, and 'var' is used for global scope."
      ],
      "selected": null
    },
    {
      "question": "What is an example of a JavaScript framework?",
      "answer": 1,
      "options": [
        "HTML",
        "React",
        "CSS",
        "SQL"
      ],
      "selected": null
    },
    {
      "question": "What is the purpose of 'JSON.parse()' in JavaScript?",
      "answer": 2,
      "options": [
        "To convert a string to a number.",
        "To modify the HTML structure of a web page.",
        "To parse a JSON string and convert it into a JavaScript object.",
        "To create an array from a string."
      ],
      "selected": null
    },
    {
      "question": "What is an example of a JavaScript event?",
      "answer": 3,
      "options": [
        "function()",
        "calculation()",
        "document()",
        "click()"
      ],
      "selected": null
    },
    {
      "question": "What does the method 'push()' do?",
      "answer": 0,
      "options": [
        "It adds new elements to an array without removing any existing elements",
        "It removes elements from the end of an array",
        "It removes elements from the beginning of an array",
        "It removes specific elements from an array"
      ],
      "selected": null
    },
    {
      "question": "What does the 'typeof' operator in JavaScript do?",
      "answer": 0,
      "options": [
        "It returns the data type of a value or variable.",
        "It performs mathematical calculations.",
        "It checks if a condition is true or false.",
        "It concatenates two strings."
      ],
      "selected": null
    },
    {
      "question": "What is the purpose of a callback function in JavaScript?",
      "answer": 1,
      "options": [
        "To validate user input in a form.",
        "To handle asynchronous operations or events.",
        "To create reusable code snippets.",
        "To style elements on a web page."
      ],
      "selected": null
    },
    {
      "question": "What does the method 'sort()' do?",
      "answer": 3,
      "options": [
        "It adds new elements to an array without removing any existing elements",
        "It removes elements from the end of an array",
        "It sorts the elements of an array alphabetically",
        "It reverses the order of elements in an array"
      ],
      "selected": null
    },
    {
      "question": "What is the purpose of the 'map()' method in JavaScript?",
      "answer": 3,
      "options": [
        "To filter an array based on a condition.",
        "To add a new item to the end of an array.",
        "To remove an item from an array.",
        "To transform each element of an array and create a new array."
      ],
      "selected": null
    },
    {
      "question": "What is the purpose of the 'setTimeout()' function in JavaScript?",
      "answer": 2,
      "options": [
        "To convert a string to a number.",
        "To modify the HTML structure of a web page.",
        "To delay the execution of a function or code block.",
        "To perform mathematical calculations after a specified time."
      ],
      "selected": null
    },
    {
      "question": "What is the purpose of the 'try...catch' statement in JavaScript?",
      "answer": 0,
      "options": [
        "To handle errors and exceptions in code.",
        "To loop over elements in an array.",
        "To conditionally execute code based on a condition.",
        "To create a new function."
      ],
      "selected": null
    },
    {
      "question": "What is the difference between '=='' and '===' operators in JavaScript?",
      "answer": 1,
      "options": [
        "'==' compares the values only, while '===' compares both values and types.",
        "'===' compares the values only, while '==' compares both values and types.",
        "'==' performs strict equality comparison, while '===' performs loose equality comparison.",
        "'===' performs strict equality comparison, while '==' performs loose equality comparison."
      ],
      "selected": null
    },
    {
      "question": "What is an example of a JavaScript package manager?",
      "answer": 3,
      "options": [
        "React",
        "HTML",
        "CSS",
        "npm"
      ],
      "selected": null
    },
    {
      "question": "What is the purpose of the 'reduce()' method in JavaScript?",
      "answer": 2,
      "options": [
        "To add a new item to the beginning of an array.",
        "To reverse the order of elements in an array.",
        "To reduce an array to a single value by performing a specified operation on each element.",
        "To sort the elements of an array in alphabetical order."
      ],
      "selected": null
    },
    {
      "question": "What is an example of a JavaScript module bundler?",
      "answer": 1,
      "options": [
        "Vue.js",
        "Webpack",
        "SQL",
        "Angular"
      ],
      "selected": null
    },
    {
      "question": "What is the difference between 'undefined' and 'null' in JavaScript?",
      "answer": 0,
      "options": [
        "'undefined' represents a variable that has been declared but has not been assigned a value, while 'null' represents the intentional absence of any object value.",
        "'null' represents a variable that has been declared but has not been assigned a value, while 'undefined' represents the intentional absence of any object value.",
        "'undefined' and 'null' are interchangeable and can be used to represent the same concept.",
        "'undefined' and 'null' both represent errors and should be avoided in JavaScript."
      ],
      "selected": null
    },
    {
      "question": "Explain the concept of hoisting in JavaScript.",
      "answer": 2,
      "options": [
        "Hoisting refers to the process of moving a variable declaration to the top of its scope.",
        "Hoisting refers to the process of automatically converting data types in JavaScript.",
        "Hoisting refers to the behavior of JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase.",
        "Hoisting refers to the process of adding event listeners to HTML elements in JavaScript."
      ],
      "selected": null
    },
    {
      "question": "What are closures in JavaScript and how are they used?",
      "answer": 1,
      "options": [
        "Closures are a way to style HTML elements in JavaScript.",
        "Closures are functions that have access to variables from their outer (enclosing) function scope, even after the outer function has returned.",
        "Closures are a way to store multiple values in a single variable.",
        "Closures are a type of JavaScript data structure used for efficient data retrieval."
      ],
      "selected": null
    },
    {
      "question": "What is event delegation in JavaScript and why is it useful?",
      "answer": 0,
      "options": [
        "Event delegation is a technique where you attach a single event listener to a parent element instead of attaching multiple event listeners to individual child elements. It is useful for improving performance and handling dynamic content.",
        "Event delegation is a way to create custom events in JavaScript.",
        "Event delegation is a technique for validating user input in forms.",
        "Event delegation is a way to manipulate the styling of HTML elements using JavaScript."
      ],
      "selected": null
    },
    {
      "question": "Explain the concept of prototypal inheritance in JavaScript.",
      "answer": 2,
      "options": [
        "Prototypal inheritance is a way to create objects directly from classes in JavaScript.",
        "Prototypal inheritance is a technique for encapsulating related data and functions into a single object.",
        "Prototypal inheritance is the mechanism by which objects in JavaScript can inherit properties and methods from other objects.",
        "Prototypal inheritance is a concept related to variable scoping in JavaScript."
      ],
      "selected": null
    },
    {
      "question": "What is the purpose of the 'async/await' syntax in JavaScript?",
      "answer": 1,
      "options": [
        "'async/await' is used to define asynchronous functions in JavaScript.",
        "'async/await' is used to handle errors and exceptions in JavaScript.",
        "'async/await' is used to transform data in JavaScript.",
        "'async/await' is used to loop over elements in an array in JavaScript."
      ],
      "selected": null
    },
    {
      "question": "What is ternary operator?",
      "answer": 0,
      "options": [
        "a shortcut to if{} and else{} statements",
        "an operator used to define variables",
        "a loop structure",
        "a method for comparing two values",
      ],
      "selected": null
    },
    {
      "question": "What is a function?",
      "answer": 3,
      "options": [
        "a variable that stores data",
        "a condition that evaluates to true or false",
        "a loop that iterates over elements",
        "a section of reusable code",
      ],
      "selected": null
    }
]

export default javaScriptQuestions