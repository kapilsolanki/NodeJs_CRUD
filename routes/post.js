const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const validator = require("../validator")


router.get("/",postController.getPosts);
router.post("/post",validator.createPostValidator,postController.createPost);
router.delete("/delete/:id",postController.deletePost);
module.exports = router ;

