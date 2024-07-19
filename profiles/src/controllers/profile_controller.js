import Profile from '../models/profile.js'; // Adjust the path as necessary
import mongoose from 'mongoose';

class ProfileController {
  // Create a new profile
  async create(req, res) {
	try {
	  const newProfile = new Profile(req.body);
	  const savedProfile = await newProfile.save();
	  res.status(201).json(savedProfile);
	} catch (error) {
	  res.status(400).json({ message: error.message });
	}
  }

  // Retrieve all profiles
  async findAll(req, res) {
	try {
	  const profiles = await Profile.find();
	  res.status(200).json(profiles);
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  }

  // Retrieve a single profile by id
  async findOne(req, res) {
	try {
	  const profile = await Profile.findById(req.params.id);
	  if (!profile) {
		return res.status(404).json({ message: 'Profile not found' });
	  }
	  res.status(200).json(profile);
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  }

  // Update a profile by id
  async update(req, res) {
	try {
	  const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
	  if (!updatedProfile) {
		return res.status(404).json({ message: 'Profile not found' });
	  }
	  res.status(200).json(updatedProfile);
	} catch (error) {
	  res.status(400).json({ message: error.message });
	}
  }

  // Delete a profile by id
  async delete(req, res) {
	try {
	  const profile = await Profile.findByIdAndRemove(req.params.id);
	  if (!profile) {
		return res.status(404).json({ message: 'Profile not found' });
	  }
	  res.status(200).json({ message: 'Profile deleted successfully' });
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  }
}

export default new ProfileController();