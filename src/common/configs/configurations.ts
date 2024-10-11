export default () => ({
    port: +process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
    dbStorage: process.env.DB_STORAGE
});