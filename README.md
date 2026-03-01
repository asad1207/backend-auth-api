# Secure Authentication API

## Overview
This project implements a secure backend authentication and authorization system using Node.js, Express, MongoDB, and JWT. It supports user and admin roles with role-based access control.

## Features
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Access and refresh token mechanism
- Role-based authorization (admin-only access)
- Secure logout
- Rate limiting and input validation

## User Roles
- user: Standard access
- admin: Access to protected admin routes

## API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /api/register | Register a new user |
| POST | /api/login | Login and receive tokens |
| POST | /api/refresh-token | Refresh access token |
| POST | /api/logout | Logout user |
| GET | /api/admin | Admin-only protected route |

## Authentication Flow
1. User registers with email and password.
2. Password is hashed and stored securely.
3. User logs in and receives access and refresh tokens.
4. Access token is required for protected routes.
5. Refresh token is used to issue new access tokens.
6. Logout invalidates refresh token.

## Security Measures
- Password hashing with bcrypt
- JWT authentication with expiration
- Role-based authorization
- Rate limiting for brute-force protection
- Input validation and proper HTTP status codes

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs# backend-auth-api
