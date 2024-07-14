import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  transactionName : String,
  // Add other fields as needed
});

export default mongoose.model('transaction', transactionSchema);