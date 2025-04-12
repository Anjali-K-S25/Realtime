const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String },
  status: { type: String, enum: ['active', 'archived', 'deleted'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Document', documentSchema);
