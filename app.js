const express = require("express");
const app = express();
const v80Screener = require("./v80Screener");

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/v80", async (req, res) => {
    const data = await v80Screener(10);
    const results = data.flat();
    res.json(results);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
