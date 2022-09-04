import express from 'express';
import mongoose from 'mongoose';
import config from './config';

const app = express();

if (config) {
    mongoose.connect(config.MONGO_URI);

    mongoose.connection.on('connected', () => {
        console.log(`DB connection established`);

        app.listen(config?.PORT, () => {
            console.log(`Server is listening`);
        });
    });
}