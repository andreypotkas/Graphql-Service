# Graphql-Service

## Description

:alien::pencil: Imagine we have a couple of microservices that is created for the service Musicify, a new wikipedia for Music. We need to provide a confortable and convinient service for our users for managing and retrieving data for different entities.
Graphql service use following dependencies:

- graphql
- nodejs express
- apollo-server-core
- apollo-server-express
- apollo-datasource-rest

## Installation

1. Clone/download repo
2. `npm install`
3. `npm run start`
4. `open http://localhost:3000/graphql and click btn "Query your server"`
   Also you need to download, install and run all microservices.

## First steps

1. `register user (Mutation createUser)`
   ![Безымянный](https://user-images.githubusercontent.com/76698289/178155532-9f26795c-d102-40ee-ad09-bd6bba942a5b.png)

2. `login user to get JWT (Query jwt)`

![Безымянный](https://user-images.githubusercontent.com/76698289/178155602-c128caa8-fa6d-4fda-befb-52967af9fa8c.png)

3. `put JWT to request headers:

   ![Безымянный](https://user-images.githubusercontent.com/76698289/177865760-b65ee442-d4f1-44f9-9ed3-6529ce0fe978.png)

Great! Now you can use all other queries and mutations.
