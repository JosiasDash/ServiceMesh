# Users Microservice

The **Users Microservice** is a core component of the Service Mesh architecture. It is responsible for managing user-related operations, including:

- **User Profile Management**: Allows users to update their personal information.
- **Authorization**: Ensures users have appropriate access to resources.

## Features

- RESTful API for user operations.
- Integration with authentication and authorization services.
- Scalable and fault-tolerant design.
- Secure handling of sensitive user data.

## Technologies

- **Programming Language**: Javascript
- **Framework**: Express

## Deployment

This microservice is containerized using Docker compose.

For more details, refer to the project documentation or contact the development team.

### POSTMAN
This endpoint makes an HTTP GET request to retrieve profile information using the provided token. The request includes the user's ID in the URL path and the authentication token as a query parameter. The response will be in JSON format with the user's email, ID, and creation timestamp.

### Request

- Method: GET
    
- URL: `http://localhost:4001/profile/2050442c-14da-4b4d-9c7b-b83a17dd8255/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwNTA0NDJjLTE0ZGEtNGI0ZC05YzdiLWI4M2ExN2RkODI1NSIsImlhdCI6MTc0NDc2MTAzNn0.dX4s1rcNDXuEE5CcX1-Y7OOjQINT6-LzM266cF01nj0`
    

### Response

- Status: 200
    
- Content-Type: application/json
    
- { "email": "", "id": "", "created_at": ""}