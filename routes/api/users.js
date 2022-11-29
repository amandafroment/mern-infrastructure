const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);
// this middleware will only allow users access to the routes if the user is logged in
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
