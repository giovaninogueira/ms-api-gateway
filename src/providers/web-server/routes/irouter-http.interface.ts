import express from "express";

export interface IRouterHttp {
    handle(router: express.Router): void
}