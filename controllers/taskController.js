/* 
	controllers/taskController.js
	Description: Task controller - JSON API responses only
	Task done by Member 3 - Temitope Mercy
*/

import {
	readTasks,
	writeTasks,
	generateId,
	findTasksById,
	updateTask,
	deleteTask,
} from "../models/taskModel.js";

/*
  Helper function to normalize tasks data
  Handles both:
  []  OR  { tasks: [] }
*/
function getTaskArray(data) {
	if (Array.isArray(data)) {
		return data;
	}

	if (data && Array.isArray(data.tasks)) {
		return data.tasks;
	}

	return [];
}

/*
  GET /
  Display all tasks
*/
export async function getAllTasks(req, res) {
	try {
		const data = await readTasks();
		const tasks = getTaskArray(data);

		res.render("index", {
			title: "All Tasks",
			tasks: tasks,
		});
	} catch (error) {
		console.log("Error loading tasks:", error);
		res.status(500).send("Error loading tasks");
	}
}

/*
  GET /add
  Display add task form
*/
export function getAddTaskForm(req, res) {
	res.render("add", {
		title: "Add New Task",
	});
}

/*
  POST /add
  Create new task
*/
export async function createTask(req, res) {
	try {
		const title = req.body.title;
		const description = req.body.description;
		const priority = req.body.priority;

		if (!title || !description) {
			return res.status(400).send("Title and description are required");
		}

		if (
			priority !== "low" &&
			priority !== "medium" &&
			priority !== "high"
		) {
			return res.status(400).send("Invalid priority");
		}

		const newTask = {
			id: generateId(),
			title: title,
			description: description,
			priority: priority,
			status: "pending",
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		const data = await readTasks();
		const tasks = getTaskArray(data);

		tasks.push(newTask);

		// Save back in correct format
		if (data && data.tasks) {
			await writeTasks({ tasks: tasks });
		} else {
			await writeTasks(tasks);
		}

		// PRD requires redirect after action
		res.redirect("/");
	} catch (error) {
		console.log("Error creating task:", error);
		res.status(500).send("Error creating task");
	}
}

/*
  GET /edit/:id
  Display edit task form
*/
export async function getEditTaskForm(req, res) {
	try {
		const taskId = req.params.id;
		const task = await findTasksById(taskId);

		if (!task || typeof task === "string") {
			return res.status(404).send("Task not found");
		}

		res.render("edit", {
			title: "Edit Task",
			task: task,
		});
	} catch (error) {
		console.log("Error loading task:", error);
		res.status(500).send("Error loading task");
	}
}

/*
  POST /edit/:id
  Update task
*/
export async function updateTaskByController(req, res) {
	try {
		const taskId = req.params.id;
		const title = req.body.title;
		const description = req.body.description;
		const priority = req.body.priority;
		const status = req.body.status;

		if (!title || !description) {
			return res.status(400).send("Title and description are required");
		}

		if (
			priority !== "low" &&
			priority !== "medium" &&
			priority !== "high"
		) {
			return res.status(400).send("Invalid priority");
		}

		if (status !== "pending" && status !== "completed") {
			return res.status(400).send("Invalid status");
		}

		const task = await findTasksById(taskId);

		if (!task || typeof task === "string") {
			return res.status(404).send("Task not found");
		}

		await updateTask(taskId, {
			title: title,
			description: description,
			priority: priority,
			status: status,
		});

		// Redirect as required by PRD
		res.redirect("/");
	} catch (error) {
		console.log("Error updating task:", error);
		res.status(500).send("Error updating task");
	}
}

/*
  GET /delete/:id
  Delete task
*/
export async function deleteTaskByController(req, res) {
	try {
		const taskId = req.params.id;
		const result = await deleteTask(taskId);

		if (typeof result === "string" && result.includes("not found")) {
			return res.status(404).send("Task not found");
		}

		// Redirect after delete
		res.redirect("/");
	} catch (error) {
		console.log("Error deleting task:", error);
		res.status(500).send("Error deleting task");
	}
}

/*
  GET /toggle/:id
  Toggle task status
*/
export async function toggleTaskStatus(req, res) {
	try {
		const taskId = req.params.id;
		const task = await findTasksById(taskId);

		if (!task || typeof task === "string") {
			return res.status(404).send("Task not found");
		}

		let newStatus = "pending";
		if (task.status === "pending") {
			newStatus = "completed";
		}

		await updateTask(taskId, {
			title: task.title,
			description: task.description,
			priority: task.priority,
			status: newStatus,
		});

		res.redirect("/");
	} catch (error) {
		console.log("Error toggling task:", error);
		res.status(500).send("Error toggling task");
	}
}
