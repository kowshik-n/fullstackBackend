import { createCourse, showAllCourses } from '../controllers/createCourseControllers';

import express from 'express';

const routing = express.Router();

routing.post('/createCourse', createCourse);

routing.get('/showAllCourses', showAllCourses);

export default routing;
