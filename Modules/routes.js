import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const courseId = req.params.courseId;
    const course = await dao.findModuleByCourseId(courseId);
    if (!course) {
      await dao.createCourse(courseId);
    }
    const module = req.body;
    const status = await dao.createModule(courseId, module);
    res.json(status);
  };

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(
      req.params.courseId,
      req.params.moduleId
    );
    res.json(status);
  };

  const findAllModules = async (req, res) => {
    const courseId = req.params.courseId;
    const modules = await dao.findModuleByCourseId(courseId);
    res.json(modules.modules);
  };

  const updateModule = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateModule(courseId, req.body);
    res.json(status);
  };

  const addLesson = async (req, res) => {
    const { courseId, moduleId } = req.params;
    const status = await dao.addLesson(courseId, moduleId, req.body);
    res.json(status);
  };

  app.post("/api/:courseId/modules", createModule);
  app.get("/api/:courseId/modules", findAllModules);
  app.put("/api/:courseId/modules", updateModule);
  app.delete("/api/:courseId/modules/:moduleId", deleteModule);
  app.put("/api/:courseId/modules/:moduleId", addLesson);
}
