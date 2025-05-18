const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/academies', require('./routes/academyRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
