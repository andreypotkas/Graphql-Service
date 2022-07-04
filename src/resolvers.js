import { genreResolvers } from './modules/genres/resolvers/resolvers.js';
import { userResolvers } from './modules/users/resolvers/resolvers.js';

export const resolvers = [userResolvers, genreResolvers];
