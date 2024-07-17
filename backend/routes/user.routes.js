import express from 'express';
import { signup, login, logout, followUnFollowUser, updateUser, getUserProfile, getSuggestedUsers, freezeAccount } from '../controllers/user.controllers.js';
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();

router.get('/profile/:query', getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/follow/:id', protectRoute, followUnFollowUser);
router.put('/update/:id', protectRoute, updateUser);
router.put("/freeze", protectRoute, freezeAccount);
export default router;