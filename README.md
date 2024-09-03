# Bookkeeping Service API

A backend API for a bookkeeping service built with Node.js, Express, and MongoDB. This API allows users to register as Authors or Borrowers, manage books, libraries, and borrowing activities, with JWT-based authentication.

## Features

- User Registration and Authentication (Authors and Borrowers)
- CRUD operations for Books and Libraries
- Borrow and Return Books
- JWT-based authentication for secure access
- Multilingual support for error and success messages

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or above)
- MongoDB (Running locally or on a remote server)

## Setup Instructions

### 1. Clone the Repository

To clone the repository to your local machine, use the following command:

1. Open your terminal or command prompt.
2. Run the command: `git clone https://github.com/your-username/bookkeeping-service.git`
3. Change into the cloned directory with: `cd bookkeeping-service`

### 2. Install Dependencies

To install all the required dependencies for the project:

1. Ensure you are inside the project directory.
2. Run the command: `npm install` to install all the necessary packages.

### 3. Set Up Environment Variables

To configure environment variables:

1. In the root directory of your project, create a file named `.env`.
2. Open the `.env` file and add the following lines:


3. Replace `your_jwt_secret` with a secure string of your choice.

### 4. Start MongoDB

To start MongoDB:

1. Make sure MongoDB is installed on your system.
2. Open a new terminal window.
3. Run the command: `mongod` to start the MongoDB server.

### 5. Run the Application

To run the server:

1. Ensure you are inside the project directory.
2. To start the server, run: `nodemon server.js`

The application should now be running on `http://localhost:5000`.

### 6. Test the API with Postman

To test the API using Postman:

1. Open the Postman application.
2. Import the Postman collection using the shared collection URL or file.
3. To obtain a JWT token, use the `POST /api/users/login` endpoint with valid user credentials.
4. Include the obtained JWT token in the `Authorization` header (`Bearer <JWT_TOKEN>`) for all API requests that require authentication.

### 7. Additional Information

- To add new users, use the `POST /api/users/register` endpoint.
- To manage books, use the CRUD endpoints under `/api/books`.
- To manage libraries, use the CRUD endpoints under `/api/libraries`.
- To borrow and return books, use the endpoints under `/api/borrow` and `/api/return`.

### Environment Variables Summary

- `MONGO_URI`: The MongoDB connection string, typically `mongodb://localhost:27017/bookkeeping` for local development.
- `JWT_SECRET`: A secret key used for JWT token generation; replace `your_jwt_secret` with a strong, unique string.
- `PORT`: The port number on which the server will run, typically `5000`.

## Conclusion

By following these instructions, you should be able to set up and run the Bookkeeping Service API on your local machine and test all its functionalities using Postman.
