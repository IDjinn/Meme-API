import { connect } from 'mongoose';
const config = require('../../config.json');

const db = async () => {
    return await connect(config.mongooseLink, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

export default db;
