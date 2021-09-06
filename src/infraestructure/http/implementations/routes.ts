import express from "express";
import { UserRouter } from "./user-router";

export interface IRouteHttp {
    resource: string;
    builder(router: express.Router): express.Router;
}

const router = express.Router();

const listRoutes: Array<IRouteHttp> = [
    new UserRouter()
];

listRoutes.map((routerCustom) => routerCustom.builder(router));

export { router };