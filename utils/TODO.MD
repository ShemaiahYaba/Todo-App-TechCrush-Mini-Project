# Team Participant Tasks �️

These tasks are designed to help team members contribute directly to the project's core requirements. Completing these will help the project meet the **PRD requirements** and **Grading Criteria**.

---

## 📋 Core Validation Tasks

_These are required for the "Input Validation" part of the PRD (Section 4.1.4)._

### 1. `isValidPriority(priority)`

- **Goal:** Check if the priority typed by the user is exactly "low", "medium", or "high".
- **Why:** To prevent wrong data from being saved to `tasks.json`.
- **Concept:** Weeks 1-2: Logic and Arrays.

### 2. `isValidStatus(status)`

- **Goal:** Check if the status is exactly "pending" or "completed".
- **Why:** To ensure our status toggle logic doesn't break.
- **Concept:** Weeks 1-2: Logic and Arrays.

---

## 📋 Core Feature Tasks

_These are required for the features listed in Section 3 of the PRD._

### 3. `filterTasksByStatus(tasks, status)`

- **Goal:** Filter the list of tasks based on whether the user wants to see "All", "Pending", or "Completed".
- **Why:** The PRD (Section 3.1.1) requires a filter feature.
- **Concept:** Week 3: The `.filter()` array method.

### 4. `sortTasksByDate(tasks)`

- **Goal:** Sort the tasks so the newest ones appear at the top of the list.
- **Why:** Improves the "View All Tasks" experience (Section 3.1.1).
- **Concept:** Week 3: The `.sort()` array method.

---

## 📋 Data Presentation Tasks

_These help with "Rendering tasks with EJS" (Grading Point #4)._

### 5. `getTaskStats(tasks)`

- **Goal:** Calculate how many tasks are Total, Pending, and Completed.
- **Why:** To show a summary at the top of our homepage.
- **Concept:** Week 2: Objects and Loops.

---

## How to Contribute:

1. Choose a task from this list.
2. Open `utils/helpers.js` and find the matching function.
3. Write your code, test it, and push your changes!
