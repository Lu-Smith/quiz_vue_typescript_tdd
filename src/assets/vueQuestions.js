const vueQuestions = [
    {
        "question": "What is Vue.js?",
        "answer": 0,
        "options": [
            "An open-source JavaScript framework.",
            "A CSS preprocessor.",
            "A programming language.",
            "A database management system."
        ],
        "selected": null
    },
    {
        "question": "Vue was develpoed by...",
        "answer": 2,
        "options": [
            "Brendan Eich",
            "Mark Zuckerberg",
            "Evan You",
            "Jeff Bezos"
        ],
        "selected": null
    },
    {
        "question": "What Vue is based on?",
        "answer": 2,
        "options": [
            "MVC (Model-View-Controller) pattern",
            "Observer pattern",
            "MVVM (Model-View-ViewModel) pattern",
            "Singleton pattern"
        ],
        "selected": null
    },
    {
        "question": "How do you implement two-way data binding in a Vue.js component?",
        "answer": 3,
        "options": [
            "Use the v-bind directive.",
            "Use the v-on directive.",
            "Use the v-show directive.",
            "Use the v-model directive."
        ],
        "selected": null
    },
    {
        "question": "What are computed properties in Vue.js?",
        "answer": 0,
        "options": [
            "Properties calculated on other properties in the component.",
            "Properties defined in data objects.",
            "Properties used for event handling.",
            "Properties used for styling."
        ],
        "selected": null
    },
    {
        "question": "What is a primitive type?",
        "answer": 3,
        "options": [
            "div, p, stong, small",
            "graphs, tables",
            "array, objects, object[]",
            "string, number, boolean "
        ],
        "selected": null
    },
    {
        "question": "Name directives in Vue.js?",
        "answer": 2,
        "options": [
            "v-for, v-bind, v-text, v-html, v-once",
            "v-component, v-transition, v-slot, v-pre, v-cloak",
            "v-show, v-if, v-model, v-else, v-on ",
            "v-validate, v-scroll, v-resize, v-model-sync, v-clipboard"
        ],
        "selected": null
    },
    {
        "question": "What year Vue.js was realised?",
        "answer": 1,
        "options": [
            "2003",
            "2014",
            "1994",
            "2020"
        ],
        "selected": null
    },
    {
        "question": "Where primitive types can be used?",
        "answer": 1,
        "options": [
            "Reactive()",
            "Ref()",
            "Reagenartive()",
            "Refreshing()",
        ],
        "selected": null
    },
    {
        "question": "Can Reactive() and Ref() can be reassigned?",
        "answer": 0,
        "options": [
            "Reactive() can not be reasigned, but Ref() can",
            "Reactive() can be reasigned, but Ref() can not",
            "Reactive() and Ref() can not be reasigned",
            "Reactive() and Ref() can be reasigned",
        ],
        "selected": null
    },
    {
        "question": "What is the virtual DOM in Vue.js?",
        "answer": 0,
        "options": [
          "A representation of the actual DOM in memory.",
          "A JavaScript object used for efficient rendering.",
          "A concept unrelated to Vue.js.",
          "A database management system."
        ],
        "selected": null
      },
      {
        "question": "What is the purpose of the 'v-for' directive in Vue.js?",
        "answer": 0,
        "options": [
          "To render a list of items based on an array.",
          "To bind a value to an HTML attribute.",
          "To conditionally show or hide an element.",
          "To handle user input events."
        ],
        "selected": null
      },
      {
        "question": "What is the difference between 'v-if' and 'v-show' directives in Vue.js?",
        "answer": 1,
        "options": [
          "There is no difference, they can be used interchangeably.",
          "'v-if' removes the element from the DOM, while 'v-show' hides it with CSS.",
          "'v-if' hides the element with CSS, while 'v-show' removes it from the DOM.",
          "'v-if' is used for rendering lists, while 'v-show' is used for conditional rendering."
        ],
        "selected": null
      },
      {
        "question": "How can you listen to an event in Vue.js?",
        "answer": 2,
        "options": [
          "Using the 'v-bind' directive.",
          "Using the 'v-once' directive.",
          "Using the 'v-on' directive.",
          "Using the 'v-model' directive."
        ],
        "selected": null
      },
      {
        "question": "What is the purpose of the 'watch' option in a Vue.js component?",
        "answer": 3,
        "options": [
          "To define computed properties.",
          "To handle user input events.",
          "To create reactive data properties.",
          "To react to changes in data properties or computed properties."
        ],
        "selected": null
      },
      {
        "question": "How can you import a component in Vue.js?",
        "answer": 0,
        "options": [
          "Using the 'import' statement in your script.",
          "By adding a <component> tag in your HTML.",
          "By using the 'v-import' directive.",
          "By including a <script> tag with the component's URL."
        ],
        "selected": null
      },
      {
        "question": "What is the purpose of the 'v-bind' directive in Vue.js?",
        "answer": 1,
        "options": [
          "To conditionally show or hide an element.",
          "To bind a value to an HTML attribute.",
          "To render a list of items based on an array.",
          "To handle user input events."
        ],
        "selected": null
      },
      {
        "question": "What is the lifecycle hook used when a Vue.js component is created?",
        "answer": 2,
        "options": [
          "beforeCreate()",
          "created()",
          "mounted()",
          "destroyed()"
        ],
        "selected": null
      },
      {
        "question": "How can you pass data from a parent component to a child component in Vue.js?",
        "answer": 0,
        "options": [
            "Using props.",
            "Using slots.",
            "Using emits.",
            "Using refs."
        ],
        "selected": null
      },
      {
        "question": "In Vue 3, which lifecycle hook is used when a component is mounted to the DOM?",
        "answer": 2,
        "options": [
          "beforeCreate()",
          "created()",
          "mounted()",
          "destroyed()"
        ],
        "selected": null
      },
      {
        "question": "In Vue 3, what is the purpose of the nextTick function?",
        "answer": 3,
        "options": [
          "Delaying the execution of a function until the next event loop cycle",
          "Handling keyboard events",
          "Updating the DOM immediately after a data change",
          "Executing a callback function after the DOM has been updated"
        ],
        "selected": null
      },
      {
        "question": "What is the purpose of the provide and inject functions in Vue 3?",
        "answer": 1,
        "options": [
          "Managing component state",
          "Providing and injecting dependencies between ancestor and descendant components",
          "Defining component props",
          "Handling routing in a Vue application"
        ],
        "selected": null
      },
      {
        "question": "How can you emit a custom event from a child component to its parent in Vue 3?",
        "answer": 2,
        "options": [
          "Using the $emit method",
          "Defining a custom event in the template",
          "Using the emit function in the setup() method",
          "Creating a global event bus"
        ],
        "selected": null
      },
      {
        "question": "What is the purpose of the watchEffect function in Vue 3's Composition API?",
        "answer": 0,
        "options": [
          "Performing side effects in response to reactive dependencies",
          "Handling user input in forms",
          "Defining computed properties",
          "Managing global state in a Vuex store"
        ],
        "selected": null
      },
      {
        "question": "In Vue 3, how can you provide default values for props in a component?",
        "answer": 1,
        "options": [
          "Using the v-bind directive",
          "Defining default property values in the props option",
          "Creating a data property for each prop",
          "Using the computed option for props"
        ],
        "selected": null
      },
      {
        "question": "What is the purpose of the v-if and v-else directives in Vue 3?",
        "answer": 0,
        "options": [
          "Conditional rendering of elements",
          "Styling elements based on conditions",
          "Creating event listeners",
          "Handling form submissions"
        ],
        "selected": null
      },
      {
        "question": "Which function is used to create a reactive ref in the Composition API of Vue 3?",
        "answer": 2,
        "options": [
          "reactive()",
          "computed()",
          "ref()",
          "watch()"
        ],
        "selected": null
      },
      {
        "question": "In Vue 3, what is the purpose of the Teleport component?",
        "answer": 3,
        "options": [
          "Managing state in Vuex",
          "Handling HTTP requests",
          "Creating global components",
          "Moving a component's children to a different DOM location"
        ],
        "selected": null
      },
      {
        "question": "Which of the following is a new feature in Vue 3 for efficient template rendering?",
        "answer": 1,
        "options": [
          "v-model directive",
          "Teleport",
          "v-for directive",
          "v-bind directive"
        ],
        "selected": null
      },
      {
        "question": "What is the Composition API introduced in Vue 3 used for?",
        "answer": 0,
        "options": [
          "Organizing component logic with functions",
          "Styling components with CSS",
          "Defining component templates",
          "Handling component events"
        ],
        "selected": null
      },
      {
        "question": "What is the purpose of the v-show directive in Vue.js?",
        "answer": 0,
        "options": [
          "Toggling the visibility of an element based on a condition",
          "Handling form submissions",
          "Creating a computed property",
          "Defining custom events"
        ],
        "selected": null
      },
      {
        "question": "Which Vue.js directive is used for binding an attribute to an expression?",
        "answer": 3,
        "options": [
          "v-if",
          "v-model",
          "v-on",
          "v-bind"
        ],
        "selected": null
      },
      {
        "question": "What does the v-for directive in Vue.js primarily facilitate?",
        "answer": 2,
        "options": [
          "Conditional rendering",
          "Event handling",
          "Iteration over a list",
          "Two-way data binding"
        ],
        "selected": null
      },
      {
        "question": "What major improvement in Vue 3 provides a more flexible and scalable way to organize component logic?",
        "answer": 2,
        "options": [
          "Introduction of Teleport component",
          "Enhanced support for TypeScript",
          "The Composition API",
          "Improved reactivity system"
        ],
        "selected": null
      }
]

export default vueQuestions;