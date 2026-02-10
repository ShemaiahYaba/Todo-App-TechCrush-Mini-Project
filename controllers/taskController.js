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
  GET /tasks
  Get all tasks
*/
export async function getAllTasks(req, res) {
	try {
		const tasks = await readTasks();

		if (!Array.isArray(tasks)) {
			return res.status(200).json({
				success: true,
				data: [],
			});
		}

		res.status(200).json({
			success: true,
			data: tasks,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Something went wrong",
		});
	}
}

/*
  GET /tasks/:id
  Get one task
*/
export async function getTaskById(req, res) {
	try {
		const taskId = req.params.id;
		const task = await findTasksById(taskId);

		if (!task || typeof task === "string") {
			return res.status(404).json({
				success: false,
				message: "Task not found",
			});
		}

		res.status(200).json({
			success: true,
			data: task,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Error getting task",
		});
	}
}

/*
  POST /tasks
  Create a new task
*/
export async function createTask(req, res) {
	try {
		const title = req.body.title;
		const description = req.body.description;
		const priority = req.body.priority;

		if (!title || !description) {
			return res.status(400).json({
				success: false,
				message: "Title and description are required",
			});
		}

		if (
			priority !== "low" &&
			priority !== "medium" &&
			priority !== "high"
		) {
			return res.status(400).json({
				success: false,
				message: "Priority must be low, medium or high",
			});
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

		let tasks = await readTasks();

		if (!Array.isArray(tasks)) {
			tasks = [];
		}

		tasks.push(newTask);
		await writeTasks(tasks);

		res.status(201).json({
			success: true,
			message: "Task created",
			data: newTask,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Could not create task",
		});
	}
}

/*
  PUT /tasks/:id
  Update a task
*/
export async function updateTaskByController(req, res) {
	try {
		const taskId = req.params.id;
		const title = req.body.title;
		const description = req.body.description;
		const priority = req.body.priority;
		const status = req.body.status;

		if (!title || !description) {
			return res.status(400).json({
				success: false,
				message: "Title and description are required",
			});
		}

		if (
			priority !== "low" &&
			priority !== "medium" &&
			priority !== "high"
		) {
			return res.status(400).json({
				success: false,
				message: "Invalid priority",
			});
		}

		if (status !== "pending" && status !== "completed") {
			return res.status(400).json({
				success: false,
				message: "Invalid status",
			});
		}

		const task = await findTasksById(taskId);

		if (!task || typeof task === "string") {
			return res.status(404).json({
				success: false,
				message: "Task not found",
			});
		}

		await updateTask(taskId, {
			title: title,
			description: description,
			priority: priority,
			status: status,
		});

		res.status(200).json({
			success: true,
			message: "Task updated",
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Could not update task",
		});
	}
}

/*
  DELETE /tasks/:id
  Delete a task
*/
export async function deleteTaskByController(req, res) {
	try {
		const taskId = req.params.id;
		const result = await deleteTask(taskId);

		if (typeof result === "string" && result.includes("not found")) {
			return res.status(404).json({
				success: false,
				message: "Task not found",
			});
		}

		res.status(200).json({
			success: true,
			message: "Task deleted",
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Could not delete task",
		});
	}
}

/*
  PATCH /tasks/:id/toggle
  Toggle task status
*/
export async function toggleTaskStatus(req, res) {
	try {
		const taskId = req.params.id;
		const task = await findTasksById(taskId);

		if (!task || typeof task === "string") {
			return res.status(404).json({
				success: false,
				message: "Task not found",
			});
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

		res.status(200).json({
			success: true,
			message: "Task status changed",
			status: newStatus,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Could not change task status",
		});
	}
}
