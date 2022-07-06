export const trackResolvers = {
  Query: {
    tracks: async (_, __, { dataSources }) => {
      return await dataSources.trackAPI.getAllTracks();
    },
    track: async (_, { id }, { dataSources }) => {
      return await dataSources.trackAPI.getTrackById(id);
    },
  },
  Track: {
    bands(parent, args, context, info) {
      console.log(parent);
      return context.dataSources.trackAPI.getBandsByIds(parent, context);
    },
    genres(parent, args, context) {
      return context.dataSources.trackAPI.getGenresByIds(parent, context);
    },
  },
  Mutation: {
    createTrack: async (_, input, { dataSources }) => {
      const data = input.createTrackInput;

      return await dataSources.trackAPI.createTrack(data);
    },
    updateTrack: async (_, { id, updateTrackInput }, { dataSources }) => {
      const data = updateTrackInput;
      console.log(data);
      return await dataSources.trackAPI.updateTrack(id, data);
    },

    deleteTrack: async (_, { id }, { dataSources }) => {
      return await dataSources.trackAPI.deleteTrack(id);
    },
  },
};
