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
  User: {
    id(parent) {
      return parent._id;
    },
  },
  Mutation: {
    createUser: async (_, data, { dataSources }) => {
      return await dataSources.userAPI.createUser(data.createUserInput);
    },
  },
};
