# RESTful API Project

This project implements a RESTful API for managing user data. The data for 1000 users has been obtained from [Mockaroo](https://mockaroo.com/).

## RESTful API Overview

A RESTful API follows the principles of Representational State Transfer (REST) architecture, allowing clients to interact with server resources using standard HTTP methods and stateless communication.

### Available Endpoints

- **GET /api/users**: Retrieve a list of all users.
- **GET /api/users/:id**: Retrieve details of a specific user by ID.
- **POST /api/users**: Create a new user.
- **PATCH /api/users/:id**: Update details of a specific user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

## Usage

### Installation

1. Clone the repository:
* <https://github.com/Chetan51423/RestApi-From-Scratch>

2. Install dependencies:
npm install

3. Start the server:
npm start


### Examples

#### GET /api/users

Retrieve a list of all users.


Response:
```json
[
    {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com",
        "gender": "Male",
        "job": "Software Engineer"
    },
    // More users...
]
```
### GET /api/users/:id
Retrieve details of a specific user by ID.

GET /api/users/1


Response:

```json
[
    {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com",
        "gender": "Male",
        "job": "Software Engineer"
    }   
]
```

### POST /api/users
Create a new user.

```json
[
    "Request Body:"
    {
        "first_name": "Alice",
        "last_name": "Smith",
        "email": "alice.smith@example.com",
        "gender": "Female",
        "job": "Data Scientist"
    }
 
]
```

Response:

```json
[
    {
        "id": 1001,
        "first_name": "Alice",
        "last_name": "Smith",
        "email": "alice.smith@example.com",
        "gender": "Female",
        "job": "Data Scientist"
    }
  
]
```

### PATCH /api/users/:id
Update details of a specific user by ID.

PATCH /api/users/1
```json
[
    "Request Body:"
    {
        "email": "john.doe.updated@example.com"
    }
]
``` 

Response:

```json
[
    {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe.updated@example.com",
        "gender": "Male",
        "job": "Software Engineer"
    }
]
```

### DELETE /api/users/:id
Delete a user by ID.

DELETE /api/users/1

Response:

```json
[
    "User with ID 1 deleted successfully."
]
```


## Contributing 

Contributions are welcome🤗! If you'd like to contribute to this project, please follow the guidelines in 