# To-Do List Application - Product Requirements Document (PRD)

**Project Name:** File-Based To-Do List Application  
**Team Size:** 6 Members  
**Deadline:** February 14, 2026  
**Team Lead:** [Your Name]

---

## 1. PROJECT OVERVIEW

### 1.1 Objective

Build a simple to-do list application that demonstrates CRUD operations, modular code organization, file-based data storage, and basic web routing concepts learned in the TechCrush Backend Engineering Track.

### 1.2 Constraints

- **No Database:** Use JSON files with Node.js `fs` module for data persistence
- **No AI-Generated Code:** All code must be manually written
- **Sample Data:** Minimum 20 initial tasks
- **Tech Stack:** Must use only concepts covered in class (Weeks 1-6)
- **Collaboration:** All 6 members must make meaningful commits
- **Documentation:** Comprehensive README required

### 1.3 Success Criteria

- Functional CRUD operations (Create, Read, Update, Delete)
- Clean, modular code structure
- All team members have visible commits in Git history
- Well-documented code and API
- Simple frontend with EJS templating
- Follows principles taught in class (DRY, KISS, SoC)

---

## 2. TECHNICAL ARCHITECTURE

### 2.1 Technology Stack (Class-Approved)

- **Runtime:** Node.js (Week 1)
- **Framework:** Express.js (Week 6)
- **Module System:** ES Modules (Week 5)
- **View Engine:** EJS (Week 6)
- **Data Storage:** JSON file with fs module (Week 6)
- **Package Manager:** npm (Week 4)
- **Version Control:** Git & GitHub (Week 5)

### 2.2 Project Structure

```
todo-app/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js (optional client-side JS)
├── views/
│   ├── index.ejs         (task list page)
│   ├── add.ejs           (add task form)
│   ├── edit.ejs          (edit task page)
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── routes/
│   └── tasks.js          (task routes module)
├── controllers/
│   └── taskController.js (business logic)
├── models/
│   └── taskModel.js      (data operations)
├── utils/
│   └── helpers.js        (utility functions)
├── data/
│   └── tasks.json        (data storage)
├── app.js                (main entry point)
├── package.json
├── .gitignore
└── README.md
```

### 2.3 Data Structure

**Task Object Schema:**

```javascript
{
  "id": "string (unique identifier)",
  "title": "string (task title)",
  "description": "string (task details)",
  "status": "string (pending/completed)",
  "priority": "string (low/medium/high)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

**tasks.json Example:**

```json
{
  "tasks": [
    {
      "id": "1",
      "title": "Complete Node.js assignment",
      "description": "Finish the ESM module assignment",
      "status": "pending",
      "priority": "high",
      "createdAt": "2026-02-01T10:00:00.000Z",
      "updatedAt": "2026-02-01T10:00:00.000Z"
    }
  ]
}
```

---

## 3. FEATURE REQUIREMENTS

### 3.1 Core Features (MUST HAVE)

#### 3.1.1 View All Tasks (READ)

- **Route:** `GET /`
- **Description:** Display all tasks in a list
- **UI Elements:**
  - Task title, description, status, priority
  - Edit and Delete buttons for each task
  - "Add New Task" button
  - Filter by status (All, Pending, Completed)
- **Concepts Used:** Express routing, EJS templating, fs.readFile

#### 3.1.2 Add New Task (CREATE)

- **Route:**
  - `GET /add` - Display form
  - `POST /add` - Process form submission
- **Description:** Form to create a new task
- **Form Fields:**
  - Title (required)
  - Description (required)
  - Priority (dropdown: low/medium/high)
- **Validation:**
  - Title must not be empty
  - Description must not be empty
- **Concepts Used:** Express routing, body parsing, fs.writeFile, EJS forms

#### 3.1.3 Edit Task (UPDATE)

- **Route:**
  - `GET /edit/:id` - Display edit form with existing data
  - `POST /edit/:id` - Process update
- **Description:** Edit existing task details
- **Concepts Used:** Route parameters, fs.readFile, fs.writeFile

#### 3.1.4 Delete Task (DELETE)

- **Route:** `GET /delete/:id`
- **Description:** Remove a task from the list
- **Behavior:**
  - Delete task from JSON file
  - Redirect to home page
- **Concepts Used:** Route parameters, array filtering, fs.writeFile

#### 3.1.5 Toggle Task Status

- **Route:** `GET /toggle/:id`
- **Description:** Toggle between pending and completed
- **Concepts Used:** Array manipulation, conditional logic

### 3.2 Sample Data Generation

- Create initial file with 20+ diverse tasks
- Mix of pending and completed tasks
- Variety of priorities
- Different creation dates

---

## 4. TECHNICAL REQUIREMENTS

### 4.1 Backend Requirements

#### 4.1.1 Express.js Setup

```javascript
// app.js structure
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import taskRoutes from "./routes/tasks.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use("/", taskRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

