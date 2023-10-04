# Price-tracker Block-stars Task

This project allows you to track real-time crypto prices and market data using the CoinGecko API. Here's how you can set up and run the project locally on your machine.

## Features

- **Real-Time Price Updates:** Get real-time updates for cryptocurrency prices in USD.

## Technologies Used

- **Node.js:** The server-side application is built using Node.js, a JavaScript runtime.
- **Express.js:** Express.js is used as the web framework for building the RESTful API.
- **Axios:** Axios is used for making HTTP requests to the CoinGecko API.
- **Server-Sent Events (SSE):** SSE is used to push real-time updates to clients.
- **Vite:** Vite is used as the build tool and development server for the frontend part of the project.

## API Endpoints

### 1. **GET /prices**

- **Description:** Fetches real-time cryptocurrency prices and market data and history in USD.
- **Parameters:** ```vs_currency```of coins, comma-separated if querying more than 1 vs_currency
- **Response Format:** JSON

Example Response:

```json
{
"id": "bitcoin",
"symbol": "btc",
"name": "Bitcoin",
"image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
"current_price": 27364,
"market_cap": 534836985939,
"market_cap_rank": 1,
"fully_diluted_valuation": 575864802886,
"total_volume": 9356421132,
"high_24h": 27634,
"low_24h": 27265,
"price_change_24h": -13.781335081435827,
"price_change_percentage_24h": -0.05034,
"market_cap_change_24h": 463863426,
"market_cap_change_percentage_24h": 0.08681,
"circulating_supply": 19503843,
"total_supply": 21000000,
"max_supply": 21000000,
"ath": 69045,
"ath_change_percentage": -60.31362,
"ath_date": "2021-11-10T14:24:11.849Z",
"atl": 67.81,
"atl_change_percentage": 40309.63977,
"atl_date": "2013-07-06T00:00:00.000Z",
"roi": null,
"last_updated": "2023-10-04T14:29:24.223Z"
```

## Setup Instructions
1. Clone the Repository:
```bash
git clone https://github.com/your-username/Block-stars-task.git
cd Block-stars-task

```

2. Install Dependencies:
```bash
npm install

```

3. Start the backend server:
```bash 
cd backend
npm start

```

4. Start the Vite frontend:
```bash  
npm run dev
```