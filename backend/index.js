const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const port = 8080;

app.get("/prices", async (req, res) => {
  try {
    // Fetch data from CoinGecko API
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
        },
      }
    );

    const price = response.data;
    // Send the price to the client using   
      res.status(200);
    res.send(price);
  } catch (error) {
    // res.send("Error while fetching API Data", error.message);
    console.log("Error while fetching API",error.message);
    res.status(400)
  }
});

app.listen(port, () => {
  console.log(`Server started on port, ${port}`);
});
