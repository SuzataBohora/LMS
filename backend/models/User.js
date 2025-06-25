import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },  // Typically you wouldn't manually set _id
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },  // Added unique
    imageUrl: { type: String, required: true },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      }
    ],
  }, 
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);