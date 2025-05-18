const express = require('express');
const router = express.Router();
const academyController = require('../controllers/academyController');

router.get('/', academyController.getAcademies);
router.post('/', academyController.createAcademy);
router.put('/:id', academyController.updateAcademy);
router.delete('/:id', academyController.deleteAcademy);

module.exports = router;
