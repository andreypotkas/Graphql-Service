export const bandResolvers = {
  Query: {
    bands: async (_, __, { dataSources }) => {
      return await dataSources.bandAPI.getAllBands();
    },
    band: async (_, { id }, { dataSources }) => {
      return await dataSources.bandAPI.getBandById(id);
    },
  },
  Mutation: {
    createBand: async (_, createBandInput, { dataSources }) => {
      return await dataSources.bandAPI.createBand(
        createBandInput.createBandInput
      );
    },
    updateBand: async (_, { id, updateBandInput }, { dataSources }) => {
      return await dataSources.bandAPI.updateBand(id, updateBandInput);
    },

    deleteBand: async (_, { id }, { dataSources }) => {
      return await dataSources.bandAPI.deleteBand(id);
    },
  },
};
