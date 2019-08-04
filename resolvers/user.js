module.exports = {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.all();
    },
    user: async (parent, { username }, { models }) => {
      return await models.User.get(username);
    }
  },

  Mutation: {
    createUser: async (parent, { username, first_name, last_name }, { models }) => {
      return await models.User.create({
        username, 
        first_name, 
        last_name
      });
    }
  },

  User: {
    messages: async (user, args, { models }) => {
      return await models.Message.all({
        where: {
          username: user.username
        }
      });
    }
  }
};
