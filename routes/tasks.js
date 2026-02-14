// routes/tasks.js
// Created by: Iyanuoluwa Samuel James
// Description: Task routes module - defines all URL endpoints

import express from "express";
import * as taskController from '../controllers/taskController.js';

const router = express.Router();


router.get('/', taskController.getAllTasks);


router.get('/add', taskController.getAddTaskForm);


router.post('/add', taskController.createTask);


router.get('/edit/:id', taskController.getEditTaskForm);


router.post('/edit/:id', taskController.updateTaskByController);


router.get('/delete/:id', taskController.deleteTaskByController);


router.get('/toggle/:id', taskController.toggleTaskStatus);


export default router;


