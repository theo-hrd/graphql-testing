const { gql } = require('apollo-server');

const typeDefs = gql`
    # ICI NOUS NE SOMMES PLUS DANS DU JAVASCRIPT
    # C'est le langage partculier de GraphQL

    # Dans la définition d'un type complexe
    # - On précise la liste des propriété de cette entité
    # - Le type des ces propriétés
    # - Ainsi que l'obligation de présence des ceux-ci avec le signe "!" juste après le type
    type Category {
        id: Int!
        label: String!
        created_at: String
        updated_at: String
        movies: [Movie]
    }

    type Movie {
        id: Int!
        image: String!
        title: String!
        description: String
        release_year: Int!
        directors: String
        countries: String
        imdb_id: String!
        created_at: String!
        updated_at: String
    }

    type Query {
        # maintenant dans le type Query, je peux utiliser le type d'entité (ou type complexe) Category que l'on a crée plus haut
        # ici on retourne une liste de categories
        "Liste de toutes les catégories"
        getAllCategories: [Category]
        getMovie: [String]
    }
`;

module.exports = typeDefs;
