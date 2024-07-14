import Transaction from '../models/transaction.js'; // Adjust the path as necessary
import mongoose from 'mongoose';

class TransactionController {
  // Create a new Transaction
  async create(req, res) {
	try {
	  const newTransaction = new Transaction(req.body);
	  const savedTransaction= await newTransaction.save();
	  res.status(201).json(savedTransaction);
	} catch (error) {
	  res.status(400).json({ message: error.message });
	}
  }

  // Retrieve all transactions
  async findAll(req, res) {
	try {
	  const transaction = await Transaction.find();
	  res.status(200).json(transaction);
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  }

  // Retrieve a single Transaction by id
  async findOne(req, res) {
	try {
	  const transaction = await Transaction.findById(req.params.id);
	  if (!transaction) {
		return res.status(404).json({ message: 'transaction not found' });
	  }
	  res.status(200).json(transaction);
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  }

  // Update a transaction by id
  async update(req, res) {
	try {
	  const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
	  if (!updatedTransaction) {
		return res.status(404).json({ message: 'Transaction not found' });
	  }
	  res.status(200).json(updatedTransaction);
	} catch (error) {
	  res.status(400).json({ message: error.message });
	}
  }

  // Delete a Transaction by id
  async delete(req, res) {
	try {
	  const transaction = await Transaction.findByIdAndRemove(req.params.id);
	  if (!transaction) {
		return res.status(404).json({ message: 'Transaction not found' });
	  }
	  res.status(200).json({ message: 'Transaction deleted successfully' });
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  }
}

export default new TransactionController();