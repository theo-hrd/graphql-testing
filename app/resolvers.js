const category = require('./models/category');
const movie = require('./models/movie');

const resolvers = {


    Category: {            
        // Une méthode du resolver correspond à une des propriétés du schéma
        // Pour une category la valeur de Movie n'est pas en dans la table de BDD "category",
        //  contrairement a l'ensemble des autres propriétés du schéma
        // On doit donc spécifier à travers les resolvers comment récupérer ces infos
        async movies(parent) {
            // Le premier parmamètre disponible dans les méthodes de resolvers contient / ou pas, l'entité parente qui utilise cet méthode
            // Ici on se trouve dans l'entité "Category", donc parent === category courante.
            const movies = await movie.findByCategory(parent.id);
            return movies;
        }
    },


    Query: {
        async getAllCategories() {
            const categories = await category.findAll();
            return categories;
        },

        async getMovie() {
            return ['movie1', 'movie2', 'movie3'];
        }
    }
    
}

module.exports = resolvers;