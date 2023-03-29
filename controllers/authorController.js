const { Author, Book } = require("../models/model");

const authorController = {
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const saveAuthor = await newAuthor.save();
      res.status(200).json(saveAuthor);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllAuthor: async (req, res) => {
    try {
      const authors = await Author.find().populate("books");
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAnAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).populate("books");
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      await author.updateOne({ $set: req.body });
      res.status(200).json("Update successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteAAuthor: async (req, res) => {
    try {
      await Author.updateMany({ books: req.params.id }, { author: null });
      await Author.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfull!");
    } catch (error) {
      res.status(200).json(error);
    }
  },
};

module.exports = authorController;
