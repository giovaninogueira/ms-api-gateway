import { User } from "../../domain/user";
import { IMessagerBroker, IResponseMessage } from "../../interfaces/messager-broker/imessager-broker";

export class CreateUserApplication {

    /**
     * Create User
     * @param user 
     * @param messagerBroker 
     * @returns 
     */
    async handle(user: User, messagerBroker: IMessagerBroker): Promise<IResponseMessage> {
        const response = await messagerBroker.sendPubSub({
            message: user,
            queue: 'user-create'
        });
        return {
            code: 500,
            body: ''
        };
    }
}