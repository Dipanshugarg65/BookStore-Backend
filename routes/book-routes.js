const express = require("express");
const router = express.Router(); 
const Book = require ("../model/Book")
const booksControllers = require("../controllers/books-controllers");


router.get("/", booksControllers.getAllBooks);
// router.post("/", booksControllers.getAllBooks);
router.post("/", booksControllers.addBook);
// router.post("/books", booksControllers.addBook);  //doubt tells
router.get("/:id",booksControllers.getById )
router.put("/:id",booksControllers.updateBook)
router.delete("/:id",booksControllers.deleteBook)

module.exports = router;
