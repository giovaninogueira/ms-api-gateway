import { Request, Response } from "express";
import { CreateUserApplication } from "../../application/create-user/create-user-application";
import { IMessagerBroker } from "../messager-broker/imessager-broker";

export class CreateUserController {
    constructor(
        private readonly messagerBroker: IMessagerBroker,
        private readonly userApplication: CreateUserApplication
    ) { }

    /**
     * Handle Request
     * @param req 
     * @param resp 
     */
    async handle(req: Request, resp: Response): Promise<Response> {
        const result = await this.userApplication.handle(req.body, this.messagerBroker);
        return resp.send('result');
    }
}