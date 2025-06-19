import {v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async ()=>{
    cloudinary.config({
        cloud_name: Process.env.CLOUDINARY_NAME,
        api_key: Process.env.cloudinary_api_key,
        api_sceret: process.env.CLOUDINARY_SECRET_KEY,
    })
}

export default connectCloudinary;