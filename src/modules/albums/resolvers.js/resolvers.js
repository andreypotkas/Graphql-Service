export const albumResolvers = {
  Query: {
    albums: async (_, __, { dataSources }) => {
      return await dataSources.albumAPI.getAllAlbums();
    },
    album: async (_, { id }, { dataSources }) => {
      return await dataSources.albumAPI.getAlbumById(id);
    },
  },
  Album: {
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
    artists(parent, args, context) {
      console.log(parent);
      const artists = async () => {
        const artistsData = parent.artistsIds.map((item) =>
          context.dataSources.artistAPI.getArtistById(item)
        );
        return await Promise.all(artistsData);
      };

      return artists();
    },
    tracks(parent, args, context) {
      const tracks = async () => {
        const tracksData = parent.trackIds.map((item) =>
          context.dataSources.trackAPI.getTrackById(item)
        );
        return await Promise.all(tracksData);
      };

      return tracks();
    },
  },
  Mutation: {
    createAlbum: async (_, input, { dataSources }) => {
      const data = input.createAlbumInput;
      data.artistsIds = data.artistsIds[0];
      return await dataSources.albumAPI.createAlbum(data);
    },
    updateAlbum: async (_, input, { dataSources }) => {
      data.updateAlbumInput.artistsIds = data.updateAlbumInput.artistsIds[0];
      return await dataSources.albumAPI.updateAlbum(input);
    },

    deleteAlbum: async (_, { id }, { dataSources }) => {
      return await dataSources.albumAPI.deleteAlbum(id);
    },
  },
};
