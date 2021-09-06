import { MessagerBroker } from "../../interfaces/messager-broker/messager-broker";
import { MessagerBrokerAccess } from "./implementations/messager-broker-access";

const messagerBrokerAccess = new MessagerBrokerAccess();
const messagerBroker = new MessagerBroker(messagerBrokerAccess);

export { messagerBrokerAccess, messagerBroker };