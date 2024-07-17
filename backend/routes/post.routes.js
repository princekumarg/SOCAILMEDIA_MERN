import express from 'express';
import { createPost, getPost, deletePost, likeUnlinkPost, replyToPost, getfeedPosts, getUserPosts } from '../controllers/post.controller.js';
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();

router.get("/feed", protectRoute, getfeedPosts)
router.get("/:id", getPost);
router.get("/user/:username", getUserPosts);
router.post('/create', protectRoute, createPost);
router.delete('/:id', protectRoute, deletePost);
router.put('/like/:id', protectRoute, likeUnlinkPost);
router.put('/reply/:id', protectRoute, replyToPost);

export default router;