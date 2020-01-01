import mongoose from 'mongoose';
import config from './config.json';

const db_url = config.db_url;

if (!db_url) {
	throw 'Please check config.json!';
}

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
	console.info('MongoDB connected!');
});

export default mongoose;
