import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { typeDefs } from './typeDefs.js';
import 'dotenv/config';
import { userAPI } from './modules/users/api/user.api.js';
import { resolvers } from './resolvers.js';
import { genreAPI } from './modules/genres/api/genre.api.js';
import { bandAPI } from './modules/bands/api/band.api.js';
import { artistAPI } from './modules/artists/api/artist.api.js';
import { trackAPI } from './modules/tracks/api/tracks.api.js';

async function startApolloServer(typeDefs, resolvers) {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        userAPI: new userAPI(),
        genreAPI: new genreAPI(),
        bandAPI: new bandAPI(),
        artistAPI: new artistAPI(),
        trackAPI: new trackAPI(),
      };
    },
    context: ({ req }) => ({
      config: {
        headers: {
          Authorization: req.headers.authorization || '',
        },
      },
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

startApolloServer(typeDefs, resolvers);
