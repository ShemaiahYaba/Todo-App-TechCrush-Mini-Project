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
    const data = { tasks };
    const jsonString = JSON.stringify(data, null, 2);
    await fs.writeFile(tasksFilePath, jsonString, "utf8");
  } catch (error) {
    return "Error writing tasks:" + error;
  }
}

/**
 * Generate a unique ID for new tasks.
 * @returns {string} Unique ID string.
 */
function generateId() {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

export { readTasks, writeTasks, generateId };
