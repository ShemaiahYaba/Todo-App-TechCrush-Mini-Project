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


// Write tasks to data/tasks.json

async function writeTasks(tasks) {
  try {
      const data = { tasks };
      const jsonString = JSON.stringify(data, null, 2);
      await fs.writeFile(tasksFilePath, jsonString, "utf8");
  } catch (error) {
      return "Error writing tasks:" + error;
  }
}


// Get tasks from data/tasks.json

async function readTasks() {
  try {
    const tasks = await fs.readFile(tasksFilePath, 'utf-8');
    const tasksData = JSON.parse(tasks);
    return tasksData;

  } catch (error) {
    return "File doesn't exist";
  }
}


export default { readTasks, writeTasks };

