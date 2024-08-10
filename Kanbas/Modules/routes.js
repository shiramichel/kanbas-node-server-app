import * as dao from "./dao.js"; 
// import db from "../Database/index.js";
export default function ModuleRoutes(app) {
    /*
  app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
      });
    
    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const newModule = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };
        db.modules.push(newModule);
        res.send(newModule);
      });
    
  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = db.modules.filter((m) => m.course === cid);
    res.json(modules);
  });
  app.put("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    const moduleIndex = db.modules.findIndex(
      (m) => m._id === mid);
    db.modules[moduleIndex] = {
      ...db.modules[moduleIndex],
      ...req.body
    };
    res.sendStatus(204);
  });
*/
const updateModule = async (req, res) => {
  const { id } = req.params;
  const module = req.body;
  const status = await dao.updateModule(id, module); 
  res.json(status); 
}

const createModule = async (req, res) => {
  const { id } = req.params;
  const module = { ...req.body, 
    course: id,
    _id: new Date().getTime().toString() };
  console.log("adding module"); 
  const status = await dao.createModule(module); 
  res.json(status); 
}

const getModules = async (req, res) => {
  const modules = await dao.findAllModules(); 
  res.json(modules);
}

const deleteModule = async (req, res) => {
  const { id } = req.params;
  const result = await dao.deleteModule(id); 
  res.json(result); 
}

app.put("/api/modules/:id", updateModule); 
app.post("/api/courses/:id/modules", createModule);
app.get("/api/courses/:id/modules", getModules);
app.delete("/api/modules/:id", deleteModule);
}
