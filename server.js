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
    currentTime: moment(),
    startOfTheYear: moment().startOf("year"),
    today: moment().endOf("day"),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
console.log(moment("2023-09-20T23:59:59.999Z").local());
