const express = require("express");
const router = express.Router();

//import controllers
const blogController = require("../controllers/BlogControllers");

router.post("/create", blogController.create);

exports.blogs = router