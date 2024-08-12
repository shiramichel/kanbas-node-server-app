
//import db from "../Database/index.js";
import * as dao from "./dao.js"; 

export default function AssignmentRoutes(app) {
  /*
  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    db.assignments = db.assignments.filter((a) => a._id !== aid);
    res.sendStatus(200);
  });    
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments.filter((a) => a.course === cid);
    res.json(assignments);
  });
  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssign = {
      ...req.body,
      course: cid,
      id: new Date().getTime().toString(),
    };
    db.assignments.push(newAssign);
    res.send(newAssign);
  });
  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignIndex = db.assignments.findIndex(
      (a) => a._id === aid);
    db.assignments[assignIndex] = {
      ...db.assignments[assignIndex],
      ...req.body
    };
    res.sendStatus(204);
  });

*/const updateAssignment = async (req, res) => {
  const { id } = req.params;
  const assignment = req.body;
  const status = await dao.updateAssignment(id, assignment); 
  res.json(status); 
}

const createAssignment = async (req, res) => {
  const { id } = req.params;
  const assignment = { ...req.body, 
    course: id,
    _id: new Date().getTime().toString() };
  console.log("adding assignment"); 
  const status = await dao.createAssignment(assignment); 
  res.json(status); 
}

const getAssignments = async (req, res) => {
  const assignments = await dao.findAllAssignments(); 
  res.json(assignments);
}

const deleteAssignment = async (req, res) => {
  const { id } = req.params;
  const result = await dao.deleteAssignment(id); 
  res.json(result); 
}

app.put("/api/assignments/:id", updateAssignment); 
app.post("/api/courses/:id/assignments", createAssignment);
app.get("/api/courses/:id/assignments", getAssignments);
app.delete("/api/assignments/:id", deleteAssignment);

}
