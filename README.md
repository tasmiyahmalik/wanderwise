# WanderWise - Travel Booking App

## Team Members
- Tasmiyah Malik
- Minahil
- Meerb

## Description
WanderWise is a full-stack travel booking web application built with Angular and ASP.NET Core. Users can browse trips, book travel packages, and manage their bookings through a dynamic dashboard.

## Tech Stack
- Frontend: Angular 17 + TypeScript + HTML + CSS
- Backend: ASP.NET Core Web API (C#)
- Authentication: JWT Tokens

## Pages
1. Home - Landing page with animations
2. Login - JWT authenticated login
3. Signup - User registration
4. Dashboard - User booking data
5. Trips - Browse travel packages
6. Admin - Manage users and trips

## How to Run Frontend
1. Open terminal
2. cd wanderwise-frontend
3. npm install
4. ng serve

## How to Run Backend
1. Open terminal
2. cd backend
3. dotnet restore
4. dotnet run

## API Endpoints
- POST /api/auth/login
- POST /api/auth/register
- GET /api/trips
- POST /api/trips
- PUT /api/trips/{id}
- DELETE /api/trips/{id}