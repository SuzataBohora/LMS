import { clerkClient } from '@clerk/express'
import Course from '../models/Course.js'
import {v2 as cloudinary} from 'cloudinary';


//update role to educator
export const updateRoleToEducator = async ()=> {
    try {
        const userId = req.auth.userId

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata:{
                role: 'educator',
            }
        })

        res.json({ sucess: true, message: 'you can publish a course now' })
    }catch (error) {
        res.json({ success: false, message: error.message})
    }
}

//Add new course
export const addCourse = async (req, res)=>{
    try{
        const{ courseData } = req.body
        const imageFile = req.file
        const educatorId = req.auth.userId

        if (!imageFile){
            return res.json({ success: false, message: 'Thumbnail Not Attached'})
        }

        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = educatorId
        const newCourse = await Course.create(parsedCourseData)
        const imageupload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumbnail = imageupload.secure_url
        await newCourse.save()

        res.json({ success: true, message: 'Course Added' })
    
    } catch (error) {
        res.json({ success: false, message: error.message })

    }
}