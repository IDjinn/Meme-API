import { Request, Response } from 'express';
import BaseRoute from './BaseRoute';

export default class MainRoute extends BaseRoute {
    constructor() {
        super('/');
    }

    public get(req: Request, res: Response) {
        return res.send('Hello there!');
    }

    public post(req: Request, res: Response) {
        this.badRequest(res);
    }

    public put(req: Request, res: Response) {
        this.badRequest(res);
    }

    public delete(req: Request, res: Response) {
        this.badRequest(res);
    }
}