import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
const port = 8383;

const apiKey = process.env.API_KEY;
// console.log(apiKey);

app.use(express.static("public"));
app.use(express.json());

app.get("/info/:dynamic", (req, res) => {
  const { dynamic } = req.params;
  const { key } = req.query;
  console.log(dynamic, key);
  console.log(apiKey);
  res.status(200).json({ info: `${apiKey}` });
});

app.post("/", (req, res) => {
  const { parcel } = req.body;
  console.log(parcel);
  if (!parcel) {
    return res.status(400).send({ status: "Failed" });
  }
  res.status(200).send({ status: "received" });
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
