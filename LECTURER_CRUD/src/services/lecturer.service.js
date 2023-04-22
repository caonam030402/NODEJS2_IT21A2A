const asyncHandler = require('express-async-handler');
const httpStatus = require('http-status');
const { Lecturer } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Query for students
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLeturers = async (filter, options) => {
  const students = await Lecturer.paginate(filter, options);
  return students;
};

/**
 * @param {Object} lecturerBody
 * @returns {Promise<Lecturer>}
 */

const createLecturer = asyncHandler(async (lecturerBody) => {
  if (await Lecturer.isNameTaken(lecturerBody.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return Lecturer.create(lecturerBody);
});

/**
 * @param {ObjectId} id
 * @returns {Promise<Lecturer>}
 */

const getLecturerById = asyncHandler(async (id) => {
  const letturer = await Lecturer.findById(id);
  return letturer;
});

/**
 * @param {ObjectId} lecturerId
 * @returns {Promise<Lecturer>}
 */

const deleteLectureById = asyncHandler(async (lecturerId) => {
  const letturer = await Lecturer.findByIdAndDelete(lecturerId);
  if (!letturer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lecture not found');
  }
  return letturer;
});

/**
 * @param {ObjectId} lecturerId
 * @param {Object} updateBody
 * @returns {Promise<Lecturer>}
 */
const updateLeturerById = asyncHandler(async (lecturerId, updateBody) => {
  const lecturer = await Lecturer.findById(lecturerId);

  if (!lecturer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lererture not found');
  }

  await lecturer.updateOne({ $set: updateBody });
  return lecturer;
});

module.exports = {
  createLecturer,
  getLecturerById,
  deleteLectureById,
  updateLeturerById,
  queryLeturers,
};
