const Category = require('./category');
const Query = require('./query');
const Mutation = require('./mutation');

const resolvers = {

    // Un propriété des resolvers correspond à un type du côté du schéma
    Category,

    Query,

    Mutation,

};

module.exports = resolvers;
