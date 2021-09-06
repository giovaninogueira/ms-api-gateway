export interface IMessagerBrokerAccessData {
    queue: string;
    message: any;
}

export interface IMessagerBrokerAccess {
    /**
     * Connect with messager broker
     */
    connect(): Promise<any>;

    /**
     * Send RPC
     * @param objMessage 
     */
    sendRPC(objMessage: IMessagerBrokerAccessData): Promise<any>;

    /**
     * Create Queue
     * @param channel 
     * @param queue 
     */
    createQueue(channel: any, queue: string): Promise<any>;

    /**
     * Send Pub/Sub
     * @param objMessage 
     */
    sendPubSub(objMessage: IMessagerBrokerAccessData): Promise<void>
}