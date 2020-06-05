const express = require('express');
const app = express();
require('dotenv').config();
const routes = require("./routes");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/project3_db", {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);


app.listen(PORT, ()=> console.log("connected on port "+PORT))