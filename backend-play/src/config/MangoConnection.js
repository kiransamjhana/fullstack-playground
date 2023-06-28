import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const dbLink = "mongodb://localhost:27017/entrylist";
    const conn = await mongoose.connect(dbLink);
    conn && console.log("Mongo DB is running");
    return true;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
