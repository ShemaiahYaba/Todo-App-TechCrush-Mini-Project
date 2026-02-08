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

// Get tasks from data/tasks.json


async function readTasks() {
  try {
    const tasks = await fs.readFile(tasksFilePath, "utf-8");
    const tasksData = JSON.parse(tasks);
    return tasksData;
  } catch (error) {
    return "File doesn't exist";
  }
}


/**
 * Write tasks to data/tasks.json.
 * @param {Array<Object>} tasks - Array of task objects to persist.
 * @returns {Promise<void|string>} Resolves when written, or error string on failure.
*/


async function writeTasks(tasks) {
  try {
    const jsonString = JSON.stringify(tasks, null, 2);
    await fs.writeFile(tasksFilePath, jsonString, "utf-8");
    return "Task has been written to task.json"
  } catch (error) {
    return "Error writing tasks:" + error;
  }
}

/**
 * Generate a unique ID for new tasks.
 * @returns {string} Unique ID string.
*/

// Generate task id

function generateId() {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

// Find tasks by id

async function findTasksById(id) {
  try {
    const taskData = await readTasks();
    const searchedTask = taskData.find(task => task.id === id);
    return searchedTask  ||  "Task Id not found" ;
    
  } catch (error) {
    return "Error finding task";
  }           
}

// Write tasks test
// console.log(await writeTasks({id: "71728781", title: "Todo", description: "Fetch Garri", status: "pending", priority: "low"}))


export { readTasks, writeTasks, generateId, findTasksById};

