import model from "./model.js";
import { v4 as uuid } from "uuid";

export const createCourse = (course) => {
  return model.create({ courseId: course._id, modules: [] });
};
export const createModule = (courseId, module) => {
  return model.updateOne(
    { course: courseId },
    { $push: { modules: { ...module, _id: uuid() } } }
  );
};
export const findModuleByCourseId = (courseId) =>
  model.findOne({ course: courseId });
export const findCourseModuleByModuleId = (courseId, moduleId) =>
  model.findOne({ courseId, "modules._id": moduleId });
export const updateModule = (courseId, module) =>
  model.updateOne(
    { course: courseId, "modules._id": module._id },
    { $set: { "modules.$.name": module.name } }
  );
export const deleteModule = (courseId, moduleId) =>
  model.updateOne(
    { course: courseId },
    { $pull: { modules: { _id: moduleId } } }
  );
export const addLesson = async (courseId, moduleId, lesson) => {
  const newLesson = { ...lesson, _id: uuid() };
  await model.updateOne(
    { course: courseId, "modules._id": moduleId },
    { $push: { "modules.$.lessons": newLesson } }
  );
};
