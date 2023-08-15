import { Request, Response } from 'express';
import { WeekModel } from '../models/moduleSchemaModels';

export const moduleSave = async (req: Request, res: Response) => {
  try {
    const { array } = req.body.data;
    const course = new WeekModel({
      moduleName: array.moduleName,
      data: array.data
    });
    const response = await course.save({});
    res.status(201).json(response);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
};

export const showAllModules = async (req: Request, res: Response) => {
  try {
    const response = await WeekModel.find({});
    res.status(201).json(response);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
};

export const moduleNameUpdate = async (req: Request, res: Response) => {
  try {
    const { moduleName } = req.body;
    const { id } = req.params;
    const response = await WeekModel.findByIdAndUpdate({ _id: id }, { moduleName });
    res.status(201).json(response);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
};

export const findModuleNameAndPush = async (req: Request, res: Response) => {
  try {
    const { array } = req.body.data;
    const response = await WeekModel.updateOne(
      { moduleName: array.moduleName }, // Match the specific document
      { $push: { data: array.data } } // Push the new object into the data array
    );
    res.status(201).json(response);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
};
