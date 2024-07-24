import mongoose from "mongoose";

export const Connection = async (userName, password) => {
    try {
        await mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.ziulu0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("Database Connected Successfully !!");
    } catch (error) {
        console.log("Error while connecting with database", error);
    }
}
