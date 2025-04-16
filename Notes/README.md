# ServiceMesh Microservice

This microservice is part of the ServiceMesh project and is designed to facilitate communication and management of services within a distributed system. It allows authenticated user with auth service to add notes and view notes.

## Features
- **Traffic Management**: Intelligent routing and load balancing between services.
- **User Authentication**: Secure user authentication and authorization using the auth service.

## Requirements
- Node.js

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### POSTMAN
This endpoint makes an HTTP GET request to retrieve profile information using the provided token. The request includes the user's ID in the URL path and the authentication token as a query parameter. The response will be in JSON format with the user's email, ID, and creation timestamp.

### Request

- Method: GET
    
- URL: `http://localhost:4001/profile/2050442c-14da-4b4d-9c7b-b83a17dd8255/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwNTA0NDJjLTE0ZGEtNGI0ZC05YzdiLWI4M2ExN2RkODI1NSIsImlhdCI6MTc0NDc2MTAzNn0.dX4s1rcNDXuEE5CcX1-Y7OOjQINT6-LzM266cF01nj0`
    

### Response

- Status: 200
    
- Content-Type: application/json
    
- { "email": "", "id": "", "created_at": ""}

This endpoint makes an HTTP GET request to retrieve a specific note with the ID "2050442c-14da-4b4d-9c7b-b83a17dd8255". The response will be in JSON format and will include the title, content, and creation timestamp of the note.

### Request Body

This endpoint does not require a request body.

### Response Body

The response will be in JSON format and will include an array with objects representing the note. Each object will contain the following keys:

- "title": The title of the note.
    
- "content": The content of the note.
    
- "created_at": The timestamp when the note was created.