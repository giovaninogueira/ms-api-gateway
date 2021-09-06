import { IMessagerBrokerAccess } from "../../providers/messager-broker-access/imessager-broker-access.interface";
import { IMessage, IMessageResponse } from "./imessager-broker.interface";

export class MessagerBoker {

    constructor(
        private readonly messagerBroker: IMessagerBrokerAccess
    ) {}

    /**
     * Messager Broker RPC
     * @param message 
     */
    async sendRPC(message: IMessage): Promise<IMessageResponse> {
        return await this.messagerBroker.sendRPC(message);
    }

    /**
     * Send Pub/Sub
     * @param message 
     */
    async sendPubSub(message: IMessage): Promise<void> {
        await this.messagerBroker.sendPubSub(message);
    }
}