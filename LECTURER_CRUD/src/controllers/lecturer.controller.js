const asyncHandler = require('express-async-handler');
const httpStatus = require('http-status');
const lecturerService = require('../services/lecturer.service');
const ApiError = require('../utils/ApiError');
const pick = require('../utils/pick');

const lecturerController = {
  addLeturer: asyncHandler(async (req, res) => {
    try {
      const saveLecturer = await lecturerService.createLecturer(req.body);
      res.status(httpStatus.CREATED).json(saveLecturer);
    } catch (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
  }),

  updateLeturer: asyncHandler(async (req, res) => {
    try {
      await lecturerService.updateLeturerById(req.params.id, req.body);
      res.status(httpStatus.CREATED).json('Update successfully!');
    } catch (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
  }),

  getAllLecturer: asyncHandler(async (req, res) => {
    try {
      const filter = pick(req.query, ['name', 'role']);
      const options = pick(req.query, ['sortBy', 'limit', 'page']);
      const result = await lecturerService.queryLeturers(filter, options);
      res.send(result);
    } catch (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
  }),

  getALecturer: asyncHandler(async (req, res) => {
    try {
      const lecturer = await lecturerService.getLecturerById(req.params.id);
      res.status(httpStatus.CREATED).json(lecturer);
    } catch (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
  }),

  deleteLeturer: async (req, res) => {
    await lecturerService.deleteLectureById(req.params.id);
    res.status(httpStatus.CREATED).json('Delete successfully');
  },
};

module.exports = lecturerController;
