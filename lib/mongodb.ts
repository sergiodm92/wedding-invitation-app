import mongoose, { ConnectOptions } from "mongoose";

const { DATABASE_URL } = process.env;

// Check if the MONGODB_URI environment variable is defined
if (!DATABASE_URL) {
  throw new Error("MONGODB_URI must be defined");
}

// Define the connection options
const options: ConnectOptions = {
  // useNewUrlParser and useUnifiedTopology are now default options and don't need to be specified
  // You can add other options here if needed
};

// Export an asynchronous function named connectDB
export const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the provided URI and options
    const { connection } = await mongoose.connect(DATABASE_URL!, options);

    // Check if the connection is successful (readyState === 1)
    if (connection.readyState === 1) {
      console.log("MongoDB Connected"); // Log a success message if connected
      return Promise.resolve(true); // Resolve the promise with true
    }
  } catch (error) {
    // Handle any errors that might occur during the connection process
    console.error("MongoDB connection error:", error); // Log the error message
    return Promise.reject(error); // Reject the promise with the error object
  }
};
