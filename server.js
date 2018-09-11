const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(require("./middleware/headers"));
app.use(require("./middleware/validate-session"));

app.get('/test', (req, res) => {
    res.send("Hello World!")
});

app.use('/api/users', require("./routes/users"));
app.use('/api/login', require("./routes/sessions"));
app.use('/api/definitions', require("./routes/definitions"));

app.listen(3000, () => {
    console.log("Server running at port 3000");
});