const express = require('express');
const lecturerController = require('../../controllers/lecturer.controller');
const lecturerValidation = require('../../validations/lecturer.validation');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .post(validate(lecturerValidation.createLecturer), lecturerController.addLeturer)
  .get(validate(lecturerValidation.getLecturers), lecturerController.getAllLecturer);

router
  .route('/:id')
  .get(validate(lecturerValidation.getLecturer), lecturerController.getALecturer)
  .put(validate(lecturerValidation.updateLecturer), lecturerController.updateLeturer)
  .delete(auth('manageUsers'), validate(lecturerValidation.deleteLecturer), lecturerController.deleteLeturer);

module.exports = router;
