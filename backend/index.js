const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
var corsOption = {
    origin: "*"
};
app.use(cors(corsOption));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({extended: true}));

app.post("/exchangePrice", async(req, res) => {
  console.log(req.body);
  let result;
  const headers = {
    'Content-Type': 'multipart/form-data',
  }
  await axios.post("https://fixedfloat.com/ajax/exchangePrice", req.body, {
    headers: headers
  }).then(response => {
    console.log(response.data);
    result = response.data;
  });
  console.log("END");
  res.json(result);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} .`);
});