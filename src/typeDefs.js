import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';

export const typeDefs = await loadSchema('src/modules/**/*.graphql', {
  // load files and merge them into a single schema object
  loaders: [new GraphQLFileLoader()],
});
