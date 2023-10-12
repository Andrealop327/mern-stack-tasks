import express from "express";



import tasksRoutes from "./routes/tasks.routes.js";

const app = express();


// Routes
app.use("/api/tasks", tasksRoutes);



// Static Files
app.use(express.static(path.resolve("public")));

export default app;