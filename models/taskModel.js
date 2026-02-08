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
    return "Task has been written to task.json";
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
    const searchedTask = taskData.find((task) => task.id === id);
    return searchedTask || "Task Id not found";
  } catch (error) {
    return "Error finding task";
  }
}

// Write tasks test
// console.log(await writeTasks({id: "71728781", title: "Todo", description: "Fetch Garri", status: "pending", priority: "low"}))

// Update tasks by id

async function updateTask(id, updateToApply) {
  try {
    const tasks = await readTasks();
    // const taskToUpdate = await findTasksById(id);
    const taskToUpdateIndex = tasks.findIndex((task) => task.id === id);

    // Updates: most be an object so that we can destructure it

    // reminder for laters:  make a class Update to handle update instances
    const { title, description, status, priority } = updateToApply;

    // Apply updates
    tasks[taskToUpdateIndex].title = title;
    tasks[taskToUpdateIndex].description = description;
    tasks[taskToUpdateIndex].status = status;
    tasks[taskToUpdateIndex].priority = priority;
    tasks[taskToUpdateIndex].updatedAt = new Date().toISOString();

    console.log(tasks[taskToUpdateIndex]);

    // Save back into data/task.json
    await writeTasks(tasks);

    return `Task of id ${id} has been updated`;
  } catch (error) {
    return `Could not update task of id ${id}`;
  }
}

// Sample test
// let newUpdate = {title: "Food", description: "Drink garri", status: "pending", priority: "high"}
// console.log(await updateTask("l3p2x7kr_2m8c9v0b", newUpdate));

// note: this test updates the first task in tasks.json to drink garri

// Delete task by id

async function deleteTask(id) {
  try {
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return `Task of id ${id} not found`;
    }

    tasks.splice(taskIndex, 1);

    // Save back into data/task.json
    await writeTasks(tasks);

    return `Task of id ${id} has been deleted`;
  } catch (error) {
    return `Could not delete task of id ${id}`;
  }
}

// Sample test
// console.log(await deleteTask("l3p2x7kr_2m8c9v0b"));

export {
  readTasks,
  writeTasks,
  generateId,
  findTasksById,
  updateTask,
  deleteTask,
};
