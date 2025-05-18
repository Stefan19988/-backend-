const mongoose = require('mongoose');
require('dotenv').config();
const Academy = require('./models/Academy');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const seedAcademies = async () => {
  await connectDB();
  await Academy.deleteMany();
  await Academy.insertMany([
  {
    "name": "Brainster",
    "address": "Skopje"
  },
  {
    "name": "Creative Hub",
    "address": "Skopje"
  },
  {
    "name": "Semos Education",
    "address": "Skopje"
  },
  {
    "name": "Seavus Education and Development Center",
    "address": "Skopje"
  },
  {
    "name": "IT Akademija",
    "address": "Bitola"
  },
  {
    "name": "Macedonian Academy of Sciences and Arts",
    "address": "Skopje"
  },
  
]);
  console.log('Academies seeded');
  process.exit();
};

seedAcademies();
