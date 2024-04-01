export default function SessionExercises(app) {
  app.get("/api/session/set/:key/:value", (req, res) => {
    const key = req.params.key;
    const value = req.params.value;
    req.session[key] = value;
    res.send(req.session);
  })
}