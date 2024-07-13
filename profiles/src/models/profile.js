import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  profileName : String,
  roll: String,
  // Add other fields as needed
});

export default mongoose.model('Profile', profileSchema);