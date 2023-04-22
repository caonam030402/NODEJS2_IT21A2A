const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const lecturerSchema = mongoose.Schema(
  {
    lecturerCode: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
lecturerSchema.plugin(toJSON);
lecturerSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
lecturerSchema.statics.isNameTaken = async function (name, excludeUserId) {
  const lecturer = await this.findOne({ name, _id: { $ne: excludeUserId } });
  return !!lecturer;
};

/**
 * @typedef Lecturer
 */
const Lecturer = mongoose.model('Lecturer', lecturerSchema);

module.exports = Lecturer;
