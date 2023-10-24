# Simple REST API with Express and Node.js

This is a basic example of a REST API built using Express and Node.js. It demonstrates how to set up the API, implement CRUD operations for a "User" resource, and connect to a SQLite database.

## Installation

Follow these steps to set up and run the API locally:

1. **Clone the repository:**

    <b>git clone https://github.com/trieuvi2910/homebase-express-api.git</b>

    <b>cd homebase-express-api</b>

    1.  Install dependencies:
        <b>npm install</b>

    2.  Set up the database:
        The SQLite database is used by default. It will be created automatically when you run the application.

    3.  Run the API:
        <b>npm start</b>
    
2. **API Endpoints:**

    - POST /api/user/create: Create a new user.

    - GET /api/user/all: Retrieve a list of all users.

    - GET /api/user/find/:id: Retrieve a specific user by ID.

    - PUT /api/user/update/:id: Update a specific user by ID.

    - DELETE /api/user/delete/:id: Delete a specific user by ID.

3. **Usage:**

    You can use tools like curl, Postman to interact with the API.

    - Create a new user:
        curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john.doe@example.com"}' http://localhost:3000/api/user/create

    - Get a list of users:
        curl http://localhost:3000/api/user/all

    - Retrieve a specific user by ID:
        curl http://localhost:3000/api/user/find/1

    - Update a user:
        curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name"}' http://localhost:3000/api/user/update/1
    
    - Delete a user:
        curl -X DELETE http://localhost:3000/api/user/delete/1
