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

/**
 * Write tasks to tasks.json
 * @param {Array} tasks - Array of task objects
 * @returns {Promise<void>}
 */
export async function writeTasks(tasks) {
  try {
    const data = { tasks };
    const jsonString = JSON.stringify(data, null, 2);
    await fs.writeFile(tasksFilePath, jsonString, "utf8");
  } catch (error) {
    console.error("Error writing tasks:", error);
    throw error;
  }
}

// Get tasks from data/tasks.json

function readTasks() {
  try {
    const tasksJSON = fs.readFileSync(tasksFilePath, "utf-8");
    const tasksData = JSON.parse(tasksJSON);

    // Return an Object of tasks
    return tasksData;
  } catch (error) {
    return "File doesn't exist";
  }
}

export default { readTasks, writeTasks };
