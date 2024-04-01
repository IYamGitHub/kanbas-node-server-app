import db from "../Database/index.js";
function ModuleRoutes(app) {
  app.put("/api/modules/:cid/:mid", (req, res) => {
    const { cid, mid } = req.params;
    const courseIndex = db.modules.findIndex((course) => (course.course == cid))
    const moduleIndex = db.modules[courseIndex].modules.findIndex(
      (m) => m._id === mid);
    db.modules[courseIndex].modules[moduleIndex] = {
      ...db.modules[courseIndex].modules[moduleIndex],
      ...req.body
    };
    res.sendStatus(204);
  });

  app.delete("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    db.modules = db.modules.map((course) => ({course: course.course, modules: course.modules.filter((m) => m._id !== mid)}));
    res.sendStatus(200);
  });

  app.post("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      _id: new Date().getTime().toString(),
    };
    db.modules.find((module) => module.course === cid)?.modules.push(newModule);
    res.send(newModule);
  });

  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = db.modules
      .filter((m) => m.course === cid);
    res.send(modules);
  });
}
export default ModuleRoutes;