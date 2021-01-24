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

export const getUsers = (_id?: string, name?: string): User[] => {
  let allUsers: User[] = require("./db.json");
  if (_id) {
    allUsers = allUsers.filter((user) => user._id === _id);
  }
  if (name) {
    const regExp = new RegExp(name, "i");
    allUsers = allUsers.filter((user) => user.name.match(regExp));
  }
  return allUsers;
};
