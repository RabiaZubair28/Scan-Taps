require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router.js");
const detailRoute = require("./router/detail-router");
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
const path = require("path");

const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

const _dirname = path.resolve();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/data", detailRoute);

app.use(errorMiddleware);

app.use(express.static(path.join(__dirname, "..", "/client/dist")));
console.log(__dirname);
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "client", "..", "dist", "index.html"));
});

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server is running at port: ${process.env.PORT}`);
  });
});
