export interface IMessagerAccess {
    queue: string;
    message: any;
}

export interface IMessagerBrokerAccess {
    /**
     * Connect with messager broker
     */
    connect(): Promise<any>;

    /**
     * Create Queue
     * @param channel 
     * @param queue 
     */
    createQueue(channel: any, queue: string): Promise<any>;

    /**
     * Send Pub/Sub
     * @param message 
     */
    sendPubSub(message: IMessagerAccess): Promise<any>;
}