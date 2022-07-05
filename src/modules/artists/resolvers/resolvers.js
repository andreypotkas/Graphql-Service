export const artistResolvers = {
  Query: {
    artists: async (_, __, { dataSources }) => {
      return await dataSources.artistAPI.getAllArtists();
    },
    artist: async (_, { id }, { dataSources }) => {
      return await dataSources.artistAPI.getArtistById(id);
    },
  },
  Artist: {
    bands(parent) {
      return parent.bands;
    },
  },
  Mutation: {
    createArtist: async (_, input, { dataSources }) => {
      const data = input.createArtistInput;

      // Get bands if exists bandsIds
      if (data.bandsIds) {
        await dataSources.artistAPI.getBandsByIds(dataSources, data);
      }

      return await dataSources.artistAPI.createArtist(data);
    },
    updateArtist: async (_, { id, updateArtistInput }, { dataSources }) => {
      const data = updateArtistInput;

      // Get bands if exists bandsIds
      if (data.bandsIds) {
        await dataSources.artistAPI.getBandsByIds(dataSources, data);
      }
      return await dataSources.artistAPI.updateArtist(id, data);
    },

    deleteArtist: async (_, { id }, { dataSources }) => {
      return await dataSources.artistAPI.deleteArtist(id);
    },
  },
};
