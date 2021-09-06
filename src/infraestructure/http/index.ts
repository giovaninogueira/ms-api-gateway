import express from "express";
import { router } from "./implementations/routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log('API is Running...'));