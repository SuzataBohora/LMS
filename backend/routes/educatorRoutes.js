import express from 'express';
import { updateRoleToEducator, addCourse } from '../controllers/educatorController.js';
import { protectEducator } from '../middlewares/authMiddleware.js';
import upload from '../configs/multer.js';



const educatorRouter = express.Router();

// Add Educator Role
educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/addcourse', upload.single('image'), protectEducator, addCourse);

export default educatorRouter;