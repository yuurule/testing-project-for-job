const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;

const app = express();
app.use(cors({
  //credentials: true,
  origin: [
      "http://localhost:" + port,
  ]
}));

app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );
  next();
});

// Route files
const postRoute = require('./routes/post');

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message: message,
    data: data
  });
});

// Routing
app.use('/trips', postRoute);

app.listen(port, () => {
  console.log (`Server is running on port ${port}.`);
});