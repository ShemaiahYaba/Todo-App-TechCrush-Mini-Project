# Team Workflow & Communication Guide

## 📱 Daily Check-ins

### When

- **Time:** 8:00 PM daily (or adjust based on team availability)
- **Platform:** WhatsApp/Telegram/Discord (team's choice)

### What to Share

1. ✅ What you completed today
2. 🔄 What you're working on next
3. ❌ Any blockers or questions
4. 💡 Any insights or learnings

### Example Check-in Message

```
Today (Feb 3):
✅ Completed data model functions (readTasks, writeTasks)
✅ Created 22 sample tasks in tasks.json
🔄 Tomorrow: Will test the functions and fix any bugs
❌ No blockers
```

---

## 🌿 Git Workflow

### Step 1: Pull Latest Changes (ALWAYS DO THIS FIRST!)

```bash
git pull origin main
```

### Step 2: Create Your Feature Branch

```bash
git checkout -b feature/member-name-task
```

**Examples:**

- `feature/john-data-model`
- `feature/sarah-controllers`
- `feature/mike-views`

### Step 3: Work on Your Task

- Make your changes
- Test your code
- Make sure it works!

### Step 4: Commit Your Work

```bash
# Check what files you changed
git status

# Add files to staging
git add .

# Commit with a meaningful message
git commit -m "Add task model with file read/write operations"
```

#### Good Commit Messages:

- ✅ "Add data model functions for CRUD operations"
- ✅ "Create EJS templates for task views"
- ✅ "Implement task controller with validation"
- ❌ "Update files" (too vague)
- ❌ "Fix bug" (what bug?)
- ❌ "asdfgh" (meaningless)

### Step 5: Push Your Branch

```bash
git push origin feature/member-name-task
```

### Step 6: Create Pull Request on GitHub

1. Go to the repository on GitHub
2. Click "Pull requests" tab
3. Click "New pull request"
4. Select your branch
5. Add a description of what you did
6. Click "Create pull request"

### Step 7: Wait for Review

- Team lead will review your code
- May request changes
- Once approved, it will be merged

### Step 8: After Merge, Pull Latest Changes

```bash
git checkout main
git pull origin main
```

---

## 👥 Current Assignments

| Member               | Task                         | Status         | Start Date | Expected Completion |
| -------------------- | ---------------------------- | -------------- | ---------- | ------------------- |
| Member 1 (Team Lead) | Project setup                | ✅ Complete    | Day 1      | Day 2               |
| Member 2             | Data model & file operations | 🔄 In Progress | Day 3      | Day 5               |
| Member 3             | Controllers                  | ⏳ Waiting     | Day 5      | Day 7               |
| Member 4             | Routes                       | ⏳ Waiting     | Day 7      | Day 8               |
| Member 5             | Views/Templates              | 🆗 Can Start   | Day 3      | Day 10              |
| Member 6             | Styling/Utils/Docs           | 🆗 Can Start   | Day 3      | Day 10              |

### Legend:

- ✅ Complete
- 🔄 In Progress
- ⏳ Waiting (blocked by another task)
- 🆗 Can Start (independent task)

---

## 🚫 Critical Dependencies

### Member 3 DEPENDS ON Member 2

Member 3 cannot start until Member 2 completes the data model functions.

### Member 4 DEPENDS ON Member 3

Member 4 cannot start until Member 3 completes the controllers.

### Members 5 & 6 Are Independent

Members 5 and 6 can work in parallel and don't block anyone.

---

## ❓ When You're Stuck

### Step 1: Check Resources

1. Review the class slides (Weeks 1-6)
2. Check the TODO comments in your files
3. Look at the PRD document
4. Search Google for the error message

### Step 2: Ask the Team

- Post in the team group chat
- Be specific: "I'm getting this error when..."
- Share code snippet if needed
- Share screenshot of error

### Step 3: Ask the Tutor

- During office hours
- Via email/Slack
- Provide context and what you've tried

---

## 🚨 Important Reminders

### ⚠️ DO's

- ✅ Test your code before pushing
- ✅ Write meaningful commit messages
- ✅ Comment your code
- ✅ Ask questions when stuck
- ✅ Pull latest changes before starting work
- ✅ Use ES Modules (`import`/`export`)
- ✅ Follow the folder structure
- ✅ Keep functions small and focused

### ❌ DON'Ts

- ❌ **NO AI-GENERATED CODE** (ChatGPT, Copilot, etc.)
- ❌ Don't use `require()` - Use `import`
- ❌ Don't push to `main` directly - Use branches
- ❌ Don't commit `node_modules/` folder
- ❌ Don't hardcode file paths
- ❌ Don't skip error handling
- ❌ Don't work on someone else's task without coordinating

---

## 📞 Communication Channels

### For Quick Questions

- Team WhatsApp/Telegram group

### For Code Reviews

- GitHub Pull Requests
- Comment on specific lines

### For Meetings

- Video call (if needed)
- Scheduled via group chat

---

## 🎯 Quality Standards

Before marking your task as "complete":

### Code Quality

- [ ] Code works without errors
- [ ] Code is properly commented
- [ ] No console errors
- [ ] Follows class concepts
- [ ] Uses ES Modules correctly

### Testing

- [ ] Tested locally
- [ ] Tested all edge cases
- [ ] No obvious bugs

### Documentation

- [ ] Updated README if needed
- [ ] Added JSDoc comments (for functions)
- [ ] Clear variable names

---

## 🏆 Success Criteria

### For Individual Tasks

- Code works as expected
- Follows team conventions
- Well-documented
- Passes code review

### For Overall Project

- All CRUD operations work
- No crashes or errors
- All team members have meaningful commits
- Code is modular and clean
- Documentation is complete

---

## 🗓️ Timeline Reminders

| Date   | Milestone                       |
| ------ | ------------------------------- |
| Feb 2  | Project setup complete          |
| Feb 5  | Data model complete             |
| Feb 8  | Controllers & routes complete   |
| Feb 10 | Views complete                  |
| Feb 12 | Styling complete                |
| Feb 14 | **DEADLINE - Final submission** |

---

## 💡 Tips for Success

1. **Start Early** - Don't wait until the last minute
2. **Communicate Often** - Keep the team updated
3. **Test Frequently** - Test as you code, not just at the end
4. **Ask Questions** - There are no stupid questions
5. **Help Others** - If you finish early, help teammates
6. **Stay Organized** - Keep your code clean and organized
7. **Have Fun!** - This is a learning experience

---

## 📝 Task Handoff Protocol

### When You Complete Your Task:

1. **Test Everything**
   - Run the server
   - Test your functionality
   - Check for errors

2. **Commit and Push**
   - Commit your final changes
   - Push to your branch

3. **Create Pull Request**
   - Add clear description
   - Tag team lead for review

4. **Notify Next Person**
   - If someone is waiting on you, let them know you're done
   - Example: "@Member3 - Data model is complete! You can start on controllers now."

5. **Update Status**
   - Update the team tracking doc
   - Mark your task as complete

---

**Remember: We're a team! Success depends on everyone doing their part and communicating well.**

Good luck, team! 🚀
