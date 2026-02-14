// app.js - Main Entry Point
// Created by: Member 1 (Team Lead)
// Description: Express server configuration and middleware setup

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// TODO: Uncomment this line after Member 4 creates the routes
// import taskRoutes from './routes/tasks.js';

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// ==================== MIDDLEWARE SETUP ====================

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (for API requests)
app.use(express.json());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// ==================== ROUTES ====================

app.use("/", taskRoutes);

// ==================== 404 HANDLER ====================

app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
  console.log("");
  console.log("============================================");
  console.log("TO-DO APP SERVER STARTED SUCCESSFULLY");
  console.log("============================================");
  console.log(`Server running at: http://localhost:${PORT}`);
  console.log(`Project directory: ${__dirname}`);
  console.log(`Started at: ${new Date().toLocaleString()}`);
  console.log("");
  console.log("Press Ctrl+C to stop the server");
  console.log("============================================");
  console.log("");
});
