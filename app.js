const express = require("express");
const app = express();
const connectToDb = require("./db/connectdb");
require("dotenv").config();
const router = require('./routes/tasks');
const routesNotFound = require('./middleware/unknownRoutes');
const cors = require('cors');


// Handle ccors policy

app.use(cors({
  origin: '*',
  methods: ['GET','POST','PATCH','DELETE']
}))
// Routes
app.use('/api/v1/tasks',router);

// Middlewares

app.use(express.json());

app.use(routesNotFound);


const PORT = process.env.PORT || 3000;

const start = () => {
  try {
    connectToDb(process.env.MONGO_URI);
    app.listen(PORT, console.log(`listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start()
