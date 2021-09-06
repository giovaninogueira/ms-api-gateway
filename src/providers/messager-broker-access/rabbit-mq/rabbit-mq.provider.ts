import { IMessagerAccess, IMessagerBrokerAccess, IResponseAccess } from "../imessager-broker-access.interface";
import amqp from "amqplib";
import { v4 as uuidv4 } from 'uuid';

export class RabbitMQ implements IMessagerBrokerAccess {

    private url: string = 'amqp://guest:guest@localhost:5672';

    /**
     * Connect with messager broker
     */
    async connect(): Promise<any> {
        return amqp.connect(this.url).then(conn => conn.createChannel());
    }

    /**
     * Create
     * @param channel 
     * @param queue 
     */
    async createQueue(channel: any, queue: string): Promise<any> {
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
     * Send Pub/Sub
     * @param queue 
     */
    async sendPubSub(message: IMessagerAccess): Promise<any> {
        return this.connect()
            .then(channel => this.createQueue(channel, message.queue))
            .then(channel =>
                channel.sendToQueue(
                    message.queue,
                    Buffer.from(JSON.stringify(message)),
                ),
            )
            .catch(err => console.log(err));
    }

    /**
     * Send RPC
     * @param message 
     */
    async sendRPC(message: IMessagerAccess): Promise<IResponseAccess> {
        const timeout = 5000;

        return new Promise(async (resolve, reject) => {

            // uuidv4
            let isRespond = false;
            const corr = uuidv4();

            const conn = await amqp.connect(this.url);
            const ch = await conn.createChannel();
            await ch.assertQueue(message.queue, { durable: true })
            const q = await ch.assertQueue('', { exclusive: true });

            // Send to message queue
            ch.sendToQueue(
                message.queue,
                Buffer.from(JSON.stringify(message.message)), {
                correlationId: corr,
                replyTo: q.queue
            });

            // listen responde of queue
            ch.consume(q.queue, (msg: any) => {
                if (msg.properties.correlationId === corr) {
                    const messageResponse = this.messageConvert(msg);
                    setTimeout(function () {
                        conn.close();
                    }, 500);
                    isRespond = true;
                    return resolve(messageResponse);
                }
            }, {
                noAck: true
            });

            // close connection before of X seconds
            setTimeout(function () {
                if (!isRespond) {
                    conn.close();
                    resolve({
                        code: 408,
                        response: {
                            message: 'Timeout'
                        }
                    });
                }
            }, timeout);
            // before X seconds
        })
    }
    
    /**
     * Convert Message
     * @param message 
     * @returns 
     */
    messageConvert(message: any): IResponseAccess {
        const messageResponse: IResponseAccess = {
            code: 200,
            response: {
                message: 'Ok'
            }
        };
        let result = null;
        try {
            result = JSON.parse(message.content.toString());
            messageResponse.code = result.code;
            messageResponse.response = result.response;
        } catch (e) {
            result = message.content.toString();
            messageResponse.code = 500;
            messageResponse.response = result;
        }
        return messageResponse;
    }
}