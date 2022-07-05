export const genreResolvers = {
  Query: {
    genres: async (_, __, { dataSources }) => {
      return await dataSources.genreAPI.getAllGenres();
    },
    genre: async (_, { id }, { dataSources }) => {
      return await dataSources.genreAPI.getGenreById(id);
    },
  },

  Mutation: {
    createGenre: async (
      _,
      { name, description, country, year },
      { dataSources }
    ) => {
      return await dataSources.genreAPI.createGenre(
        name,
        description,
        country,
        year
      );
    },
    updateGenre: async (
      _,
      { id, name, description, country, year },
      { dataSources }
    ) => {
      return await dataSources.genreAPI.updateGenre(
        id,
        name,
        description,
        country,
        year
      );
    },

    deleteGenre: async (_, { id }, { dataSources }) => {
      return await dataSources.genreAPI.deleteGenre(id);
    },
  },
};
