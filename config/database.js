import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Mongo is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo is connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
