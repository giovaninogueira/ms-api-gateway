import { RabbitMQ } from "./rabbit-mq/rabbit-mq.provider";

const messagerBrokerAccess = new RabbitMQ();

export { messagerBrokerAccess };