import { IMessagerAccess, IMessagerBrokerAccess } from "../imessager-broker-access.interface";

export class RabbitMQ implements IMessagerBrokerAccess{
    /**
     * Connect with messager broker
     */
    async connect(): Promise<any> {

    }

    /**
     * Create
     * @param channel 
     * @param queue 
     */
    async createQueue(channel: any, queue: string): Promise<any> {
        return null;
    }

    /**
     * Send Pub/Sub
     * @param queue 
     */
    async sendPubSub(message: IMessagerAccess): Promise<any> {
        return null;
    }
}