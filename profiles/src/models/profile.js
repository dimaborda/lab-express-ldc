import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  profileName : { type :  String, required : true, unique: true} ,
  roll: String,
  active : { type : Boolean, default : true },
  role: { type: Number, enum: [0, 1, 2], required: true },
  // Add other fields as needed
},{ timestamps: {  } } );
// role: { type: String, enum: ['admin', 'user'], default: 'user' },
export default mongoose.model('Profile', profileSchema);