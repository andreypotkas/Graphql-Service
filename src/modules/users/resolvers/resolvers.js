export const userResolvers = {
  Query: {
    jwt: async (_, { email, password }, { dataSources }) => {
      return await dataSources.userAPI.getJWT(email, password);
    },
    userById: async (_, { id }, { dataSources }) => {
      return await dataSources.userAPI.getUserById(id);
    },
    signup: async (
      _,
      { firstName, lastName, email, password },
      { dataSources }
    ) => {
      return await dataSources.userAPI.signup(
        firstName,
        lastName,
        email,
        password
      );
    },
  },
};
