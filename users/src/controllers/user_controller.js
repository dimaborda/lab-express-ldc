import User from '../models/user.js'; // Adjust the path as necessary
import mongoose from 'mongoose';

class UserController {
  // Create a new user
  async create(req, res) {
	try {
	  const newUser = new User(req.body);
	  const savedUser= await newUser.save();
	  res.status(201).json(savedUser);
	} catch (error) {
	  res.status(400).json({ message: error.message });
	}
  }

  // Retrieve all user
  async findAll(req, res) {
	try {
	  const user = await User.find();
	  res.status(200).json(user);
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  }

  // Retrieve a single user by id
  async findOne(req, res) {
	try {
	  const user = await User.findById(req.params.id);
	  if (!user) {
		return res.status(404).json({ message: 'User not found' });
	  }
	  res.status(200).json(user);
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  }

  // Update a user by id
  async update(req, res) {
	try {
	  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
	  if (!updatedUser) {
		return res.status(404).json({ message: 'User not found' });
	  }
	  res.status(200).json(updatedUser);
	} catch (error) {
	  res.status(400).json({ message: error.message });
	}
  }

  // Delete a User by id
  async delete(req, res) {
	try {
	  const user = await User.findByIdAndRemove(req.params.id);
	  if (!user) {
		return res.status(404).json({ message: 'User not found' });
	  }
	  res.status(200).json({ message: 'User deleted successfully' });
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  }
}

export default new UserController();