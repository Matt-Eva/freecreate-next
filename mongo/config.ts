import mongoose from "mongoose";
const { Schema } = mongoose;

async function connectMongoose() {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  const rS = mongoose.connection.readyState;

  if (rS === 1 || rS === 2) {
    console.log("Already connected to MongoDB");
    return;
  }

  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB");
}

export default connectMongoose;
