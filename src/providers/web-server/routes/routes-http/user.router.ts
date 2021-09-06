import express from "express";
import { IRouterHttp } from "../irouter-http.interface";

export class UserRouter implements IRouterHttp {
    handle(router: express.Router): void {
        router.get('/teste', (req, resp) => {
            return resp.send('Ola;');
        })
    }
}