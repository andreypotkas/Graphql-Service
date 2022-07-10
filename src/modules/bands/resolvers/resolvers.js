export const bandResolvers = {
  Query: {
    bands: async (_, args, { dataSources }) => {
      return await dataSources.bandAPI.getAllBands(args);
    },
    band: async (_, { id }, { dataSources }) => {
      return await dataSources.bandAPI.getBandById(id);
    },
  },
  Band: {
    id(parent) {
      return parent._id;
    },
    genres(parent, args, context) {
      const genres = async () => {
        const genresData = parent.genresIds.map((item) =>
          context.dataSources.genreAPI.getGenreById(item)
        );
        return await Promise.all(genresData);
      };

      return genres();
    },
  },
  Mutation: {
    createBand: async (_, data, { dataSources }) => {
      return await dataSources.bandAPI.createBand(data.createBandInput);
    },
    updateBand: async (_, data, { dataSources }) => {
      return await dataSources.bandAPI.updateBand(data);
    },

    deleteBand: async (_, { id }, { dataSources }) => {
      return await dataSources.bandAPI.deleteBand(id);
    },
  },
};
