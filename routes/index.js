const { Router } = require("express");
const usersController = require("../controllers/userController");
const usersRouter = Router();

usersRouter.get("/", usersController.getMessages);
usersRouter.post("/new", usersController.sendMessage);

module.exports = usersRouter;
