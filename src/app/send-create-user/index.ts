
import { RabbitMQ } from "../../providers/messager-broker-access/implementations/rabbit-mq/rabbit-mq.provider";
import { SendCreateUserApplication } from "./send-create-user.application";
import { SendCreateUserController } from "./send-create-user.controller";

const messagerBroker = new RabbitMQ();
const sendCreateUserApp = new SendCreateUserApplication(messagerBroker);
const sendCreateUserController = new SendCreateUserController(sendCreateUserApp);

export { sendCreateUserApp, sendCreateUserController }