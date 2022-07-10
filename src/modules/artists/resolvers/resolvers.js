export const artistResolvers = {
  Query: {
    artists: async (_, args, { dataSources }) => {
      return await dataSources.artistAPI.getAllArtists(args);
    },
    artist: async (_, { id }, { dataSources }) => {
      return await dataSources.artistAPI.getArtistById(id);
    },
  },
  Artist: {
    id(parent) {
      return parent._id;
    },
    bands(parent) {
      return parent.bands;
    },
  },
  Mutation: {
    createArtist: async (_, input, { dataSources }) => {
      const data = input.createArtistInput;
      if (data.bandsIds) {
        const bands = async () => {
          const bandsData = data.bandsIds.map((item) =>
            dataSources.bandAPI.getBandById(item)
          );
          return await Promise.all(bandsData);
        };

        data.bands = await bands();
      }

      return await dataSources.artistAPI.createArtist(data);
    },

    updateArtist: async (_, input, { dataSources }) => {
      const bands = async () => {
        const bandsData = input.updateArtistInput.bandsIds.map((item) =>
          dataSources.bandAPI.getBandById(item)
        );
        return await Promise.all(bandsData);
      };

      input.updateArtistInput.bands = await bands();
      return await dataSources.artistAPI.updateArtist(input);
    },

    deleteArtist: async (_, { id }, { dataSources }) => {
      return await dataSources.artistAPI.deleteArtist(id);
    },
  },
};
