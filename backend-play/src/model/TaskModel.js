import TaskSchema from "./TaskSchema.js";

//save the data in the database
export const createTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};
/// read the data from database

export const readTask = () => {
  return TaskSchema.find();
};
