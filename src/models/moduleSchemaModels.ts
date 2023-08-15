import mongoose, { Schema, Document } from 'mongoose';

// Define the nested data schema
const DataSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

// Define the main schema
const WeekSchema = new Schema({
  moduleName: { type: String, required: true },
  data: [DataSchema]
});

// Define a model based on the schema
interface IWeek extends Document {
  moduleName: string;
  data: {
    name: string;
    description: string;
  }[];
}

const WeekModel = mongoose.model<IWeek>('Week', WeekSchema);

export { WeekModel, IWeek, WeekSchema, DataSchema };
