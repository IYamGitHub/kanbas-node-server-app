import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);
  };

  const findAllCourses = async (req, res) => {
    const course = await dao.findAllCourses();
    res.json(course);
  };
  const findCourseByNumber = async (req, res) => {
    const course = await dao.findCourseByNumber(req.params.courseId);
    res.json(course);
  };
  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    req.session["currentCourse"] = await dao.findCourseById(courseId);
    res.json(status);
  };

  app.post("/api/course", createCourse);
  app.get("/api/course", findAllCourses);
  app.get("/api/course/:courseId", findCourseByNumber);
  app.put("/api/course/:courseId", updateCourse);
  app.delete("/api/course/:courseId", deleteCourse);
}
