export default {
    port: process.env["PORT"] ?? '4000',
    grpcHost: process.env["HELLO_HOST"] ?? 'localhost:8900'
};
