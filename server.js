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
    startDateUTC: moment.utc(date).startOf("day"),
    endDateUTC: moment.utc(date).endOf("day"),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
