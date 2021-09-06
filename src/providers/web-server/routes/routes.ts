import express from "express";
import { IRouterHttp } from "./irouter-http.interface";
import { UserRouter } from "./routes-http/user.router";

const router = express.Router();

const listRoutes: Array<IRouterHttp> = [
    new UserRouter()
];

listRoutes.map((routerCustom) => {
    routerCustom.handle(router);
});

export { router };