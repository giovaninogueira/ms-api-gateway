import { RabbitMQ } from "./rabbit-mq/rabbit-mq.provider";

const messagerBroker = new RabbitMQ();

export { messagerBroker };