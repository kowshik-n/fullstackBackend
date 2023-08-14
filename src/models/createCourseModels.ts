import mongoose, { Document } from 'mongoose';

interface ICourse extends Document {
  courseName: string;
  courseInstructor: string;
  startDate: Date;
  duration: number;
  price: number;
  validityOfCourse: number;
  noOfVideos: number;
}

const courseSchema = new mongoose.Schema<ICourse>({
  courseName: { type: String, required: true },
  courseInstructor: { type: String, required: true },
  startDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  validityOfCourse: { type: Number, required: true },
  noOfVideos: { type: Number, required: true }
});

export const createCourseModels = mongoose.model<ICourse>('Course', courseSchema);
