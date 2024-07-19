import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  profileName : String,
  roll: String,
  // Add other fields as needed
});

export default mongoose.model('Profile', profileSchema);