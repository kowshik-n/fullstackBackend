import { Request, Response } from 'express';
import { createCourseModels } from '../models/createCourseModels';

export const createCourse = async (req: Request, res: Response) => {
  try {
    const { courseName, courseInstructor, startDate, duration, price, validityOfCourse, noOfVideos } = req.body;
    // const { courseName } = req.body;

    const course = new createCourseModels({
      courseName,
      courseInstructor,
      startDate,
      duration,
      price,
      validityOfCourse,
      noOfVideos
    });

    const response = await course.save();

    res.json({ message: 'Course created successfully', res: response });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const showAllCourses = async (req: Request, res: Response) => {
  try {
    const response = await createCourseModels.find({});

    res.json({ message: 'Course created successfully', res: response });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
