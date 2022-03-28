const { gql } = require('apollo-server');
const { readFileSync } = require('fs');
const path = require('path');

const category = readFileSync(path.join(__dirname, './category.gql'));
const movie = readFileSync(path.join(__dirname, './movie.gql'));

const typeDefs = gql`
    ${category}
    ${movie}

    type Query {
        # Maintenant dans le type Query, je peux utiliser le type d'entité (ou type complexe) que l'on a créer précédemment
        # Ici on retounre une liste de categories
        "Liste de toutes les catégories"
        getAllCategories: [Category]

        # Afin de personaliser la récupération d'une entité, on peut fournir à la requête GraphQL des arguments
        # Ces arguments sont typés, et peuvent être rendu obligatoire grâce au symbole !
        getMovie(id: Int!): Movie
    }
`;

module.exports = typeDefs;
