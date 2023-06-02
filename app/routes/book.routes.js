module.exports = (app) => {
  const books = require("../controllers/book.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create", books.create);

  // Retrieve all books
  router.get("/getAll", books.findAll);

  // Retrieve all published books
  router.get("/published", books.findAllPublished);

  router.get("/search", books.findWithTitle);
  // Retrieve a single Tutorial with id
  router.get("/:id", books.findOne);

  // Update a Tutorial with id
  router.put("/:id", books.update);

  // Delete a Tutorial with id
  router.delete("/:id", books.delete);

  // Delete all books
  router.delete("/deleteAll", books.deleteAll);

  app.use("/api/books", router);
};
