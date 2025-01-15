const UserService = require('../models/User'); // Example model import

const UserService = {
  createUser: async (userData) => {
    const user = new UserService(userData);
    return await user.save();
  },

  getUserById: async (userId) => {
    return await UserService.findById(userId);
  },

  updateUser: async (userId, updateData) => {
    return await UserService.findByIdAndUpdate(userId, updateData, { new: true });
  },

  deleteUser: async (userId) => {
    return await UserService.findByIdAndDelete(userId);
  },

  getAllUsers: async () => {
    return await UserService.find();
  }
};

module.exports = UserService;