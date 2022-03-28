require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const debug = require('debug')('graphql:server');

const app = require('./app');

const PORT = process.env.PORT ?? 4000;

const server = new ApolloServer();

server.listen(PORT).then(({url}) => {
    debug(`🚀 Server ready at ${url}`);
});