const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
//const limiter = require("../middleware/rateLimiter");
const controller = require("../controllers/authController");

//router.post("/register", limiter, controller.register);
//router.post("/login", limiter, controller.login);
router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/refresh-token", controller.refreshToken);
router.post("/logout", auth, controller.logout);

router.get("/admin", auth, role("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

module.exports = router;