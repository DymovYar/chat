import dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../.env' });

interface Config {
    MONGO_URI: string;
    PORT: string;
}

const getConfig = () => {
    const env = {
        MONGO_URI: process.env.MONGO_URI
    };

    for (const [k, v] of Object.entries(env)) {
        if (typeof v === 'undefined') {
            throw new Error(`Missing key ${k} in config.env`);
        }

        return env as Config;
    }
};

const config = getConfig();

export default config;