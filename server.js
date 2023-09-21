const express = require("express");
const moment = require("moment");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const { date } = req.body;
  res.send({
    date,
    startDate: moment(date).startOf("day"),
    endDate: moment(date).endOf("day"),
    // startDate1: moment(date).startOf("day").toDate(),
    // endDate2: moment(date).endOf("day").toDate(),
    // startDate3: moment(date).startOf("day").utc(),
    // startDate4: moment.utc(date),
    // endDate3: moment(date).utc(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
