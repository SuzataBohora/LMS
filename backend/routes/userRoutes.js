import express from 'express';
import { addUserRating, getUserCourseProgess, getUserData, purchaseCourse, updateUserCourseProgress, UserEnrolledCourses } from '../controllers/userController.js';

const userRouter = express.Router()

userRouter.get('/data', getUserData)
userRouter.get('/enrolled-courses', UserEnrolledCourses)
userRouter.get('/purchase', purchaseCourse)


userRouter.post('update-course-progress', updateUserCourseProgress)
userRouter.post('/get-course-progress', updateUserCourseProgress)
userRouter.post('/add-rating', addUserRating)

export default userRouter;