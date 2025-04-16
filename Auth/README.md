# Auth Microservice

This microservice is responsible for handling authentication and authorization within the Service Mesh architecture. It provides secure access control.

## Features
- User authentication (e.g., login/signup)
- Token-based authorization (e.g., JWT)

## Technologies
- **Programming Language**: Javascript
- **Framework**: Express
- **Database**: Firebase
- **Authentication**: JWT

## Setup
1. Install dependencies:
```bash
    npm install
```
2. Configure environment variables:
    - Create a `.env` file based on `.env.example`.
    - Download firebase service account in `services-mesh-firebase.json`.

4. Run the service:
```bash
    node src/index.js
```

## API Endpoints
- `POST /login` - Authenticate user and return a token.
- `POST /signup` - Register a new user.
- `GET /verify-token` - Retrieve authenticated user details.

## License
This project is licensed under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

### POSTMAN specifications
### HTTP POST Request to Sign Up

#### Description

This API endpoint is used to sign up by submitting user email and password.

#### Request

- Method: POST
    
- URL: `http://localhost:4000/signup`
    
- Headers:
    
    - Content-Type: application/json
        
- { "email": "string", "password": "string"}
    

#### Response

- Status: 400
    
- Content-Type: application/json
    
- { "message": "string"}
    

#### Example

- { "email": "hannieldegbelo@gmail.com", "password": "Hanniel2025"}
    
- { "message": "string"}
    

#### Use Case

- This request can be used to register a new user by providing their email and password.
    

A successful POST request typically returns a `200 OK` or `201 Created` response code.
