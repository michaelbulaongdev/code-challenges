const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmi", function (req, res) {
    res.sendFile(__dirname + "/bmiCalc.html");
});

app.post("/bmi", function (req, res) {

    var weight = (req.body.wgt);
    var height = (req.body.hgt);

    var bmi = Math.round(weight / Math.pow(height, 2));

    res.send("Your BMI is " + bmi + " kg/m^2.");
});

app.listen(port, function () {
    console.log("Server running at port " + port);
});
