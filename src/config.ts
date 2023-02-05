export const config = () => ({
    port: Number(process.env.PORT),
    postgres: {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 3001,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        //POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT as string, 10) as number,
        synchronize: true,
        entities: ['dist/**/*.entity{.ts,.js}']
    },
});