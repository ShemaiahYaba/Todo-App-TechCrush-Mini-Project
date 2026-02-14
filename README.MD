# To-Do List Application

A simple file-based to-do list application built with Node.js, Express, and EJS.

## Team Members

1. **Shemaiah Yaba-Shiaka** - Project Setup & Core Infrastructure (Team Lead)
2. **Samuel Ola** - Data Model & File Operations
3. **Temitope Mercy** - Task Controller (Business Logic)
4. **Iyanuoluwa Samuel James** - Routes Module
5. **Damife** - EJS Views & Templates
6. **Shittu Iqmat Titilope** - Styling, Utilities & Documentation

## Technologies Used

- **Runtime:** Node.js
- **Framework:** Express.js
- **View Engine:** EJS
- **Module System:** ES Modules (ESM)
- **Data Storage:** JSON file with `fs` module
- **Package Manager:** npm
- **Version Control:** Git & GitHub

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ShemaiahYaba/Todo-App-TechCrush-Mini-Project.git
cd Todo-App-TechCrush-Mini-Project
```

2. Install dependencies:

```bash
   npm install
```

3. Start the server:

```bash
   npm start
```

4. Open your browser and navigate to: http://localhost:3000

## Project Status

✅ Day 1-2: Project setup complete  
🔄 Day 3-5: Data model and backend logic (in progress)  
⏳ Day 6-8: Routes and controllers  
⏳ Day 9-10: Views and styling  
⏳ Day 11-14: Integration, testing, and final documentation

## API Routes

- `GET /` - View all tasks
- `GET /add` - Display add task form
- `POST /add` - Create new task
- `GET /edit/:id` - Display edit task form
- `POST /edit/:id` - Update task
- `GET /delete/:id` - Delete task
- `GET /toggle/:id` - Toggle task status (pending/completed)

## Features

- ✅ Create tasks
- ✅ View all tasks
- ✅ Edit tasks
- ✅ Delete tasks
- ✅ Toggle task status
- ✅ Filter by status (Pending/Completed)
- ✅ Priority levels (Low/Medium/High)

## License

MIT License - Free to use for educational purposes.

---

**Deadline:** February 14, 2026  
**Bootcamp:** TechCrush Backend Engineering Track
