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
  {
    "question": "What is XML?",
    "explanation": "XML (eXtensible Markup Language) is a markup language used for encoding documents in a format that both humans and machines can read. XML tags are user-defined, meaning you can create your own tags to describe data. XML is platform-neutral, meaning it can be used across different software, hardware, and programming languages.",
    "selected": null
  },
  {
    "question": "What is REST API?",
    "explanation": "REST (Representational State Transfer) API is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol, typically HTTP. In REST, resources (like data objects) are identified by URLs, and the API uses standard HTTP methods like GET, POST, PUT, DELETE to perform actions on these resources. REST APIs are widely used for web services and are known for their simplicity and scalability.",
    "selected": null
  },
  {
    "question": "What is normalization in databases?",
    "explanation": "Normalization is the process of organizing data in a database to minimize redundancy and improve data integrity. It involves dividing large tables into smaller, related tables and defining relationships between them. The most common normalization forms are 1NF (First Normal Form), 2NF (Second Normal Form), and 3NF (Third Normal Form). Each form has specific rules that aim to ensure that the data is stored efficiently and without unnecessary duplication.",
    "selected": null
  },
  {
    "question": "What is SQL Injection?",
    "explanation": "SQL Injection is a security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. It typically involves inserting malicious SQL statements into an entry field, which could lead to data leaks, unauthorized data access, or database corruption. SQL Injection attacks can be prevented by using parameterized queries or prepared statements, and by sanitizing user input.",
    "selected": null
  },
  {
    "question": "What is ACID in databases?",
    "explanation": "ACID stands for Atomicity, Consistency, Isolation, and Durability, which are the key properties that ensure reliable processing of database transactions. \n- **Atomicity** ensures that all operations in a transaction either complete or none do. \n- **Consistency** ensures that the database remains in a valid state before and after a transaction. \n- **Isolation** ensures that transactions do not interfere with each other. \n- **Durability** ensures that the results of a transaction are permanently stored, even in case of a system crash.",
    "selected": null
  },
  {
    "question": "What is indexing in a database?",
    "explanation": "Indexing is a technique used in databases to improve the speed of data retrieval. An index creates a data structure that allows the database to find data faster than it would by scanning the entire table. Indexes can be created on columns that are frequently used in WHERE clauses, JOIN conditions, or ORDER BY statements. While indexing improves read performance, it may slow down write operations like INSERT, UPDATE, or DELETE due to the overhead of maintaining the index.",
    "selected": null
  },
  {
    "question": "What is the difference between `JOIN` and `UNION` in SQL?",
    "explanation": "`JOIN` is used to retrieve data from multiple related tables based on a condition, usually on a key or common field. Types of joins include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN. \nOn the other hand, `UNION` is used to combine the result sets of two or more SELECT queries into a single result. `UNION` requires that the result sets have the same number of columns and compatible data types, and it removes duplicate rows by default (though `UNION ALL` will keep them).",
    "selected": null
  },
  {
    "question": "What is the purpose of foreign keys in a relational database?",
    "explanation": "A foreign key is a field (or a collection of fields) in one table that uniquely identifies a row in another table. It establishes a relationship between the two tables. Foreign keys help maintain referential integrity, ensuring that relationships between tables remain consistent. For example, if a foreign key in the `Orders` table references the `Customers` table, it ensures that each order corresponds to a valid customer.",
    "selected": null
  },
  {
    "question": "What is the difference between `DELETE` and `TRUNCATE` in SQL?",
    "explanation": "`DELETE` is used to remove specific rows from a table based on a condition. It is a DML (Data Manipulation Language) operation, and it can be rolled back if enclosed in a transaction. \n\n`TRUNCATE` is a DDL (Data Definition Language) operation that removes all rows from a table, but unlike `DELETE`, it cannot be rolled back. Additionally, `TRUNCATE` is typically faster and does not generate individual row deletions in the transaction log.",
    "selected": null
  },
  {
    "question": "What is the difference between `HAVING` and `WHERE` in SQL?",
    "explanation": "`WHERE` is used to filter records before any grouping takes place in an SQL query, while `HAVING` is used to filter records after the `GROUP BY` clause. In other words, `WHERE` is used to filter rows, and `HAVING` is used to filter groups created by the `GROUP BY` clause. For example, you can use `HAVING` to filter results based on aggregate functions like `COUNT()`, `SUM()`, etc.",
    "selected": null
  },
];
 
export default randomQuestions