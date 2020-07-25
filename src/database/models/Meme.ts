import * as mongoose from 'mongoose';

export interface IMeme {
    _id: string;
    likes: number;
    category: string;
}

const memeSchema = new mongoose.Schema<IMeme>({
    likes: {
        type: Number,
        default: 0
    },
    category: {
        type: Number,
        default: 0
    },
    fileType: {
        type: Number,
        default: 0
    }
});

export enum FileType {
    PNG,
    JPG
}

export default mongoose.model('Memes', memeSchema);