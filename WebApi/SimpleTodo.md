Task: Create a basic Web API for managing a to-do list

Requirements:

1. Create an ASP.NET Web API project using .NET Framework 4.8.

2. Implement a Todo model with the following properties:
   - Id (int)
   - Title (string)
   - IsCompleted (bool)

3. Implement a repository (via an interface) that uses an in-memory list to store Todo items.

4. Use dependency injection to inject the repository into your controller.

5. Implement the following API endpoints:
   - GET /api/todos: Retrieve all todo items
   - GET /api/todos/{id}: Retrieve a specific todo item
   - POST /api/todos: Create a new todo item
   - PUT /api/todos/{id}: Update a todo item (including marking as completed)
   - DELETE /api/todos/{id}: Delete a todo item

6. Implement basic input validation (e.g., ensure Title is not empty).

7. Use appropriate HTTP status codes for responses (200 OK, 201 Created, 404 Not Found, etc.).

8. Implement a simple search functionality:
   - GET /api/todos/search?title={searchString}: Find todos containing the given string in their title

9. Implement basic exception handling and logging.

Evaluation Criteria:
1. Project Setup:
   - Correct project type and .NET Framework version
   - Proper organization of project structure (controllers, models, interfaces, etc.)
   - Correct configuration of dependency injection

2. Implementation:
   - Correct implementation of API endpoints
   - Proper use of HTTP methods and status codes
   - Correct implementation and use of dependency injection
   - Proper implementation of ITodoRepository and its in-memory list implementation

3. Code Quality:
   - Code organization and clarity
   - Proper use of C# language features
   - Adherence to naming conventions and coding standards

4. Functionality:
   - Input validation
   - Error handling and logging
   - Correct implementation of search functionality

5. API Design:
   - RESTful design principles
   - Proper use of attribute routing

6. (Bonus) Any additional features or improvements, such as unit tests or more advanced error handling
