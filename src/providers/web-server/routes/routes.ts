import express from "express";
import { UserRouter } from "./routes-http/user.router";

export interface IRouterHttp {
    handle(router: express.Router): void
}

const router = express.Router();

const listRoutes: Array<IRouterHttp> = [
    new UserRouter()
];

listRoutes.map((routerCustom) => {
    routerCustom.handle(router);
});

export { router };