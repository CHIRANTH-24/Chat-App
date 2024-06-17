const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");
const router = express.Router();

router.route("/").post(registerUser);

//You have spent 2 days at this point renaming it to post insted of router.route
router.post("/login", authUser);

module.exports = router;