#### 4.1.2 File Operations (Using fs module)

- Use `fs.promises` for async file operations
- Implement error handling with try-catch
- Read entire file, modify in memory, write back

#### 4.1.3 Data Operations

- generateId() - Create unique IDs
- readTasks() - Read from JSON file
- writeTasks() - Write to JSON file
- findTaskById() - Find specific task
- updateTask() - Update task data
- deleteTask() - Remove task

#### 4.1.4 Input Validation

- Check for empty fields
- Validate priority values
- Validate status values

### 4.2 Frontend Requirements

#### 4.2.1 EJS Templates

- Use partials for header/footer
- Implement loops for task lists
- Use conditionals for status display
- Pass data from routes to views

#### 4.2.2 Styling (Basic CSS)

- Simple, clean design
- Responsive layout (optional but nice to have)
- Visual distinction for task priorities
- Different colors for pending/completed

#### 4.2.3 Forms

- Add task form with proper labels
- Edit task form pre-populated with existing data
- Client-side validation (HTML5 required attributes)

---

## 5. TASK DELEGATION (6 TEAM MEMBERS)

### 👤 **Member 1: Project Setup & Core Infrastructure** (Team Lead)

**Estimated Time:** 4-6 hours  
**Complexity:** Medium

**Responsibilities:**

1. Initialize project (`npm init -y`)
2. Install dependencies (express, ejs)
3. Create project folder structure
4. Set up `app.js` (main entry point)
5. Configure Express middleware
6. Set up EJS view engine
7. Create `.gitignore` file
8. Initialize Git repository
9. Create and push initial project structure to GitHub
10. Add all team members as collaborators
11. Final integration and testing
12. Lead code reviews

**Deliverables:**

- Working `app.js`
- Proper folder structure
- GitHub repository setup
- `package.json` configured with scripts
- `.gitignore` with node_modules, .env

**Files to Create:**

- `app.js`
- `package.json`
- `.gitignore`
- Basic folder structure

---

### 👤 **Member 2: Data Model & File Operations**

**Estimated Time:** 5-7 hours  
**Complexity:** Medium-High

**Responsibilities:**

1. Create `models/taskModel.js`
2. Implement file read/write operations using fs.promises
3. Create helper functions:
   - `readTasks()` - Read tasks from JSON
   - `writeTasks(tasks)` - Write tasks to JSON
   - `findTaskById(id)` - Find a specific task
   - `generateId()` - Generate unique task IDs
4. Implement error handling for file operations
5. Create initial `data/tasks.json` with 20+ sample tasks
6. Document all functions with JSDoc comments

**Deliverables:**

- `models/taskModel.js` with all CRUD helper functions
- `data/tasks.json` with 20+ sample tasks
- Comprehensive error handling
- Function documentation

**Key Concepts to Use:**

- ES Modules (import/export)
- fs.promises (readFile, writeFile)
- Async/await
- Error handling (try-catch)
- Array methods (find, filter, map)

**Sample Code Structure:**

```javascript
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tasksFilePath = path.join(__dirname, "../data/tasks.json");

export async function readTasks() {
  // Implementation
}

export async function writeTasks(tasks) {
  // Implementation
}

// ... more functions
```

---

### 👤 **Member 3: Task Controller (Business Logic)**

**Estimated Time:** 5-6 hours  
**Complexity:** Medium

**Responsibilities:**

1. Create `controllers/taskController.js`
2. Implement controller functions for all operations:
   - `getAllTasks(req, res)` - Get and render all tasks
   - `getAddTaskForm(req, res)` - Render add form
   - `createTask(req, res)` - Process new task creation
   - `getEditTaskForm(req, res)` - Render edit form
   - `updateTask(req, res)` - Process task update
   - `deleteTask(req, res)` - Handle task deletion
   - `toggleTaskStatus(req, res)` - Toggle completion status
3. Implement input validation
4. Handle errors and edge cases
5. Use model functions for data operations

**Deliverables:**

- `controllers/taskController.js` with all controller functions
- Proper error handling
- Input validation for all forms
- Appropriate HTTP status codes

**Key Concepts to Use:**

- Async/await
- Request/response handling
- Input validation
- Error handling
- Array manipulation

**Sample Code Structure:**

```javascript
import * as TaskModel from "../models/taskModel.js";

export async function getAllTasks(req, res) {
  try {
    const tasks = await TaskModel.readTasks();
    res.render("index", { tasks, title: "All Tasks" });
  } catch (error) {
    res.status(500).send("Error loading tasks");
  }
}

// ... more controller functions
```

