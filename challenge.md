# O'scar GraphQL API - Ajout de données


Aujourd'hui nous avons vu comment récupérer des données grâce à GraphQL. Mais une API qui se respecte doit également permettre d'ajouter, mettre à jour et supprimer des données.

Et bien une API GraphQL peut bien évidemment s'en charger. Mais pour cela vous allez devoir le découvrir par vous-même comment mettre en place celà !

## Étape 0 : Préparation de l'environnement de travail

### Création de la BDD

Si ce n'est pas déjà fait il va, tout d'abord, falloir créer la BDD.

Si vous avez configuré un utilisateur par défaut vous pouvez utiliser `npm run initDB`.

Sinon créez votre BDD, et son propriétaire, avec le nom `oscar` et lancer le script `npm run resetDB`.

Si votre environnement ne vous permet pas d'exécuter la commande, passez en utilisateur `postgres` grâce à la commande `sudo -i -u postgres`

*Au passage si l'envie vous en prend, vous pouvez allez regarder le script de seeding `./data/generateMovieSeeding.js`. Cela peut être instructif.*

### Lancement du serveur

Afin de pouvoir tester votre API en mode developpement : `npm run dev`

### Test de l'API

RDV sur la page de bac à sable de Apollo de l'application web `/` ou sur le fichier `./test.http`, si vous possédez l'extension VScode "REST client"

## Étape 1 : Récolte d'informations

Votre but étant de faire quelque chose que vous n'avez jamais fait jusqu'à maintenant, le mieux c'est d'explorer la [documentation d'Apollo](https://www.apollographql.com/docs/) ou bien de demander à Google ce qu'il peut bien avoir référencé dans ses résultats pour vous aider.

## Étape 2 : Fonctionnalités

Dans notre API RESTful il y avait 3 fonctionnalités principales permettant d'intéragir avec l'application.

- **S'inscrire**
- **Ajouter un film à la sélection**
- *Ajouter une critique de film*

Implémenter les 2 premières fonctionnalités dans la version GraphQL

<details>
<summary>Indice</summary>
GraphQL est une API très organique, le terme utilisé pour modifier des données doit être le terme utiliser en biologie pour décrire un changement cellulaire d'une entité.
</details>

## Étape 3 : Communication

Lorsqu'un client fait une requête, il attend de votre part une réponse positive, ou négative à sa demande. À vous de voir comment vous pourriez lui répondre au mieux en fonction, de si vous avez pu répondre à sa requête.

<details>
<summary>Indice</summary>
Attention, on se trouve dans une API GraphQL, donc la réponse doit être configurable par le client. (On aurai pas déjà vu ça ?)
</details>

## BONUS :cactus:

Implémenter la dernière fonctionnalité : "Ajouter une critique de film"

Pour cela vous allez devoir ajouter l'authentification à votre API GraphQL.
Le principe est basiquement le même qu'avec l'API RESTful, donc n'hesitez pas à vous en inspirer largement !

<details>
<summary>Indice</summary>

### Schéma

1. Ajouter un nouveau type `UserConnected` (Sécurité oblige) qui permettra de retourner le token et la durée de vie d'un utilisateur en plus des données habituelles.
2. Ajouter un nouveau `Query`, dans le schema permettant de se connecter et de retourner le nouveau type UserConnected en cas de succès

### Resolver

1. Créer le "resolver" nécessaire, celui-ci doit vous permettre de créer un JWT (JSON Web Token)
2. Il faudra utiliser ce JWT sur leS fonctionnalités d'ajout (Remarquez le S majuscules), et vérifier que l'utilisateur est bien connecté.

</details>
