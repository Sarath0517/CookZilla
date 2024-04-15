import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";

import chatRoutes from "./routes/chatRoutes.js";

const { json } = bodyParser;
const app = express();
app.use(cors());
app.use(json());

config()

app.use("/", chatRoutes);

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})