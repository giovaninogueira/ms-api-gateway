import { messagerBrokerAccess } from "../../providers/messager-broker-access";
import { MessagerBoker } from "../../repositories/messager-broker/messager-broker.repository";
import { SendCreateUserApplication } from "./send-create-user.application";
import { SendCreateUserController } from "./send-create-user.controller";

const messagerBroker = new MessagerBoker(messagerBrokerAccess);
const sendCreateUserApp = new SendCreateUserApplication(messagerBroker);
const sendCreateUserController = new SendCreateUserController(sendCreateUserApp);

export { sendCreateUserApp, sendCreateUserController }