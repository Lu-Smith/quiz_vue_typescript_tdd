const reactQuestions = [
  {
    "question": "What is React?",
    "answer": 1,
    "options": [
      "A programming language for web development.",
      "A JavaScript library for building user interfaces.",
      "A database management system.",
      "A styling language for web pages."
    ],
    "selected": null
  },
  {
    "question": "Who developed React?",
    "answer": 2,
    "options": [
      "Brendan Eich",
      "Mark Zuckerberg",
      "Facebook",
      "Evan You"
    ],
    "selected": null
  },
  {
    "question": "What is JSX in React?",
    "answer": 0,
    "options": [
      "A syntax extension for JavaScript that allows writing HTML-like code in JavaScript.",
      "A CSS-in-JS solution for styling React components.",
      "A built-in package manager for React.",
      "A data fetching library used in React applications."
    ],
    "selected": null
  },
  {
    "question": "What is a component in React?",
    "answer": 3,
    "options": [
      "A programming concept used to store and manipulate data.",
      "A built-in function that performs calculations in React.",
      "A data structure for storing hierarchical data.",
      "A reusable and independent piece of UI that can be composed together to build complex interfaces."
    ],
    "selected": null
  },
  {
    "question": "What is the purpose of 'setState()' in React?",
    "answer": 2,
    "options": [
      "To import external libraries and packages in React components.",
      "To define the initial state of a React component.",
      "To update the state of a React component and trigger a re-render.",
      "To define the lifecycle methods of a React component."
    ],
    "selected": null
  },
  {
    "question": "What is the virtual DOM in React?",
    "answer": 1,
    "options": [
      "The actual representation of the HTML structure in a React component.",
      "A lightweight copy of the actual DOM used for efficient rendering and updates in React.",
      "A debugging tool used in React for inspecting component hierarchy.",
      "A state management system provided by React for global data storage."
    ],
    "selected": null
  },
  {
    "question": "What is the purpose of 'props' in React?",
    "answer": 0,
    "options": [
      "To pass data from a parent component to a child component.",
      "To define CSS styles for a React component.",
      "To handle user interactions and events in a React component.",
      "To define the initial state of a React component."
    ],
    "selected": null
  },
  {
    "question": "What is the lifecycle method used for initializing state in a React component?",
    "answer": 3,
    "options": [
      "componentDidMount()",
      "componentWillUnmount()",
      "render()",
      "constructor()"
    ],
    "selected": null
  },
  {
    "question": "What is React Router?",
    "answer": 2,
    "options": [
      "A built-in form validation library for React.",
      "A state management library for React.",
      "A library that allows routing and navigation in React applications.",
      "A CSS-in-JS solution for styling React components."
    ],
    "selected": null
  },
  {
    "question": "What is the purpose of 'useEffect()' hook in React?",
    "answer": 1,
    "options": [
      "To handle form submissions in React components.",
      "To perform side effects and manage lifecycle events in functional components.",
      "To define the routing and navigation structure of a React application.",
      "To manage the state of a React component."
    ],
    "selected": null
  },
  {
    "question": "What is the purpose of 'context' in React?",
    "answer": 0,
    "options": [
      "To share data between components without passing props explicitly at every level.",
      "To define CSS styles for a specific component in React.",
      "To create custom hooks and share logic between components.",
      "To handle asynchronous operations in React components."
    ],
    "selected": null
  },
  {
    "question": "What is the purpose of 'key' prop in React lists?",
    "answer": 3,
    "options": [
      "To provide a unique identifier for a React component.",
      "To define the order of items in a React list.",
      "To toggle the visibility of a React component.",
      "To help React identify which items have changed, been added, or been removed from a list."
    ],
    "selected": null
  },
  {
    "question": "What does 'render()' method do in a React class component?",
    "answer": 1,
    "options": [
      "It initializes state and props for the component.",
      "It returns the JSX that defines the component's UI.",
      "It manages side effects and lifecycle events.",
      "It handles user inputs and interactions."
    ],
    "selected": null
  },
  {
    "question": "What is a higher-order component (HOC) in React?",
    "answer": 0,
    "options": [
      "A function that takes a component and returns a new component with additional props or functionality.",
      "A method to handle form validation in React.",
      "A hook that manages state and lifecycle events.",
      "A built-in React utility for routing and navigation."
    ],
    "selected": null
  },
  {
    "question": "What is the purpose of 'useReducer()' hook in React?",
    "answer": 2,
    "options": [
      "To handle side effects in functional components.",
      "To manage component lifecycle events.",
      "To handle complex state logic in functional components.",
      "To define reusable UI components."
    ],
    "selected": null
  },
  {
    "question": "What is the difference between 'useEffect()' and 'useLayoutEffect()' hooks?",
    "answer": 1,
    "options": [
      "There is no difference; they serve the same purpose.",
      "'useEffect()' runs after the DOM has been updated, while 'useLayoutEffect()' runs synchronously after all DOM mutations.",
      "'useEffect()' is used for synchronizing with the DOM, while 'useLayoutEffect()' is used for managing component state.",
      "'useEffect()' is for server-side rendering, while 'useLayoutEffect()' is for client-side rendering."
    ],
    "selected": null
  },
  {
    "question": "What does 'React.StrictMode' do?",
    "answer": 1,
    "options": [
      "It automatically updates the React version in your project.",
      "It activates additional checks and warnings for React components during development.",
      "It optimizes the performance of React applications.",
      "It enables advanced debugging tools for React components."
    ],
    "selected": null
  },
  {
    "question": "How can you handle errors in React components?",
    "answer": 2,
    "options": [
      "By using the 'try-catch' statement directly in the component's render method.",
      "By implementing error boundaries using 'componentDidCatch()' and 'static getDerivedStateFromError()'.",
      "By catching errors in the 'useEffect()' hook.",
      "By using the 'errorBoundary' prop in React components."
    ],
    "selected": null
  },
  {
    "question": "What is the purpose of 'useCallback()' hook in React?",
    "answer": 1,
    "options": [
      "To memoize values between renders.",
      "To memoize functions between renders to avoid unnecessary re-creations.",
      "To handle side effects in functional components.",
      "To manage the state of a React component."
    ],
    "selected": null
  },
  {
    "question": "What is a controlled component in React?",
    "answer": 0,
    "options": [
      "A component whose value is controlled by React state.",
      "A component that manages its own internal state.",
      "A component that receives data from props but does not control it.",
      "A component that handles routing and navigation."
    ],
    "selected": null
  },
  {
    "question": "What is 'React.createContext()' used for?",
    "answer": 0,
    "options": [
      "To create a context object for sharing data across components.",
      "To create new React components dynamically.",
      "To manage the state of components using the 'useState()' hook.",
      "To handle asynchronous operations and side effects."
    ],
    "selected": null
  },
  {
    "question": "What does 'React.Fragment' do?",
    "answer": 1,
    "options": [
      "It provides a way to define global styles for React applications.",
      "It allows grouping multiple elements without adding extra nodes to the DOM.",
      "It handles component state and lifecycle methods.",
      "It provides a mechanism for routing and navigation."
    ],
    "selected": null
  },
  {
    "question": "How do you optimize performance in React applications?",
    "answer": 3,
    "options": [
      "By using class components instead of functional components.",
      "By avoiding the use of state and props.",
      "By using inline functions and avoiding memoization.",
      "By using React's built-in memoization techniques, such as 'React.memo()', 'useMemo()', and 'useCallback()'."
    ],
    "selected": null
  },
];

export default reactQuestions;