---

### 👤 **Member 4: Routes Module**

**Estimated Time:** 4-5 hours  
**Complexity:** Low-Medium

**Responsibilities:**

1. Create `routes/tasks.js`
2. Set up Express Router
3. Define all application routes:
   - `GET /` - View all tasks
   - `GET /add` - Display add form
   - `POST /add` - Create new task
   - `GET /edit/:id` - Display edit form
   - `POST /edit/:id` - Update task
   - `GET /delete/:id` - Delete task
   - `GET /toggle/:id` - Toggle task status
4. Connect routes to controller functions
5. Test all routes with Postman or browser

**Deliverables:**

- `routes/tasks.js` with all routes
- Proper use of HTTP methods (GET, POST)
- Route parameters for dynamic routes
- Import and use controller functions

**Key Concepts to Use:**

- Express Router
- Route methods (get, post)
- Route parameters (`:id`)
- Middleware usage

**Sample Code Structure:**

```javascript
import express from "express";
import * as taskController from "../controllers/taskController.js";

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.get("/add", taskController.getAddTaskForm);
router.post("/add", taskController.createTask);
// ... more routes

export default router;
```

---

### 👤 **Member 5: EJS Views & Templates**

**Estimated Time:** 6-7 hours  
**Complexity:** Medium

**Responsibilities:**

1. Create all EJS view files:
   - `views/index.ejs` - Task list page
   - `views/add.ejs` - Add task form
   - `views/edit.ejs` - Edit task form
   - `views/404.ejs` - Error page
2. Create reusable partials:
   - `views/partials/header.ejs`
   - `views/partials/footer.ejs`
3. Implement dynamic content rendering
4. Use EJS syntax (loops, conditionals)
5. Create forms with proper action/method attributes
6. Ensure proper data binding from controllers

**Deliverables:**

- All EJS view files
- Reusable header/footer partials
- Forms with proper structure
- Dynamic data rendering

**Key Concepts to Use:**

- EJS templating syntax (`<%= %>`, `<%- %>`, `<% %>`)
- Loops (`forEach`)
- Conditionals (if/else)
- Partials inclusion

**Sample Code Structure (index.ejs):**

```html
<%- include('partials/header') %>

<h1><%= title %></h1>

<a href="/add">Add New Task</a>

<ul>
  <% tasks.forEach(task => { %>
  <li>
    <strong><%= task.title %></strong>
    <p><%= task.description %></p>
    <p>Status: <%= task.status %></p>
    <p>Priority: <%= task.priority %></p>
    <a href="/edit/<%= task.id %>">Edit</a>
    <a href="/delete/<%= task.id %>">Delete</a>
    <a href="/toggle/<%= task.id %>">Toggle Status</a>
  </li>
  <% }) %>
</ul>

<%- include('partials/footer') %>
```

---

### 👤 **Member 6: Styling, Utilities & Documentation**

**Estimated Time:** 5-6 hours  
**Complexity:** Low-Medium

**Responsibilities:**

1. Create `public/css/styles.css`
2. Style all pages with clean, simple CSS:
   - Task list styling
   - Form styling
   - Button styling
   - Color coding for priorities and status
3. Create `utils/helpers.js` with utility functions:
   - `formatDate(date)` - Format date strings
   - `capitalizeFirst(str)` - Capitalize first letter
   - Any other helper functions needed
4. Write comprehensive `README.md`:
   - Project description
   - Installation instructions
   - How to run the application
   - API documentation (routes)
   - Team member contributions
   - Technologies used
5. Add code comments where needed

**Deliverables:**

- `public/css/styles.css`
- `utils/helpers.js`
- Comprehensive `README.md`
- Code documentation

**Key Concepts to Use:**

- CSS styling
- Pure functions
- Markdown documentation
- Code commenting

**README.md Structure:**

```markdown
# To-Do List Application

## Description

A simple file-based to-do list application built with Node.js and Express.

## Team Members

1. [Name] - Project Setup & Core Infrastructure
2. [Name] - Data Model & File Operations
3. [Name] - Task Controller
4. [Name] - Routes Module
5. [Name] - EJS Views
6. [Name] - Styling & Documentation

## Technologies Used

- Node.js
- Express.js
- EJS
- ES Modules
- File System (fs)

## Installation

1. Clone the repository
2. Run `npm install`
3. Start server with `npm start`

## API Routes

- GET / - View all tasks
- GET /add - Add task form
- POST /add - Create task
  ... etc

## Features

- Create tasks
- View all tasks
- Edit tasks
- Delete tasks
- Toggle task status
- Filter by status
```

---

## 6. WORKFLOW & COLLABORATION

### 6.1 Git Workflow

