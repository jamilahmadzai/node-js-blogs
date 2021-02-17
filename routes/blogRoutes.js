const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

//render all blogs from mongodb to the page
router.get("/", blogController.blog_index);

//data recieved from html is stored in database and rendered
//post new blog
router.post("/", blogController.blog_create_post);

//create a new blog
router.get("/create", blogController.blog_create_get);

//get single blog by id
router.get("/:id", blogController.blog_details);

//delete a blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;
