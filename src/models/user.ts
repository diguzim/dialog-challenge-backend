// User data type
// Could be improved, knowing which properties could be null/undefined/missing
export interface User {
  _id: string;
  index: number;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  friends?: User;
  greeting?: string; // This looks strange, as the user inside of friends doesn't have it
}

const allUsers: User[] = require("./db.json");

export const getUsers = (name?: string): User[] => {
  if (name) {
    const regExp = new RegExp(name, "i");
    return allUsers.filter((user) => user.name.match(regExp));
  }
  return allUsers;
};
