import { connect } from 'mongoose';

const db = async () => {
    return await connect('mongodb+srv://admin:admin@cluster0-hzu4f.gcp.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

export default db;
