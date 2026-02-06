// models/taskModel.js
// Created by: Member 2
// Description: Task data model - handles all file operations

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to tasks.json file
const tasksFilePath = path.join(__dirname, "../data/tasks.json");

// ==================== DATA OPERATIONS ====================

// TODO: Member 2 - Implement these functions

/**
 * Read all tasks from tasks.json
 * @returns {Promise<Array>} Array of task objects
 */
// export async function readTasks() {
//     try {
//         // 1. Read the file using fs.promises.readFile
//         // 2. Parse the JSON string to JavaScript object
//         // 3. Return the tasks array
//         // 4. Handle errors (file not found, invalid JSON)
//
//         const data = await fs.readFile(tasksFilePath, 'utf8');
//         const jsonData = JSON.parse(data);
//         return jsonData.tasks || [];
//     } catch (error) {
//         // If file doesn't exist, return empty array
//         if (error.code === 'ENOENT') {
//             return [];
//         }
//         throw error;
//     }
// }

/**
 * Write tasks to tasks.json
 * @param {Array} tasks - Array of task objects
 * @returns {Promise<void>}
 */
// export async function writeTasks(tasks) {
//     try {
//         // 1. Create the data object with tasks array
//         // 2. Convert to JSON string with proper formatting
//         // 3. Write to file using fs.promises.writeFile
//
//         const data = {
//             tasks: tasks
//         };
//         const jsonString = JSON.stringify(data, null, 2);
//         await fs.writeFile(tasksFilePath, jsonString, 'utf8');
//     } catch (error) {
//         console.error('Error writing tasks:', error);
//         throw error;
//     }
// }

/**
 * Find a task by ID
 * @param {string} id - Task ID
 * @returns {Promise<Object|null>} Task object or null if not found
 */
// export async function findTaskById(id) {
//     try {
//         const tasks = await readTasks();
//         // Use Array.find() to find the task with matching id
//         const task = tasks.find(task => task.id === id);
//         return task || null;
//     } catch (error) {
//         console.error('Error finding task:', error);
//         throw error;
//     }
// }

/**
 * Generate a unique ID for new tasks
 * @returns {string} Unique ID
 */
// export function generateId() {
//     // Option 1: Use timestamp + random number
//     // return Date.now().toString() + Math.random().toString(36).substr(2, 9);
//
//     // Option 2: Use UUID-like format (simpler)
//     // return 'task_' + Date.now();
//
//     // Choose one approach and implement it
// }

// ==================== SAMPLE DATA GENERATION ====================

/**
 * IMPORTANT: Create 20+ sample tasks in data/tasks.json
 *
 * Task object structure:
 * {
 *   "id": "unique_id",
 *   "title": "Task title",
 *   "description": "Task description",
 *   "status": "pending" or "completed",
 *   "priority": "low", "medium", or "high",
 *   "createdAt": "2026-02-01T10:00:00.000Z",
 *   "updatedAt": "2026-02-01T10:00:00.000Z"
 * }
 *
 * Requirements for sample data:
 * - At least 20 tasks
 * - Mix of pending and completed tasks
 * - Variety of priorities (low, medium, high)
 * - Different creation dates
 * - Realistic task titles and descriptions
 *
 * Example tasks to include:
 * - Complete Node.js assignment
 * - Study for backend exam
 * - Build to-do list app
 * - Learn Express.js
 * - Practice Git commands
 * - Review EJS templating
 * - Write project documentation
 * - Fix bugs in code
 * - Add CSS styling
 * - Test all routes
 * - etc.
 */

// ==================== HELPER NOTES ====================

/*
IMPORTANT CONCEPTS TO USE:

1. ES Modules:
   - Use import/export, NOT require()
   - Use import.meta.url to get file path
   - Use fileURLToPath and path.dirname for __dirname

2. File Operations (fs.promises):
   - fs.readFile(path, 'utf8') - Read file
   - fs.writeFile(path, data, 'utf8') - Write file
   - Always use async/await
   - Always use try-catch

3. JSON Operations:
   - JSON.parse(string) - Convert JSON string to object
   - JSON.stringify(object, null, 2) - Convert object to formatted JSON string

4. Array Methods:
   - Array.find() - Find single item
   - Array.filter() - Filter items
   - Array.map() - Transform items
   - Array.push() - Add item

5. Error Handling:
   - Wrap all file operations in try-catch
   - Handle ENOENT error (file not found)
   - Log errors to console
   - Throw errors for controller to handle

FILE PATH NOTES:
- tasksFilePath should point to: ../data/tasks.json
- Use path.join() to create cross-platform paths
- Don't use hardcoded paths like "C:\\Users\\..."

TESTING YOUR CODE:
After implementing, you can test by creating a test file:

// test.js
import { readTasks, writeTasks, generateId } from './models/taskModel.js';

async function test() {
    const tasks = await readTasks();
    console.log('Tasks:', tasks);
}

test();
*/
