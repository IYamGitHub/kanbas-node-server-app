import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true, unique: true },
    startDate: Date,
    endDate: Date,
    image: String,
    section: String,
    term: String,
    semester: String,
    termSize: {
      type: String,
      enum: ["Full", "Half"],
      default: "Full",
    },
  },
  { collection: "courses", versionKey: false }
);
export default courseSchema;