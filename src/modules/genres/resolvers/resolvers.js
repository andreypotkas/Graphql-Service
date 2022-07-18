export const genreResolvers = {
  Query: {
    genres: async (_, data, { dataSources }) => {
      return await dataSources.genreAPI.getAllGenres(data);
    },
    genre: async (_, { id }, { dataSources }) => {
      return await dataSources.genreAPI.getGenreById(id);
    },
  },
  Genre: {
    id(parent) {
      return parent._id;
    },
  },
  Mutation: {
    createGenre: async (_, data, { dataSources }) => {
      return await dataSources.genreAPI.createGenre(data.createGenreInput);
    },
    updateGenre: async (_, data, { dataSources }) => {
      return await dataSources.genreAPI.updateGenre(data);
    },

    deleteGenre: async (_, { id }, { dataSources }) => {
      return await dataSources.genreAPI.deleteGenre(id);
    },
  },
};
