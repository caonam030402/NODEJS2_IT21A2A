const Joi = require('joi');

const createLecturer = {
  body: Joi.object().keys({
    lecturerCode: Joi.string().required(),
    name: Joi.string().optional(),
    address: Joi.string().optional(),
    phoneNumber: Joi.string().optional(),
  }),
};

const getLecturers = {
  query: Joi.object().keys({
    lecturerCode: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateLecturer = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().optional(),
      address: Joi.string().optional(),
      phoneNumber: Joi.string().optional(),
    })
    .min(1),
};

const getLecturer = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const deleteLecturer = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createLecturer,
  deleteLecturer,
  updateLecturer,
  getLecturer,
  getLecturers,
};
