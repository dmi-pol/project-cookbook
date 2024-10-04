const { User } = require("../db/models");

class UserService {
  static async getUserByEmail(email) {
    try {
      return await User.findOne({ where: { email } });
    } catch (error) {
      return error;
    }
  }

  static async createUser(data) {
    // console.log(data, "===")
    try {
      return await User.create(data);
    } catch (error) {
      return error;
    }
  }
}

module.exports = UserService;
