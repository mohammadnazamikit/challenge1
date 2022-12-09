import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import exp from "constants";
import artistRouter from "./artist/index.js";
import { genericServerErrorHandler } from "./errorHandlers.js";

const server = express();

const port = process.env.PORT || 3005;
server.use(cors());

server.use(express.json());

server.use("/show", artistRouter);

server.use(genericServerErrorHandler);

server.listen(port, () => {
  console.table(listEndpoints);
  console.log(`the server is running on ${port}`);
});
