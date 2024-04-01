export default function Hello(app) {
  app.get("/hello", (req, res) => {
    res.send("Life is good!");
  });

  app.get("/", (req, res) => {
    res.send("Welcome to Full Stack Development!");
  });

  app.get("/add", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send({ a: a, b: b, result: a + b });
  });
}
