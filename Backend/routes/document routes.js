const express = require('express');
const router = express.Router();
const Document = require('../models/Document');
const { protect } = require('../middleware/authMiddleware');

// Get all user's documents
router.get('/', protect, async (req, res) => {
  const docs = await Document.find({ user: req.user._id });
  res.json(docs);
});

// Create new document
router.post('/', protect, async (req, res) => {
  const { title, content } = req.body;
  const doc = await Document.create({ user: req.user._id, title, content });
  res.status(201).json(doc);
});

// Update document status (archive, delete)
router.put('/:id', protect, async (req, res) => {
  const { status, content, title } = req.body;
  const doc = await Document.findById(req.params.id);

  if (doc && doc.user.toString() === req.user._id.toString()) {
    if (status) doc.status = status;
    if (title) doc.title = title;
    if (content !== undefined) doc.content = content;
    const updated = await doc.save();
    res.json(updated);
  } else {
    res.status(404).json({ message: 'Document not found or not authorized' });
  }
});

module.exports = router;
