import { Server } from '../Server';
import { Request, Response } from 'express';

export default abstract class BaseRoute {
    protected server: Server;
    protected endpoint: string = '/';

    constructor(endpoint?: string) {
        this.endpoint = endpoint == null ? this.endpoint : endpoint;
    }

    public attach(server: Server) {
        this.server = server;
        this.server.app.get(this.endpoint, (req, res) => this.get(req, res));
        this.server.app.post(this.endpoint, (req, res) => this.post(req, res));
        this.server.app.put(this.endpoint, (req, res) => this.put(req, res));
        this.server.app.delete(this.endpoint, (req, res) => this.delete(req, res));
    }

    protected badRequest(res: Response) {
        res.status(404).json({
            title: 'Bad request',
            path: this.endpoint
        });
    }

    protected abstract get(req: Request, res: Response): void;
    protected abstract post(req: Request, res: Response): void;
    protected abstract put(req: Request, res: Response): void;
    protected abstract delete(req: Request, res: Response): void;
}
