const express = require('express');
const router = express.Router();
const Academy = require('../models/Academy');

router.get('/', async (req, res) => {
  const academies = await Academy.find();
  res.json(academies);
});

router.post('/', async (req, res) => {
  const academy = new Academy(req.body);
  await academy.save();
  res.status(201).json(academy);
});

router.put('/:id', async (req, res) => {
  const updated = await Academy.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Academy.findByIdAndDelete(req.params.id);
  res.json({ message: 'Academy deleted' });
});

module.exports = router;