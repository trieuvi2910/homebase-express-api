const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//config env
const dotenv = require("dotenv");
dotenv.config();

const routes = require("./src/routes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Use Sequelize for database connection
const sequelize = require("./src/database/sqlite");
const User = require("./src/models/user");

// sequelize.sync();

// Use userRoutes for handling user-related requests
app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("HELLO WORLD");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
