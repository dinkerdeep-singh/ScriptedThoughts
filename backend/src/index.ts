const rootRouter = require("./routes/index");
const cors = require("cors");
const express = require("express");
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });