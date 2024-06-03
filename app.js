const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const userRoute = require("./routes/user-route");
const imageRoute = require("./routes/image-route");
const productRoute = require("./routes/product-route");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use("/uploads", express.static("uploads"));
app.use("/image", express.static("image"));

// Define routes
app.use("/user", userRoute);
app.use("/image", imageRoute);
app.use("/product", productRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
