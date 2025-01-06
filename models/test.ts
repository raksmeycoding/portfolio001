import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
})


export const Test = mongoose.models?.Test || mongoose.model("Test", testSchema);