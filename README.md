
# User Management Backend

This is a Node.js backend application for managing user data, including creation, retrieval, updating, and deletion operations. It provides API endpoints for performing these operations and interacts with a MongoDB database to store user information.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/User-Management-Backend-System.git
   ```

2. **Install Dependencies:**

   ```bash
   cd User-Management-Backend-System
   npm install
   ```

3. **Set Environment Variables:**

   Create a `.env` file in the root directory and define the following environment variables:

   ```plaintext
   MONGODB_URI=your_mongodb_uri
   ```

   Replace `your_mongodb_uri` with the URI of your MongoDB database.

## Usage

1. **Start the Server:**

   ```bash
   npm start
   ```

   This will start the server and listen for incoming HTTP requests on the specified port.

2. **Testing:**

   Run the tests to ensure that the application is functioning correctly:

   ```bash
   npm test
   ```
2. **SwaggerUi:**

   Run the tests and go to this sample url to see swagger Ui:

   [[```bash
   npm test
   ```](http://localhost:3000/api-docs/#/)](http://localhost:3000/api-docs/#/)

## API Endpoints

- **POST /users:** Create a new user.
- **GET /users/:id:** Retrieve a user by ID.
- **PUT /users/:id:** Update user details.
- **DELETE /users/:id:** Delete a user by ID.

## Directory Structure

- **controllers:** Contains controller functions for handling HTTP requests.
- **models:** Defines MongoDB schemas and models.
- **tests:** Contains unit tests for the application.

## Dependencies

- **dotenv:** For loading environment variables from a `.env` file.
- **express:** Web framework for handling HTTP requests.
- **mongoose:** MongoDB object modeling tool.
- **swagger-jsdoc:** For generating Swagger documentation from JSDoc comments.
- **swagger-ui-express:** Middleware for serving Swagger UI.

## Development Dependencies

- **chai:** Assertion library for testing.
- **esm:** ECMAScript module loader.
- **mocha:** Testing framework.
- **sinon:** Test spies, stubs, and mocks.
