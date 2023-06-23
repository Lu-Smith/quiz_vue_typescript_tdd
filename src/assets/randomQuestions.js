const randomQuestions = [
    {
      "question": "What MVVM stands for?",
      "explanation": 
        `MVVM stands for Model-View-ViewModel. It is a software architectural pattern that separates the user interface (View) from the application logic and data (Model) by introducing an intermediary component called the ViewModel. <br /> Here's a brief explanation of each component in MVVM: <br /> Model: The Model represents the data and business logic of the application. It encapsulates the data and provides methods to manipulate and access that data. It is responsible for data storage, retrieval, and manipulation. <br /> View: The View represents the user interface of the application. It is responsible for presenting the data to the user and capturing user interactions. It can be implemented using HTML, CSS, and other UI technologies. <br /> ViewModel: The ViewModel acts as a bridge between the View and the Model. It provides the necessary data and behaviors required by the View. The ViewModel exposes data and commands that the View can bind to, allowing the View to display the data and interact with it. It abstracts the application logic and transforms the raw data from the Model into a format suitable for presentation in the View. <br /> The MVVM pattern promotes separation of concerns and enables a more modular and maintainable architecture. It allows for easier testing of individual components, as the ViewModel can be unit tested without relying on the actual user interface. Additionally, MVVM facilitates data binding, where changes in the ViewModel automatically reflect in the View, reducing the need for manual synchronization. MVVM is commonly used in frameworks like Microsoft's WPF (Windows Presentation Foundation) and Xamarin, as well as in JavaScript frameworks like Vue.js and Knockout.js.`,
      "selected": null
    },
   
  ];
  
  export default randomQuestions;