import { connect } from 'mongoose';
import config from 'config.json';

const db = async () => {
    return await connect(config.mongooseLink, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

export default db;
