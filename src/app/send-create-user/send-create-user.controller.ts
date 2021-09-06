import { Request, Response } from "express";
import { SendCreateUserApplication } from "./send-create-user.application";

export class SendCreateUserController {

    constructor(private readonly sendCreateUser: SendCreateUserApplication) {}

    /**
     * Handle
     * @param req 
     * @param resp 
     */
    async handle(req: Request, resp: Response): Promise<Response> {
        const { name, email, password, cellPhone } = req.body;
        const { code, response } = await this.sendCreateUser.handle({ 
            name, 
            email, 
            password, 
            cellPhone 
        });
        return resp.status(code).send(response);
    }
}