var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

//CONNCTING DB
//CONECTING DB// APP CONFI
mongoose.connect(
  "mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

//SCHEMA
let lopSchema = mongoose.Schema({
  maLopHoc: {
    type: String,
  },
  tenLop: {
    type: String,
  },
  soLuong: {
    type: String,
  },
  maGiangVien: {
    type: String,
  },
  maLopHoc: {
    type: String,
  },
});

//MODEL
let Lop = mongoose.model("Lop", lopSchema);

/* GET home page. */
router.get("/", function (req, res, next) {
  Lop.find({}, (error, data) => {
    console.log("danh sách lớp", data);
    res.render("index", { lops: data });
  });
});

// ADD
router.get("/form-add", function (req, res, next) {
  res.render("form-add", {});
});

router.post("/add", function (req, res, next) {
  Lop.create(req.body);
  res.redirect("/");
});

// UPDATE
router.get("/form-update/:id", function (req, res, next) {
  Lop.findById(req.params.id, (error, data) => {
    res.render("form-update", { lop: data });
  });
});

router.post("/update", function (req, res, next) {
  Lop.findByIdAndUpdate(req.body.id, req.body, (error, data) => {
    res.redirect("/");
  });
});

// DELETE
router.get("/form-delete/:id", function (req, res, next) {
  Lop.findByIdAndDelete(req.params.id, (error, data) => {
    res.redirect("/");
  });
});
module.exports = router;
