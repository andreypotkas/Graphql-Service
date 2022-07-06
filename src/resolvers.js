import { albumResolvers } from './modules/albums/resolvers.js/resolvers.js';
import { artistResolvers } from './modules/artists/resolvers/resolvers.js';
import { bandResolvers } from './modules/bands/resolvers/resolvers.js';
import { genreResolvers } from './modules/genres/resolvers/resolvers.js';
import { trackResolvers } from './modules/tracks/resolvers/resolvers.js';
import { userResolvers } from './modules/users/resolvers/resolvers.js';

export const resolvers = [
  userResolvers,
  genreResolvers,
  bandResolvers,
  artistResolvers,
  trackResolvers,
  albumResolvers,
];
