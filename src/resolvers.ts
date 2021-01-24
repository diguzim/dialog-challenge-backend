import { User, getUsers } from "./models/user";

export default {
  Query: {
    list: (_: any, { name, _id }: User) => {
      const users = getUsers(_id, name);
      return users;
    },
  },
};
