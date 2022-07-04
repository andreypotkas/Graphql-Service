export const userResolvers = {
  Query: {
    jwt: async (_, { email, password }, { dataSources }) => {
      return await dataSources.userAPI.getJWT(email, password);
    },
    userById: async (_, { id }, { dataSources }) => {
      return await dataSources.userAPI.getUserById(id);
    },

    verify: async (_, {}, { dataSources }) => {
      return await dataSources.userAPI.verify();
    },
  },
  Mutation: {
    createUser: async (
      _,
      { firstName, lastName, email, password },
      { dataSources }
    ) => {
      return await dataSources.userAPI.createUser(
        firstName,
        lastName,
        email,
        password
      );
    },
  },
};
