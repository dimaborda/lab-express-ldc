import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName : String,
  // Add other fields as needed
});

export default mongoose.model('user', userSchema);