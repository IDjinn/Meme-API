import BaseRoute from '../BaseRoute';
import { Request, Response } from 'express';
import Meme from '../../database/models/Meme';

export default class RandomRoute extends BaseRoute {
    constructor() {
        super('/memes/random');
    }

    public async get(req: Request, res: Response) {
        const meme = Array.from(await Meme.aggregate([{ $sample: { size: 1 } }]))[0];
        return res.redirect(`/public/${meme._id}.${meme.fileType === 0 ? 'png' : 'jpg'}`);
    }

    public post(req: Request, res: Response) {
        super.badRequest(res);
    }

    public put(req: Request, res: Response) {
        super.badRequest(res);
    }

    public delete(req: Request, res: Response) {
        super.badRequest(res);
    }
}