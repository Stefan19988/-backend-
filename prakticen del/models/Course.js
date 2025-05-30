const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  area: { type: String, required: true }
});

module.exports = mongoose.model('Course', CourseSchema);
