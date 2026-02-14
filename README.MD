# To-Do List Application

A file-based To-Do List web application built with Node.js, Express, EJS, and JSON storage.

## Project Status

Completed.

## Team Members

1. Shemaiah Yaba-Shiaka (@ShemaiahYaba) - Team Lead, Project Setup and Integration
2. Samuel Ola (@samuelola-dev) - Data Model and File Operations
3. Temitope Mercy (@temitope879) - Task Controller (Business Logic)
4. Iyanuoluwa Samuel James (@damife) - Routes Module
5. @DonBrains and ShemaiahYaba - EJS Views and Templates
6. @omonugrantdel, @Hikmah581, @ShemaiahYaba - Styling, Utilities, and Documentation

## Tech Stack

- Node.js
- Express.js
- EJS
- ES Modules
- JSON + fs/promises
- npm

## Repository

```bash
git clone https://github.com/ShemaiahYaba/Todo-App-TechCrush-Mini-Project.git
cd Todo-App-TechCrush-Mini-Project
```

## Installation and Run

```bash
npm install
npm start
```

For auto-restart in development:

```bash
npm run dev
```

Open: `http://localhost:3000`

## Features Implemented

- Create a task
- View all tasks
- Edit a task
- Delete a task
- Toggle task status (pending/completed)
- Filter tasks by status (All, Pending, Completed)
- LIFO default listing (newest first)
- Date separation in task list
- Priority support (low, medium, high)

## Data Storage

- Uses `data/tasks.json` as persistent storage
- Includes more than 20 sample tasks

Task object format:

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "status": "pending | completed",
  "priority": "low | medium | high",
  "createdAt": "ISO date string",
  "updatedAt": "ISO date string"
}
```

## Routes

- `GET /` - Show all tasks (supports `?status=pending` and `?status=completed`)
- `GET /add` - Show add task form
- `POST /add` - Create task
- `GET /edit/:id` - Show edit task form
- `POST /edit/:id` - Update task
- `GET /delete/:id` - Delete task
- `GET /toggle/:id` - Toggle task status

## Project Structure

```text
todo-app/
|-- app.js
|-- controllers/
|   `-- taskController.js
|-- models/
|   `-- taskModel.js
|-- routes/
|   `-- tasks.js
|-- views/
|   |-- index.ejs
|   |-- add.ejs
|   |-- edit.ejs
|   |-- 404.ejs
|   `-- partials/
|       |-- header.ejs
|       `-- footer.ejs
|-- public/
|   |-- css/style.css
|   `-- js/main.js
|-- utils/helpers.js
`-- data/tasks.json
```

## License

MIT License (educational use).

## Bootcamp

TechCrush Backend Engineering Track  
Deadline: February 14, 2026
