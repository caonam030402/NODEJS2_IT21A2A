const bookController = require("../controllers/bookController");

const router = require("express").Router();

router.post("/v1/book", bookController.addABook);
router.get("/v1/book", bookController.getAllBook);
router.get("/v1/book/:id", bookController.getABook);
router.put("/v1/book/:id", bookController.updateBook);
router.delete("/v1/book/:id", bookController.deleteABook);

module.exports = router;
