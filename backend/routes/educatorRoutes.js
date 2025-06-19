import  express, { Router } from 'express'
import { updateRoleToEducator } from '../controllers/educatorController.js';

const educatorRouter = express.Router()

//Add Educator Role
educatorRouter.get('/update-role', updateRoleToEducator)
educatorRouter.post('/addcourse', upload.single('image'), 
protectorEducation, addCourse,)

export default educatorRouter;
