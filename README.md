# Currency Exchange API

A simple currency exchange API built using Node.js and Express. This API allows users to get the latest exchange rates between different currencies using a public currency conversion API.

## Features

- Fetch exchange rates from a public API.
- Support for multiple currencies.
- Caching mechanism to reduce API calls.
- Rate limiting to prevent abuse of the API.
- Error handling for various scenarios.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation and Usage

1. Clone the repository:
2. Install the dependencies: npm install
3. Run the server
4. In the CMD change directory to the project file
5. run: node server.js
6. The server will run on http://localhost:4000.

API Endpoints
Get Exchange Rate

Request: GET /api/exchange-rate?from={fromCurrency}&to={toCurrency}

Parameters:

fromCurrency: The currency code to convert from (e.g., USD).
toCurrency: The currency code to convert to (e.g., EUR).
6. Test using: curl "http://localhost:4000/api/exchange-rate?from=USD&to=EUR" 
