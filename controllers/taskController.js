// controllers/taskController.js
// Created by: Member 3
// Description: Task controller - handles business logic for all task operations

// TODO: Import task model functions after Member 2 creates them
// import * as TaskModel from '../models/taskModel.js';

// ==================== CONTROLLER FUNCTIONS ====================

// TODO: Member 3 - Implement these controller functions

/**
 * GET /
 * Display all tasks
 */
// export async function getAllTasks(req, res) {
//     try {
//         const tasks = await TaskModel.readTasks();
//         res.render('index', {
//             title: 'All Tasks',
//             tasks: tasks
//         });
//     } catch (error) {
//         console.error('Error loading tasks:', error);
//         res.status(500).send('Error loading tasks');
//     }
// }

/**
 * GET /add
 * Display add task form
 */
// export function getAddTaskForm(req, res) {
//     res.render('add', { title: 'Add New Task' });
// }

/**
 * POST /add
 * Create new task
 */
// export async function createTask(req, res) {
//     try {
//         // 1. Get form data from req.body
//         // 2. Validate input (title and description required)
//         // 3. Create new task object with:
//         //    - id (use TaskModel.generateId())
//         //    - title, description, priority from form
//         //    - status: 'pending'
//         //    - createdAt, updatedAt: new Date().toISOString()
//         // 4. Read existing tasks
//         // 5. Add new task to array
//         // 6. Write back to file
//         // 7. Redirect to home page
//         res.redirect('/');
//     } catch (error) {
//         console.error('Error creating task:', error);
//         res.status(500).send('Error creating task');
//     }
// }

/**
 * GET /edit/:id
 * Display edit task form
 */
// export async function getEditTaskForm(req, res) {
//     try {
//         // 1. Get task ID from req.params.id
//         // 2. Find task by ID
//         // 3. If not found, return 404
//         // 4. Render edit form with task data
//         const taskId = req.params.id;
//         // Your code here
//     } catch (error) {
//         console.error('Error loading task:', error);
//         res.status(500).send('Error loading task');
//     }
// }

/**
 * POST /edit/:id
 * Update task
 */
// export async function updateTask(req, res) {
//     try {
//         // 1. Get task ID from req.params.id
//         // 2. Get form data from req.body
//         // 3. Validate input
//         // 4. Read all tasks
//         // 5. Find and update the task
//         // 6. Update the updatedAt field
//         // 7. Write back to file
//         // 8. Redirect to home page
//         res.redirect('/');
//     } catch (error) {
//         console.error('Error updating task:', error);
//         res.status(500).send('Error updating task');
//     }
// }

/**
 * GET /delete/:id
 * Delete task
 */
// export async function deleteTask(req, res) {
//     try {
//         // 1. Get task ID from req.params.id
//         // 2. Read all tasks
//         // 3. Filter out the task to delete
//         // 4. Write back to file
//         // 5. Redirect to home page
//         res.redirect('/');
//     } catch (error) {
//         console.error('Error deleting task:', error);
//         res.status(500).send('Error deleting task');
//     }
// }

/**
 * GET /toggle/:id
 * Toggle task status (pending <-> completed)
 */
// export async function toggleTaskStatus(req, res) {
//     try {
//         // 1. Get task ID from req.params.id
//         // 2. Read all tasks
//         // 3. Find the task
//         // 4. Toggle status: if 'pending' -> 'completed', if 'completed' -> 'pending'
//         // 5. Update the updatedAt field
//         // 6. Write back to file
//         // 7. Redirect to home page
//         res.redirect('/');
//     } catch (error) {
//         console.error('Error toggling task status:', error);
//         res.status(500).send('Error toggling task');
//     }
// }

// ==================== HELPER NOTES ====================

/*
IMPORTANT CONCEPTS TO USE:
1. async/await for file operations
2. try-catch for error handling
3. req.body for form data (POST requests)
4. req.params for URL parameters (:id)
5. res.render() to render EJS views
6. res.redirect() to redirect to another route
7. res.status() to set HTTP status codes

INPUT VALIDATION:
- Check if title is empty
- Check if description is empty
- Check if priority is valid (low, medium, high)

ERROR HANDLING:
- Always wrap async operations in try-catch
- Log errors to console
- Send appropriate error responses
*/
