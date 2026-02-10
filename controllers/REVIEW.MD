# Code Review: taskController.js

## ❌ Current Status: Needs Alignment with PRD

The controller logic handles the basic CRUD (Create, Read, Update, Delete) operations, but it needs to be updated to follow the project requirements and the concepts taught in class (Weeks 1-6).

Currently, the code is returning JSON data, but per the PRD, it must work with **EJS Templating** to display actual web pages.

---

## 🔍 Critical Feedback & Suggestions

### 1. JSON vs. EJS Rendering

- **Problem:** The controller uses `res.json()`.
- **Requirement:** According to the PRD (Section 4.1.1 and 4.2.1), we must use `res.render()` to pass data to our EJS files.
- **Fix:**
  - Change `res.json(tasks)` in `getAllTasks` to `res.render('index', { tasks, title: 'All Tasks' })`.
  - Ensure the data passed matches what the EJS templates expect.

### 2. Missing View Controllers (GET Routes)

- **Observation:** The PRD (Section 3.1.2 and 3.1.3) requires pages to **show** the forms.
- **Requirement:** You need to implement functions that simply render the pages for the user to see:
  - `getAddTaskForm`: Renders the `add.ejs` view.
  - `getEditTaskForm`: Finds the task by ID and renders the `edit.ejs` view with that task's data.

### 3. Navigation After Actions (Redirects)

- **Problem:** After creating, updating, or deleting a task, the controller currently sends a success message.
- **Requirement:** The PRD (Section 3.1.4) states that after a change, the app should **Redirect to the home page** (`res.redirect('/')`) so the user can see their updated list immediately.

### 4. Function Naming & Routes

- **Guidance:** Please follow the function names suggested in the PRD (Section 3.1).
- **Note:** If you choose different names for your functions, provide them clearly. The person handling the **Routes Module (Member 4)** will be responsible for updating the `routes/tasks.js` file to match whatever function names you use here, as long as the logic follows the PRD.

### 5. Data Structure Verification

- **Warning:** The PRD (Section 2.3) shows the `tasks.json` file as an object: `{"tasks": []}`.
- **Observation:** Your current logic treats it as a flat array: `[]`.
- **Action:** Check with **Member 2 (Data Model)** to ensure your controller logic matches the actual structure of the JSON file they created.

---

## 🛠️ Next Steps

1.  Replace `res.json()` with `res.render()` or `res.redirect('/')`.
2.  Add the functions to display the Add and Edit forms.
3.  Ensure you are only using class-approved methods (Express, EJS, path, etc.) as listed in the PRD constraints.
