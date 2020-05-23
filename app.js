const express = require("express");
const app = express();
const morgan = require("morgan");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator")
dotenv.config();



//DB CONNECTION
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
)
    .then(() => console.log("DB Connected"));

mongoose.connection.on("error", () => {
    console.log('DB connection error :  ${error.message}');
});



// BRING IN ROUTES
const postRoutes = require("./routes/post");

//MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);



const port = process.env.postRoutes || 8080 ;
app.listen(port, () => {
    console.log('A Node js API is listening on port', port)
});

// app.listen(8080);