require("./server/config/config.js");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const indexRoute = require("./routes/api/index");

let app = express();
const port = process.env.PORT;

// ==================================================
// Body Parser Middleware
// ==================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ==================================================
// Routes
// ==================================================
app.use("/api/index", indexRoute);

// ==================================================
// Create production ready
// ==================================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// ==================================================
// catch 404 and forward to error handler
// ==================================================
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// ==================================================
// Error handler
// ==================================================
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render("error");
});

app.listen(port, () => console.log(`Listening to port ${port}`));
