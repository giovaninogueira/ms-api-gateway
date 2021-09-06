import express, { Request, Response } from "express";
import { sendCreateUserController } from "../../../../app/send-create-user";
import { IRouterHttp } from "../irouter-http.interface";

export class UserRouter implements IRouterHttp {
    /**
     * Handler
     * @param router 
     */
    handle(router: express.Router): void {
        router.post('/user', async (req: Request, resp: Response) => {
            return sendCreateUserController.handle(req, resp);
        });
    }
}