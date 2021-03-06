const router = require("express").Router();

const commentController = require("../controllers/commentController");
const isAuthenticated = require("./../middlewares/auth");

router.put("/:id/edit", isAuthenticated, commentController.update);
router.delete("/:id/delete", isAuthenticated, commentController.deleteComment);
router.get("/:id", commentController.getReplies);

module.exports = router;
