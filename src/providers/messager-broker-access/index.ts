import { IRouterMessageBroker } from "./implementations/imessager-broker-access.interface";
import { RabbitMQ } from "./implementations/rabbit-mq/rabbit-mq.provider";

const listQueuesListen: Array<IRouterMessageBroker> = [];

const app = {
    listen: (callback: CallableFunction) => {
        const messagerBrokerAccess = new RabbitMQ();
        listQueuesListen.map((queueListeb) => {
            queueListeb.handle(messagerBrokerAccess);
        })
        callback();
    }
}

export { app };