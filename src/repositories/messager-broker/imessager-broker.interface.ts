export interface IMessage {
    queue: string;
    message: any;
}

export interface IMessageResponse {
    code: number;
    response: any;
}

export interface IMessagerBroker {
    /**
     * Send RPC
     * @param message 
     */
    sendRPC(message: IMessage): Promise<IMessageResponse>;

    /**
     * Send Pub/Sub
     * @param message 
     */
    sendPubSub(message: IMessage): Promise<void>;
}