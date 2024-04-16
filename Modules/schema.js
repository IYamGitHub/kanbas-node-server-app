import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["", "file", "assignment", "page", "link"],
    default: "",
  },
});

const moduleSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lessons: {
    type: [lessonSchema],
    default: [],
  },
});

const courseSchema = new mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    modules: {
      type: [moduleSchema],
      default: [],
    },
  },
  { collection: "modules" }
);
export default courseSchema;
