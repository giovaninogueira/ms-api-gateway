export interface IMessage {
    message: any;
    queue: string;
}

export interface IResponseMessage {
    code: number,
    body: any
}

export interface IMessagerBroker {
    /**
     * Send Message RPC
     * @param message 
     */
    sendRPC(message: IMessage): Promise<IResponseMessage>;

    /**
     * Send Message Pub-Sub
     * @param message 
     */
    sendPubSub(message: IMessage): Promise<void>;
}