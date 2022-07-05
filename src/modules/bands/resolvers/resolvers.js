export const bandResolvers = {
  Query: {
    bands: async (_, __, { dataSources }) => {
      return await dataSources.bandAPI.getAllBands();
    },
    band: async (_, { id }, { dataSources }) => {
      return await dataSources.bandAPI.getBandById(id);
    },
  },
  Band: {
    genres(parent, args, context) {
      return context.dataSources.bandAPI.getGenresByIds(parent, context);
    },
  },
  Mutation: {
    createBand: async (_, createBandInput, { dataSources }) => {
      const genres = await Promise.allSettled(
        createBandInput.createBandInput.genresIds.map((item) => {
          return dataSources.genreAPI.getGenreById(item);
        })
      );
      createBandInput.createBandInput.genres = genres.map((item) => item.value);
      return await dataSources.bandAPI.createBand(
        createBandInput.createBandInput
      );
    },
    updateBand: async (_, { id, updateBandInput }, { dataSources }) => {
      const genres = await Promise.allSettled(
        updateBandInput.genresIds.map((item) => {
          return dataSources.genreAPI.getGenreById(item);
        })
      );

      updateBandInput.genres = genres.map((item) => item.value);

      return await dataSources.bandAPI.updateBand(id, updateBandInput);
    },

    deleteBand: async (_, { id }, { dataSources }) => {
      return await dataSources.bandAPI.deleteBand(id);
    },
  },
};
