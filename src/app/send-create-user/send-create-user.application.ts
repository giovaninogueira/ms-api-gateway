import { IMessagerBrokerAccess } from "../../providers/messager-broker-access/implementations/imessager-broker-access.interface";
import { ISendCreateUserDTO } from "./isend-create-user-dto.interface";

export class SendCreateUserApplication {
    constructor (private readonly messagerBroker: IMessagerBrokerAccess) { }

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