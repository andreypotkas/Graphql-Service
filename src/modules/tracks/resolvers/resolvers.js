export const trackResolvers = {
  Query: {
    tracks: async (_, args, { dataSources }) => {
      return await dataSources.trackAPI.getAllTracks(args);
    },
    track: async (_, { id }, { dataSources }) => {
      return await dataSources.trackAPI.getTrackById(id);
    },
  },
  Track: {
    id(parent) {
      return parent._id;
    },
    bands(parent, args, context, info) {
      const bands = async () => {
        const bandsData = parent.bandsIds.map((item) =>
          context.dataSources.bandAPI.getBandById(item)
        );
        return await Promise.all(bandsData);
      };

      return bands();
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
    createTrack: async (_, input, { dataSources }) => {
      const data = input.createTrackInput;

      return await dataSources.trackAPI.createTrack(data);
    },
    updateTrack: async (_, input, { dataSources }) => {
      return await dataSources.trackAPI.updateTrack(input);
    },

    deleteTrack: async (_, { id }, { dataSources }) => {
      return await dataSources.trackAPI.deleteTrack(id);
    },
  },
};
