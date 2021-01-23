import { User, getUsers } from "./models/user";

export default {
  Query: {
    list: (_: any, { name }: User) => {
      const users = getUsers(name);
      return users;
    },
  },
};
