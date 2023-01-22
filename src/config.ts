import * as process from 'process';
import * as dotenv from 'dotenv';

dotenv.config({path: __dirname + '/.env'});

const isRequired = (propName: string): never => {
    throw new Error(`Config property ${propName} is required`);
};

class Config {
    db = {
        POSTGRES_USER: process.env.POSTGRES_USER ?? isRequired('POSTGRES_USER'),
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD ?? isRequired('POSTGRES_PASSWORD'),
        POSTGRES_DB: process.env.POSTGRES_DB ?? isRequired('POSTGRES_DB'),
        POSTGRES_PORT: process.env.POSTGRES_PORT ?? isRequired('POSTGRES_PORT'),
    };
}

export const config = new Config();