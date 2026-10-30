# Banking Dashboard — Full Stack Application

A full-stack banking transaction dashboard built using ASP.NET Core Web API, React, TypeScript, and .NET 8. This portfolio project demonstrates API integration, transaction data display, search functionality, and responsive UI development.

## Technologies Used

- Backend: C#, .NET 8, ASP.NET Core Web API
- Frontend: React, TypeScript, HTML, CSS
- Development tools: Visual Studio, Vite, Git, GitHub
- API communication: REST API, Fetch API, JSON

## Features

- Account balance summary card
- Total income and expenses calculated from transaction data
- Recent transactions displayed in a table
- Search transactions by description
- Color-coded credit and debit transactions
- Responsive layout for desktop and mobile screens
- React frontend connected to an ASP.NET Core API

## Project Structure

- `BankingDashboard.API/` — ASP.NET Core backend
- `banking-dashboard-ui/` — React and TypeScript frontend
- `BankingDashboard.sln` — Visual Studio solution

## API Endpoint

`GET /api/Transactions`

The API returns sample banking transactions in JSON format. All transaction data is fictional and intended for demonstration purposes.

## Run Locally

### Backend

1. Install the .NET 8 SDK.
2. Open `BankingDashboard.sln` in Visual Studio.
3. Run the `BankingDashboard.API` project using HTTPS.
4. Verify the API at `https://localhost:7069/api/Transactions`.

### Frontend

1. Install Node.js and npm.
2. Open a terminal inside `banking-dashboard-ui`.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:5173` in your browser.

Keep the backend running while using the frontend. The frontend currently connects to the local API at `https://localhost:7069`. Your local HTTPS development certificate may need to be trusted.

## Future Improvements

- Add dashboard charts and visual reports
- Add transaction categories and date filters
- Add API error-handling improvements
- Deploy the frontend and backend for a live demonstration

## Project Purpose

This is a learning and portfolio project showcasing full-stack application development with .NET and React. It is not connected to a real bank or real customer accounts.
