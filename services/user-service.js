'use strict';

module.exports = function UserService(username, password) {
  return !! username && !! password;
};
