import express from "express";
import { CreateUserApplication } from "../../../application/create-user/create-user-application";
import { CreateUserController } from "../../../interfaces/user-create/create-user-controller";
import { messagerBroker } from "../../messager-broker-access";
import { IRouteHttp } from "./routes";

export class UserRouter implements IRouteHttp {
    public resource: string = '/user';

    /**
     * Builder Router
     * @param router 
     * @returns 
     */
    builder(router: express.Router): express.Router {
        
        const createUserApplication = new CreateUserApplication();
        const userCreate = new CreateUserController(messagerBroker, createUserApplication);

        router.get(this.resource, userCreate.handle.bind(userCreate));
        return router;
    }
}