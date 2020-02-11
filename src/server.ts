import express from "express";
import router from "./routes/routes";
const server = express();
import cors from "cors";
import * as bodyParser from "body-parser";
const port = 9092;

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(router);

server.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );