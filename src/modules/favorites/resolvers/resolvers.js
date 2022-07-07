export const favouriteResolvers = {
  Query: {
    favourites: async (_, __, { dataSources }) => {
      return await dataSources.favouriteAPI.getAllFavourites();
    },
  },

  FavouriteGenres: {
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
  FavouriteArtists: {
    id(parent) {
      return parent._id;
    },

    artists(parent, args, context) {
      const artists = async () => {
        const artistsData = parent.artistsIds.map((item) =>
          context.dataSources.artistAPI.getArtistById(item)
        );
        return await Promise.all(artistsData);
      };

      return artists();
    },
  },
  FavouriteBands: {
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
      console.log(bands());
      return bands();
    },
  },
  FavouriteTracks: {
    id(parent) {
      return parent._id;
    },

    tracks(parent, args, context) {
      const tracks = async () => {
        const tracksData = parent.tracksIds.map((item) =>
          context.dataSources.trackAPI.getTrackById(item)
        );
        return await Promise.all(tracksData);
      };

      return tracks();
    },
  },

  Favourites: {
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
        const tracksData = parent.tracksIds.map((item) =>
          context.dataSources.trackAPI.getTrackById(item)
        );
        return await Promise.all(tracksData);
      };

      return tracks();
    },
  },
  Mutation: {
    addTrackToFavourites: async (_, input, { dataSources }) => {
      return await dataSources.favouriteAPI.addTrackToFavourites(input);
    },
    addBandToFavourites: async (_, input, { dataSources }) => {
      return await dataSources.favouriteAPI.addBandToFavourites(input);
    },
    addGenreToFavourites: async (_, input, { dataSources }) => {
      return await dataSources.favouriteAPI.addGenreToFavourites(input);
    },
    addArtistToFavourites: async (_, input, { dataSources }) => {
      return await dataSources.favouriteAPI.addArtistToFavourites(input);
    },
  },
};
