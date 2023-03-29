const authorController = require("../controllers/authorController");

const router = require("express").Router();

router.post("/v1/author", authorController.addAuthor);
router.get("/v1/author", authorController.getAllAuthor);
router.get("/v1/author/:id", authorController.getAnAuthor);
router.put("/v1/author/:id", authorController.updateAuthor);
router.delete("/v1/author/:id", authorController.deleteAAuthor);

module.exports = router;
