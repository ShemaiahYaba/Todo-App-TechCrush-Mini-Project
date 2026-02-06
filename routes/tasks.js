// routes/tasks.js
// Created by: Member 4
// Description: Task routes module - defines all URL endpoints

import express from "express";
// TODO: Import controller functions after Member 3 creates them
// import * as taskController from '../controllers/taskController.js';

const router = express.Router();

// ==================== ROUTE DEFINITIONS ====================

// TODO: Member 4 - Implement these routes

// Route: GET /
// Description: View all tasks
// Controller: taskController.getAllTasks
// Example: router.get('/', taskController.getAllTasks);

// Route: GET /add
// Description: Display add task form
// Controller: taskController.getAddTaskForm
// Example: router.get('/add', taskController.getAddTaskForm);

// Route: POST /add
// Description: Create new task
// Controller: taskController.createTask
// Example: router.post('/add', taskController.createTask);

// Route: GET /edit/:id
// Description: Display edit task form with existing data
// Controller: taskController.getEditTaskForm
// Example: router.get('/edit/:id', taskController.getEditTaskForm);

// Route: POST /edit/:id
// Description: Update existing task
// Controller: taskController.updateTask
// Example: router.post('/edit/:id', taskController.updateTask);

// Route: GET /delete/:id
// Description: Delete a task
// Controller: taskController.deleteTask
// Example: router.get('/delete/:id', taskController.deleteTask);

// Route: GET /toggle/:id
// Description: Toggle task status (pending <-> completed)
// Controller: taskController.toggleTaskStatus
// Example: router.get('/toggle/:id', taskController.toggleTaskStatus);

// ==================== EXPORT ROUTER ====================

export default router;
