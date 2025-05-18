const Academy = require('../models/Academy');

exports.getAcademies = async (req, res) => {
  const academies = await Academy.find();
  res.json(academies);
};

exports.createAcademy = async (req, res) => {
  const academy = await Academy.create(req.body);
  res.status(201).json(academy);
};

exports.updateAcademy = async (req, res) => {
  const academy = await Academy.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(academy);
};

exports.deleteAcademy = async (req, res) => {
  await Academy.findByIdAndDelete(req.params.id);
  res.json({ message: 'Academy deleted' });
};
