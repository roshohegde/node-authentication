# Node.js Authentication App

This is a simple Node.js application that provides user registration and authentication functionality. Users can sign up with their email and password and then log in using their credentials. The app securely stores user information in a database.

## Features

- User registration with email and password
- Secure password storage using bcrypt
- User authentication using JSON Web Tokens (JWT)
- API routes for registration and login
- MongoDB database for storing user data

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js and npm
- MongoDB

## Installation
    Clone the repository:

   
   git clone https://github.com/roshohegde/node-authentication
   cd node-authentication
## Install dependencies:

    npm install


## Configure the application by creating a .env file and specifying the following environment variables:

    PORT - The port on which the server should run (default: 3000)
    MONGODB_URI - The MongoDB connection string
    SECRET_KEY - The secret key for JWT token generation

## Start the application:
npm start

## Usage
# Registration:
    Send a POST request to /register with a JSON body containing email and password fields.
# Login:
    Send a POST request to /login with a JSON body containing email and password fields.
    Upon successful login, a JWT token will be provided in the response.
# Protected Routes:
    Some routes may require authentication. Include the JWT token in the Authorization header to access these routes.

## API Endpoints
    POST /register: Register a new user.
    POST /login: Authenticate and log in a user.
