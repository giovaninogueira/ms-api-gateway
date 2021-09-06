import { IMessagerBrokerAccess, IMessagerBrokerAccessData } from "./imessager-broker-access";
import amqplib from "amqplib";

export class MessagerBrokerAccess implements IMessagerBrokerAccess {

    public channel: any;

    /**
     * Conenect
     * @returns 
     */
    async connect(): Promise<any> {
        this.channel = amqplib
            .connect('amqp://guest:guest@localhost:5672')
            .then(conn => conn.createChannel());
        return this.channel;
    }

    /**
   * Create Queue
   * @param channel 
   * @param queue 
   * @returns 
   */
    createQueue(channel: any, queue: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                channel.assertQueue(queue, { durable: true });
                resolve(channel);
            } catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Send RPC
     * @param objMessage 
     */
    async sendRPC(objMessage: IMessagerBrokerAccessData): Promise<any> {
        return null;
    }

    /**
     * Send Pub/Sub
     * @param objMessage 
     */
    async sendPubSub(objMessage: IMessagerBrokerAccessData): Promise<void> {
        return this.connect()
            .then(channel => this.createQueue(channel, objMessage.queue))
            .then(channel =>
                channel.sendToQueue(
                    objMessage.queue,
                    Buffer.from(JSON.stringify(objMessage.queue)),
                ),
            )
            .catch(err => console.log(err));
    }
}