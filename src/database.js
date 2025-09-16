// Mock database module
const users = [
  {id: 1, username: "amit", password: "1234"},
  {id: 2, username: "john", password: "abcd"}
];

function findUser(username) {
  return users.find(user => user.username === username);
}

module.exports = { users, findUser };
