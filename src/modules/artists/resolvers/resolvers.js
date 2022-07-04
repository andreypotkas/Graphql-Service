export const artistResolvers = {
  Query: {
    bands: async (_, __, { dataSources }) => {
      return await dataSources.ArtistAPI.getAllArtists();
    },
    band: async (_, { id }, { dataSources }) => {
      return await dataSources.bandAPI.getArtistById(id);
    },
  },
  Mutation: {
    createArtist: async (_, createArtistInput, { dataSources }) => {
      return await dataSourcArtist.createArtist(
        createArtistInput.createArtistInput
      );
    },
    updateArtist: async (_, { id, updateArtistInput }, { dataSources }) => {
      return await dataSources.artistAPI.updateArtist(id, updateArtistInput);
    },

    deleteArtist: async (_, { id }, { dataSources }) => {
      return await dataSources.artistAPI.deleteartist(id);
    },
  },
};
