const randomQuestions = [
  {
    "question": "What MVVM stands for?",
    "explanation": "MVVM stands for Model-View-ViewModel. It is a software architectural pattern that separates the user interface (View) from the application logic and data (Model) by introducing an intermediary component called the ViewModel.\n\nHere's a brief explanation of each component in MVVM:\n\nModel: The Model represents the data and business logic of the application. It encapsulates the data and provides methods to manipulate and access that data. It is responsible for data storage, retrieval, and manipulation.\n\nView: The View represents the user interface of the application. It is responsible for presenting the data to the user and capturing user interactions. It can be implemented using HTML, CSS, and other UI technologies.\n\nViewModel: The ViewModel acts as a bridge between the View and the Model. It provides the necessary data and behaviors required by the View. The ViewModel exposes data and commands that the View can bind to, allowing the View to display the data and interact with it. It abstracts the application logic and transforms the raw data from the Model into a format suitable for presentation in the View.\n\nThe MVVM pattern promotes separation of concerns and enables a more modular and maintainable architecture. It allows for easier testing of individual components, as the ViewModel can be unit tested without relying on the actual user interface. Additionally, MVVM facilitates data binding, where changes in the ViewModel automatically reflect in the View, reducing the need for manual synchronization. MVVM is commonly used in frameworks like Microsoft's WPF (Windows Presentation Foundation) and Xamarin, as well as in JavaScript frameworks like Vue.js and Knockout.js.",
    "selected": null
  },
  {
    "question": "What is the difference between a markup language and a programming language?",
    "explanation": "Markup language and programming language are two distinct types of languages used in different domains and serve different purposes:\n\nMarkup Language:\n\nMarkup languages are used to annotate and format text to provide structure and presentation.\n\nMarkup languages are not programming languages but rather descriptive languages.\n\nThey define the structure and appearance of documents and are primarily used for displaying information.\n\nExamples of markup languages include HTML (Hypertext Markup Language), XML (eXtensible Markup Language), Markdown, and LaTeX.\n\nMarkup languages focus on describing the document's content and how it should be displayed or structured.\n\nProgramming Language:\n\nProgramming languages are used to write executable instructions that control the behavior of a computer program.Programming languages are used for creating algorithms, implementing logic, manipulating data, and building software applications.\n\nThey provide the ability to define variables, control flow, perform calculations, and interact with system resources.\n\nExamples of programming languages include JavaScript, Python, Java, C++, Ruby, and many others.\n\nProgramming languages are designed to express computations and algorithms in a way that can be executed by a computer.\n\n\n\nIn summary, markup languages are used for structuring and presenting information, while programming languages are used for creating executable instructions and building software applications. Markup languages focus on presentation and structure, whereas programming languages focus on computational logic and automation.\n\n",
    "selected": null
  },
  {
    "question": "What is Data Binding?",
    "explanation": "Data binding is a concept in software development that establishes a connection between the application's data (data source) and the user interface (UI) elements. Two common types of data binding are one-way data binding (from data source to UI) and two-way data binding (from data source to UI, and from UI to data source, ex v-model in Vue)",
    "selected": null
  },
];

export default randomQuestions