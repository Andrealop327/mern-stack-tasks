const express = require('express');
const router = express.Router();


const  Task =require('../models/task');

// listar todo
router.get('/',  async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.json(tasks)  ;
});
   
router.get('/:id',  async (req, res) => {
   const tasks = await Task.findById(req.params.id);
   res.json(tasks)  ;
 });
 
 
    
router.post('/',  async (req, res) => {
   const { title, description} = req.body;
   const task = new Task({title, description});
   console.log(task);
   await task.save();
   res.json({status: 'task saved'}) ;
 });

 router.put('/:id', async (req, res)=>{
   const { title, description} = req.body;
   const newTask= {title, description} ;
   await Task.findByIdAndUpdate(req.params.id, newTask);
   res.json({status: 'task updata'});
 });


 router.delete('/:id', async (req, res)=>{
   await Task.findByIdAndRemove(req.params.id)
   res.json({status: 'task deleted'});
 })


module.exports = router;