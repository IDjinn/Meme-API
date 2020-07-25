import connectDatabase from './database/Mongo';
import express, { Express, Response, Request } from 'express';
import bodyParser from 'body-parser';
import Meme from './database/models/Meme';

connectDatabase();
const app = express();

app.use('/public', express.static('public'));

app.get('/', (req: Request, res: Response) => {
    return res.json({ hello: "world!" });
});

app.get('/memes/random', async (req: Request, res: Response) => {
    const meme = Array.from(await Meme.aggregate([{ $sample: { size: 1 } }]))[0];
    return res.redirect(`/public/${meme._id}.${meme.fileType === 0 ? 'png' : 'jpg'}`);
});
/*
app.get('/memes/category/:category', async (req: Request, res: Response) => {
    const meme = Array.from(await Meme.aggregate([{ $sample: { size: 1 } }]))[0];
    return res.redirect(`/public/${meme._id}.${meme.fileType === 0 ? 'png' : 'jpg'}`);
});

app.post('/memes/:meme', (req: Request, res: Response) => {
    
});
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(3000);
console.log('Server listen at port 3000.');