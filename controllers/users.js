import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  let user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(
    `User with name ${user.firstName} ${user.lastName} is saved in database `
  );
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const SearchUser = users.find((user) => user.id === id);

  res.send(SearchUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const findUser = users.find((user) => user.id === id);

  if (firstName) {
    findUser.firstName = firstName;
  }

  if (lastName) {
    findUser.lastName = lastName;
  }
  if (age) {
    findUser.age = age;
  }

  res.send(`User with id ${id} has been updated`);
};
