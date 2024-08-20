const pythonQuestions = [
    {
        "question": "What is Python?",
        "answer": 0,
        "options": [
            "A high-level, interpreted programming language.",
            "A web development framework.",
            "A database management system.",
            "A cloud computing platform."
        ],
        "selected": null
    },
    {
        "question": "Who developed Python?",
        "answer": 0,
        "options": [
            "Guido van Rossum",
            "James Gosling",
            "Brendan Eich",
            "Linus Torvalds"
        ],
        "selected": null
    },
    {
        "question": "What typing discipline does Python follow?",
        "answer": 2,
        "options": [
            "Static typing",
            "Weak typing",
            "Dynamic typing",
            "Manual typing"
        ],
        "selected": null
    },
    {
        "question": "How do you define a function in Python?",
        "answer": 2,
        "options": [
            "Using the 'function' keyword.",
            "Using the 'fun' keyword.",
            "Using the 'def' keyword.",
            "Using the 'lambda' keyword."
        ],
        "selected": null
    },
    {
        "question": "What are Python's built-in data types?",
        "answer": 1,
        "options": [
            "tuple, array, set, matrix",
            "list, tuple, dict, set",
            "integer, string, list, table",
            "object, number, array, file"
        ],
        "selected": null
    },
    {
        "question": "Which of these is an immutable data type in Python?",
        "answer": 0,
        "options": [
            "Tuple",
            "List",
            "Dictionary",
            "Set"
        ],
        "selected": null
    },
    {
        "question": "What does 'PEP' stand for in Python?",
        "answer": 2,
        "options": [
            "Python Enhanced Performance",
            "Python Execution Protocol",
            "Python Enhancement Proposal",
            "Programmer's Efficiency Plan"
        ],
        "selected": null
    },
    {
        "question": "What year was Python first released?",
        "answer": 1,
        "options": [
            "1995",
            "1991",
            "2000",
            "1989"
        ],
        "selected": null
    },
    {
        "question": "Which of the following is used for asynchronous programming in Python?",
        "answer": 2,
        "options": [
            "yield",
            "lambda",
            "async/await",
            "print"
        ],
        "selected": null
    },
    {
        "question": "Which keyword is used to handle exceptions in Python?",
        "answer": 1,
        "options": [
            "catch",
            "try",
            "catchException",
            "handle"
        ],
        "selected": null
    },
    {
        "question": "How do you create a virtual environment in Python?",
        "answer": 3,
        "options": [
            "virtualenv new_env",
            "python -m venv setup_env",
            "venv -python3 create_env",
            "python -m venv new_env"
        ],
        "selected": null
    },
    {
        "question": "Which of the following is a Python web framework?",
        "answer": 0,
        "options": [
            "Django",
            "Laravel",
            "React",
            "Rails"
        ],
        "selected": null
    },
    {
        "question": "Which Python module is used for unit testing?",
        "answer": 2,
        "options": [
            "pytest",
            "mock",
            "unittest",
            "testify"
        ],
        "selected": null
    },
    {
        "question": "How do you create a list comprehension in Python?",
        "answer": 0,
        "options": [
            "[x for x in iterable]",
            "list(x -> x)",
            "map(x => x, iterable)",
            "[x in iterable for x]"
        ],
        "selected": null
    },
    {
        "question": "Which method can be used to read a file in Python?",
        "answer": 3,
        "options": [
            "get()",
            "fetch()",
            "input()",
            "read()"
        ],
        "selected": null
    },
    {
        "question": "What is the purpose of decorators in Python?",
        "answer": 0,
        "options": [
            "To modify or enhance functions or methods.",
            "To define variables globally.",
            "To handle errors during runtime.",
            "To manage loops efficiently."
        ],
        "selected": null
    },
    {
        "question": "What is the correct syntax for a class in Python?",
        "answer": 2,
        "options": [
            "class Person[]:",
            "class Person<>:",
            "class Person:",
            "class Person{}:"
        ],
        "selected": null
    },
    {
        "question": "Which Python function is used to iterate over sequences?",
        "answer": 1,
        "options": [
            "while",
            "for",
            "repeat",
            "loop"
        ],
        "selected": null
    },
    {
        "question": "What is the purpose of the 'self' keyword in Python class methods?",
        "answer": 1,
        "options": [
            "To refer to the base class.",
            "To refer to the instance of the class.",
            "To refer to a global variable.",
            "To create a private method."
        ],
        "selected": null
    },
    {
        "question": "Which Python function is used to return the length of a list?",
        "answer": 2,
        "options": [
            "lenof()",
            "count()",
            "len()",
            "size()"
        ],
        "selected": null
    },
    {
        "question": "What is the correct way to define a lambda function in Python?",
        "answer": 0,
        "options": [
            "lambda x: x + 2",
            "lambda(x): x + 2",
            "lambda: x => x + 2",
            "lambda -> x: x + 2"
        ],
        "selected": null
    },
    {
        "question": "Which of the following can be used for looping through a dictionary in Python?",
        "answer": 1,
        "options": [
            "for key in dict.values():",
            "for key, value in dict.items():",
            "while dict.has_key():",
            "foreach dict:"
        ],
        "selected": null
    },
    {
        "question": "Which of the following is a valid way to handle file opening in Python?",
        "answer": 3,
        "options": [
            "open('file.txt', 'write')",
            "file = open('file.txt')",
            "openFile('file.txt', 'r')",
            "with open('file.txt', 'r') as file:"
        ],
        "selected": null
    },
    {
        "question": "What is the purpose of the 'yield' keyword in Python?",
        "answer": 0,
        "options": [
            "To create a generator.",
            "To raise an exception.",
            "To define an anonymous function.",
            "To return multiple values."
        ],
        "selected": null
    },
    {
        "question": "What is the primary use of the 'async' and 'await' keywords in Python?",
        "answer": 2,
        "options": [
            "To define inline functions.",
            "To handle exceptions.",
            "To write asynchronous code.",
            "To define class methods."
        ],
        "selected": null
    },
    {
        "question": "What is a variable?",
        "answer": 2,
        "options": [
            "A type of data structure used to store multiple values.",
            "A function that can be reused multiple times.",
            "A reusable container for a value (string, integer, float, boolean) and it behaves as if it was the value that it contains.",
            "An operator used to perform arithmetic operations."
        ],
        "selected": null
    },
    {
        "question": "What f in print(f'Hello {full_name}') stands for?",
        "answer": 1,
        "options": [
            "frame",
            "format",
            "framework",
            "for"
        ],
        "selected": null
    },
    {
        "question": "What is a difference between / and // in Python?",
        "answer": 1,
        "options": [
            "/ is used for division and also returns an integer.",
            "/ division (returns floats) and // integer division (returns an integer).",
            "// is used for dividing lists, while / is used for numbers.",
            "/ returns the remainder of a division, while // performs full division."
        ],
        "selected": null
    }
]

export default pythonQuestions


