import { Response } from "express";

export interface MyContext {
    res: Response;
    payload?: { userId: string };
}
