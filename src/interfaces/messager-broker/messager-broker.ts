import { IMessagerBrokerAccess } from "../../infraestructure/messager-broker-access/implementations/imessager-broker-access";
import { IMessage, IMessagerBroker, IResponseMessage } from "./imessager-broker";

export class MessagerBroker implements IMessagerBroker {

    constructor(
        private readonly messageBroker: IMessagerBrokerAccess
    ) {}

    /**
     * Send Messager RPC
     * @param message 
     * @returns 
     */
    async sendRPC(message: IMessage): Promise<IResponseMessage> {
        return {
            code: 400,
            body: 'oii'
        };
    }

    /**
     * Send Push Pub/Sub
     * @param message 
     */
    async sendPubSub(message: IMessage): Promise<void> {
        await this.messageBroker.sendPubSub(message);
    }
}