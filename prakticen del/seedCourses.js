const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');

dotenv.config();

const courses = [
  {
    name: "Frontend Development",
    address: "Skopje",
    area: "Web Development"
  },
  {
    name: "Backend Development",
    address: "Bitola",
    area: "Web Development"
  },
  {
    name: "Data Science Fundamentals",
    address: "Ohrid",
    area: "Data Science"
  }
];

mongoose.connect(process.env.DB_URI)
  .then(async () => {
    await Course.deleteMany();
    await Course.insertMany(courses);
    console.log("Courses seeded");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
