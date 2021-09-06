import { IMessagerBroker } from "../../repositories/messager-broker/imessager-broker.interface";
import { ISendCreateUserDTO } from "./isend-create-user-dto.interface";

export class SendCreateUserApplication {
    constructor (private readonly messagerBroker: IMessagerBroker) { }

    /**
     * Handle
     * @param userSend 
     */
    async handle(userSend: ISendCreateUserDTO): Promise<{code: number, response: any}> {
        return await this.messagerBroker.sendRPC({
            queue: 'user-create',
            message: userSend
        });
    }
}