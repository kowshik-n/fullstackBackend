import { findModuleNameAndPush, moduleNameUpdate, moduleSave, showAllModules } from '@root/controllers/moduleSchemaControllers';
import { createCourse, showAllCourses } from '../controllers/createCourseControllers';

import express from 'express';

const routing = express.Router();

routing.post('/createCourse', createCourse);
routing.get('/showAllCourses', showAllCourses);

//
routing.post('/moduleNameUpdate/:id', moduleNameUpdate);
routing.post('/createModule', moduleSave);
routing.post('/findOneAndPush/:id', findModuleNameAndPush);
routing.post('/showAllModules', showAllModules);
//
export default routing;