1. **Team Lead** creates repository and adds collaborators
2. All members clone the repository
3. Each member creates a branch for their work:
   ```bash
   git checkout -b feature/member-name-task
   ```
4. After completing task, commit with meaningful messages:
   ```bash
   git add .
   git commit -m "Add task model with file operations"
   git push origin feature/member-name-task
   ```
5. Create pull request on GitHub
6. Team lead reviews and merges
7. All members pull latest changes before starting new work

### 6.2 Communication Plan

- Daily check-ins (or every 2 days)
- Share progress in team chat
- Ask questions when stuck
- Code reviews before merging

### 6.3 Timeline (Before Feb 14)

**Week 1 (Feb 1-5):**

- Member 1: Setup project structure
- Member 2: Create data model
- Members 3, 4, 5, 6: Study codebase, understand structure

**Week 2 (Feb 6-10):**

- Member 3: Build controllers
- Member 4: Create routes
- Member 5: Build views
- Member 6: Start on styling and helpers

**Week 3 (Feb 11-14):**

- Integration testing
- Bug fixes
- Documentation finalization
- Final code review
- Submission preparation

---

## 7. TESTING CHECKLIST

### 7.1 Functional Testing

- [ ] Can view all tasks
- [ ] Can add a new task
- [ ] Can edit an existing task
- [ ] Can delete a task
- [ ] Can toggle task status
- [ ] Form validation works
- [ ] Error handling works
- [ ] All 20+ sample tasks load correctly

### 7.2 Code Quality

- [ ] Code is modular (separate files for different concerns)
- [ ] No code repetition (DRY principle)
- [ ] Functions are small and focused (KISS principle)
- [ ] Proper error handling throughout
- [ ] Meaningful variable and function names
- [ ] Comments where necessary

### 7.3 Git & Collaboration

- [ ] All 6 members have commits
- [ ] Commit messages are meaningful
- [ ] No node_modules in repository
- [ ] .gitignore properly configured

### 7.4 Documentation

- [ ] README.md is comprehensive
- [ ] API routes documented
- [ ] Installation instructions clear
- [ ] Team contributions listed

---

## 8. COMMON PITFALLS TO AVOID

1. **Don't use require()** - Use ES Modules (import/export)
2. **Don't forget error handling** - Wrap file operations in try-catch
3. **Don't hardcode file paths** - Use `path.join()` and `__dirname`
4. **Don't mutate original data** - Create copies when modifying
5. **Don't forget async/await** - File operations are asynchronous
6. **Don't skip validation** - Always validate user input
7. **Don't commit node_modules** - Use .gitignore
8. **Don't use complex packages** - Stick to what was taught in class

---

## 9. CONCEPTS REVIEW (CLASS COVERAGE)

### From Week 1-2: JavaScript Fundamentals

- Variables (let, const)
- Data types (strings, numbers, objects, arrays)
- Functions (arrow functions, regular functions)
- Loops (for, forEach)
- Conditionals (if/else, switch)
- Objects and arrays manipulation

### From Week 3: OOP & Advanced JS

- Classes (can use for organizing code if needed)
- Array methods (map, filter, find, forEach)
- Object methods (Object.keys, Object.values)

### From Week 4: NPM & Modules

- package.json configuration
- Installing packages (npm install)
- Using third-party modules
- Creating custom modules
- Exporting and importing

### From Week 5: ESM & Git

- ES Modules (import/export)
- import.meta.url for \_\_dirname
- Git commands (init, add, commit, push, pull)
- GitHub collaboration
- Branching and merging

### From Week 6: HTTP & Express

- Express.js basics
- Routing (GET, POST)
- Middleware (express.urlencoded, express.static)
- EJS templating
- fs module for file operations
- Serving static files
- Route parameters (:id)

---

## 10. GRADING CRITERIA (EXPECTATIONS)

1. **Functionality (40%)**
   - All CRUD operations work
   - No crashes or errors
   - Sample data loads correctly

2. **Code Quality (25%)**
   - Modular structure
   - Clean, readable code
   - Proper error handling
   - Follows class concepts

3. **Documentation (20%)**
   - Comprehensive README
   - Code comments
   - Clear API documentation

4. **Collaboration (15%)**
   - All members have commits
   - Visible in Git history
   - Meaningful contributions

---

## APPENDIX: QUICK START COMMANDS

```bash
# Initialize project
npm init -y

# Install dependencies
npm install express ejs

# Update package.json to add:
{
  "type": "module",
  "scripts": {
    "start": "node app.js"
  }
}

# Run the application
npm start

# Git commands
git init
git add .
git commit -m "Initial commit"
git remote add origin <repository-url>
git push -u origin main
```

---

**Good luck team! Remember: Keep it simple, stay within class concepts, and make sure everyone contributes!**
