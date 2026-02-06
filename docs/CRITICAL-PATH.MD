# CRITICAL PATH ANALYSIS - TO-DO LIST PROJECT

## Task Dependencies & Optimal Workflow Sequence

---

## EXECUTIVE SUMMARY

**Critical Path Duration:** 10-12 days  
**Parallel Work Opportunities:** High (4 members can work simultaneously after Day 3)  
**Key Bottleneck:** Member 1's project setup (blocks everyone)  
**Second Bottleneck:** Member 2's data model (blocks Members 3 & 4)

---

## DEPENDENCY TREE VISUALIZATION

```
DAY 1-2: Foundation Layer (BLOCKER)
┌─────────────────────────────────────┐
│  Member 1: Project Setup            │ ← MUST BE COMPLETED FIRST
│  - npm init                          │
│  - folder structure                  │
│  - app.js skeleton                   │
│  - GitHub repo + add collaborators   │
└─────────────────────────────────────┘
                 │
                 ▼
    ┌────────────┴────────────┐
    │                         │
    ▼                         ▼
DAY 3-5: Core Logic Layer
┌──────────────────────┐  ┌──────────────────────┐
│ Member 2: Data Model │  │ Member 6: Utils      │
│ - taskModel.js       │  │ - helpers.js         │
│ - tasks.json (20+)   │  │ - formatDate()       │
│ - CRUD functions     │  │ (can start early)    │
└──────────────────────┘  └──────────────────────┘
         │
         ▼
DAY 5-7: Business Logic & Routing Layer
┌──────────────────────┐
│ Member 3: Controller │  ← DEPENDS ON Member 2
│ - taskController.js  │
│ - all CRUD logic     │
└──────────────────────┘
         │
         ├──────────────────┐
         ▼                  ▼
┌──────────────────────┐  ┌──────────────────────┐
│ Member 4: Routes     │  │ Member 5: Views      │
│ - tasks.js           │  │ - index.ejs          │
│ - connect to ctrl    │  │ - add.ejs, edit.ejs  │
└──────────────────────┘  └──────────────────────┘
         │                  │
         └────────┬─────────┘
                  ▼
DAY 8-10: Integration & Polish
┌─────────────────────────────────────┐
│  Member 1: Integration               │
│  + Member 6: Styling & Docs          │
│  - Connect all pieces                │
│  - CSS styling                       │
│  - README.md                         │
└─────────────────────────────────────┘
                  │
                  ▼
DAY 11-12: Testing & Submission
┌─────────────────────────────────────┐
│  ALL MEMBERS: Final Review           │
│  - Testing                           │
│  - Bug fixes                         │
│  - Documentation review              │
└─────────────────────────────────────┘
```

---

## PHASE BREAKDOWN WITH BLOCKING TASKS

### 🔴 PHASE 1: FOUNDATION (Days 1-2) - CRITICAL BLOCKER

**Must be completed before anyone else can start**

| Member       | Task                                                          | Blocks Who | Priority    |
| ------------ | ------------------------------------------------------------- | ---------- | ----------- |
| **Member 1** | Project setup, folder structure, app.js skeleton, GitHub repo | EVERYONE   | 🔴 CRITICAL |

**Why it blocks everyone:**

- No one can clone the repo until it's created
- Can't install dependencies without package.json
- Can't create files without folder structure
- Can't test anything without basic app.js

**Deliverables before Phase 2 starts:**

```
✓ GitHub repo created
✓ All members added as collaborators
✓ Basic folder structure pushed:
  - routes/ (empty)
  - controllers/ (empty)
  - models/ (empty)
  - views/ (empty)
  - public/css/ (empty)
  - utils/ (empty)
  - data/ (empty)
✓ package.json with:
  - "type": "module"
  - express dependency
  - ejs dependency
  - start script
✓ Basic app.js with:
  - Express setup
  - EJS configured
  - Port 3000 listening
  - Middleware configured
✓ .gitignore
```

**Member 1's Phase 1 Checklist:**

```bash
# Day 1 Morning
□ npm init -y
□ npm install express ejs
□ Create all folders
□ Create basic app.js
□ Create .gitignore
□ git init
□ git add .
□ git commit -m "Initial project setup"

# Day 1 Afternoon
□ Create GitHub repo
□ git remote add origin <url>
□ git push -u origin main
□ Add all 5 team members as collaborators
□ Send repo link to team
□ Confirm everyone can clone

# Day 2
□ Help team members with any setup issues
□ Review folder structure with team
□ Create basic app.js comments showing where routes will go
□ Push final version
□ GREEN LIGHT for Phase 2
```

---

### 🟡 PHASE 2: DATA LAYER (Days 3-5) - MODERATE BLOCKER

**Can start after Phase 1. Blocks Members 3 & 4**

| Member       | Task                                     | Blocks Who   | Can Start After  | Priority |
| ------------ | ---------------------------------------- | ------------ | ---------------- | -------- |
| **Member 2** | Data model, file operations, sample data | Members 3, 4 | Phase 1 complete | 🟡 HIGH  |
| **Member 6** | Helper utilities                         | No one       | Phase 1 complete | 🟢 LOW   |

**Why Member 2 blocks Members 3 & 4:**

- Controllers (Member 3) need to import from taskModel.js
- Routes (Member 4) need controllers to work
- Can't test without sample data in tasks.json

**Member 2's Critical Deliverables:**

```javascript
// models/taskModel.js - MUST BE READY BY END OF DAY 5

export async function readTasks() { ... }       // ← Member 3 needs this
export async function writeTasks(tasks) { ... } // ← Member 3 needs this
export function generateId() { ... }            // ← Member 3 needs this
export async function findTaskById(id) { ... }  // ← Member 3 needs this

// data/tasks.json - MUST EXIST BY END OF DAY 5
{
  "tasks": [ ... 20+ tasks ... ]
}
```

**Member 2's Phase 2 Checklist:**

```bash
# Day 3
□ git pull origin main
□ git checkout -b feature/data-model
□ Create models/taskModel.js
□ Implement readTasks() function
□ Implement writeTasks() function
□ Test with console.log

# Day 4
□ Implement generateId() function
□ Implement findTaskById() function
□ Create data/tasks.json with 20+ diverse tasks
□ Test all functions independently
□ Add JSDoc comments

# Day 5
□ Final testing of all functions
□ Push to GitHub
□ Create pull request
□ Message Member 3: "Data model ready for you"
□ GREEN LIGHT for Phase 3
```

**Member 6 (Parallel Work):**

- Can start on utilities immediately after Phase 1
- NOT blocking anyone
- Low priority but good to get done early

---

### 🟠 PHASE 3: BUSINESS LOGIC (Days 5-7) - MODERATE BLOCKER

**Can start after Phase 2. Blocks Member 4**

| Member       | Task                    | Blocks Who      | Can Start After  | Priority       |
| ------------ | ----------------------- | --------------- | ---------------- | -------------- |
| **Member 3** | Controllers             | Member 4        | Member 2 done    | 🟠 MEDIUM-HIGH |
| **Member 5** | Views (can start early) | No one (mostly) | Phase 1 complete | 🟢 MEDIUM      |

**Why Member 3 blocks Member 4:**

- Routes need to import controller functions
- Can't test routes without working controllers

**Member 3's Critical Deliverables:**

```javascript
// controllers/taskController.js - MUST BE READY BY END OF DAY 7

export async function getAllTasks(req, res) { ... }     // ← Member 4 needs
export async function getAddTaskForm(req, res) { ... }  // ← Member 4 needs
export async function createTask(req, res) { ... }      // ← Member 4 needs
export async function getEditTaskForm(req, res) { ... } // ← Member 4 needs
export async function updateTask(req, res) { ... }      // ← Member 4 needs
export async function deleteTask(req, res) { ... }      // ← Member 4 needs
export async function toggleTaskStatus(req, res) { ... } // ← Member 4 needs
```

**Member 3's Phase 3 Checklist:**

```bash
# Day 5 Evening (after Member 2 is done)
□ git pull origin main
□ git merge origin/feature/data-model (or wait for merge)
□ git checkout -b feature/controllers
□ Create controllers/taskController.js
□ Import taskModel functions
□ Implement getAllTasks() - test it works

# Day 6
□ Implement getAddTaskForm()
□ Implement createTask() with validation
□ Implement getEditTaskForm()
□ Implement updateTask()
□ Test each function as you go

# Day 7
□ Implement deleteTask()
□ Implement toggleTaskStatus()
□ Add error handling to all functions
□ Test all functions
□ Push to GitHub
□ Message Member 4: "Controllers ready"
□ GREEN LIGHT for Phase 4
```

**Member 5 (Parallel Work):**

- Can start creating basic EJS templates early
- Will need to update templates later when data structure is finalized
- NOT a critical blocker

**Member 5's Smart Approach:**

```bash
# Days 3-5 (while waiting for full data structure)
□ Create views/partials/header.ejs (basic structure)
□ Create views/partials/footer.ejs (basic structure)
□ Create views/404.ejs (doesn't need data)
□ Create basic HTML structure for index.ejs (will populate later)

# Days 6-8 (after seeing taskModel.js structure)
□ Update index.ejs with real task properties
□ Create add.ejs with form
□ Create edit.ejs with pre-filled form
□ Test with controller functions
```

---

### 🟢 PHASE 4: ROUTING & INTEGRATION (Days 7-8)

**Can start after Phase 3. NOT blocking anyone**

| Member       | Task   | Blocks Who | Can Start After | Priority  |
| ------------ | ------ | ---------- | --------------- | --------- |
| **Member 4** | Routes | No one     | Member 3 done   | 🟢 MEDIUM |

**Member 4's Phase 4 Checklist:**

```bash
# Day 7 Evening (after Member 3 is done)
□ git pull origin main
□ git checkout -b feature/routes
□ Create routes/tasks.js
□ Import controller functions
□ Set up Express Router

# Day 8 Morning
□ Create all GET routes
□ Create all POST routes
□ Test each route individually
□ Export router

# Day 8 Afternoon
□ Test full routing flow
□ Handle 404s
□ Push to GitHub
□ Message Member 1: "Routes ready for integration"
```

---

### 🔵 PHASE 5: INTEGRATION & POLISH (Days 8-10)

**Requires EVERYTHING from Phases 1-4**

| Member       | Task                                            | Can Start After      | Priority    |
| ------------ | ----------------------------------------------- | -------------------- | ----------- |
| **Member 1** | Integrate all modules, connect routes to app.js | Members 2, 3, 4 done | 🔴 CRITICAL |
| **Member 6** | Final styling, README.md                        | Most code done       | 🟢 MEDIUM   |

**Member 1's Integration Checklist:**

```bash
# Day 8-9
□ Pull all feature branches
□ Merge routes into app.js
□ Test entire application flow
□ Fix integration bugs
□ Test all CRUD operations
□ Verify 20+ sample tasks load

# Day 9-10
□ Code cleanup
□ Remove console.logs
□ Verify .gitignore
□ Final testing
□ Help Member 6 with any issues
```

**Member 6's Final Phase Checklist:**

```bash
# Day 9
□ Create public/css/styles.css
□ Style all pages
□ Test on different screen sizes
□ Color-code priorities and status

# Day 10
□ Write comprehensive README.md
□ Document all routes
□ List team contributions
□ Add installation instructions
□ Add screenshots (optional)
```

---

### ⚫ PHASE 6: FINAL REVIEW (Days 11-12)

**ALL MEMBERS - No blockers, everyone participates**

```bash
# Day 11
□ Full application testing (all members)
□ Each member tests their own component
□ Cross-test other components
□ Create list of bugs
□ Assign bug fixes

# Day 12
□ Fix all bugs
□ Final code review
□ Update README if needed
□ Verify all members have commits
□ Final push to GitHub

# Day 13 (Buffer day)
□ Final final testing
□ Prepare submission

# Day 14 - SUBMISSION DEADLINE
□ Submit project
```

---

## OPTIMAL WORKFLOW SEQUENCE

### ✅ RECOMMENDED TIMELINE

| Days      | Member 1                          | Member 2                | Member 3                 | Member 4             | Member 5                 | Member 6                |
| --------- | --------------------------------- | ----------------------- | ------------------------ | -------------------- | ------------------------ | ----------------------- |
| **1-2**   | 🔴 Setup (BLOCKER)                | ⏸️ Wait                 | ⏸️ Wait                  | ⏸️ Wait              | ⏸️ Wait                  | ⏸️ Wait                 |
| **3-5**   | ✅ Support team                   | 🟡 Data model (BLOCKER) | ⏸️ Wait for Member 2     | ⏸️ Wait for Member 3 | 🟢 Start basic templates | 🟢 Create helpers       |
| **5-7**   | ✅ Support team                   | ✅ Done                 | 🟠 Controllers (BLOCKER) | ⏸️ Wait for Member 3 | 🟢 Build views           | ✅ Done                 |
| **7-8**   | ✅ Support team                   | ✅ Done                 | ✅ Done                  | 🟢 Routes            | 🟢 Finalize views        | ⏸️ Wait for integration |
| **8-10**  | 🔴 Integration                    | ✅ Support              | ✅ Support               | ✅ Support           | ✅ Support               | 🟢 Styling & README     |
| **11-12** | 🔵 Testing & Review (ALL MEMBERS) | 🔵 Testing              | 🔵 Testing               | 🔵 Testing           | 🔵 Testing               | 🔵 Testing              |

**Legend:**

- 🔴 Critical blocker task
- 🟡 High-priority blocker
- 🟠 Medium blocker
- 🟢 Can work independently
- 🔵 Team collaboration
- ⏸️ Waiting on dependency
- ✅ Task complete / supporting others

---

## CRITICAL SUCCESS FACTORS

### 🎯 The Three Make-or-Break Dependencies:

1. **Member 1 MUST finish by Day 2**
   - Without this, project cannot start
   - Everything depends on this
   - **RISK:** If Member 1 is delayed, entire project shifts

2. **Member 2 MUST finish by Day 5**
   - Blocks 2 team members (Members 3 & 4)
   - Without data model, no business logic possible
   - **RISK:** If Member 2 is delayed, ripple effect to Members 3 & 4

3. **Member 3 MUST finish by Day 7**
   - Blocks Member 4
   - Without controllers, routes can't be tested
   - **RISK:** If Member 3 is delayed, Member 4 can't finish

### 🚨 MITIGATION STRATEGIES

**If Member 1 is slow (Days 1-2):**

- Other members: Study class materials, plan their code
- Review project requirements thoroughly
- Set up local development environment
- **Team Lead Action:** Dedicate full focus to setup, ask for help if needed

**If Member 2 is slow (Days 3-5):**

- Member 3: Start writing controller skeleton with placeholder functions
- Member 4: Start writing routes structure (without implementations)
- Member 5: Continue with views
- Member 6: Continue with utilities
- **Member 2 Action:** Focus on getting basic CRUD functions working first, sample data second

**If Member 3 is slow (Days 5-7):**

- Member 4: Create route structure with comments
- Member 4: Study Express Router documentation
- Other members: Help test Member 3's functions
- **Member 3 Action:** Implement functions one at a time, test each thoroughly

---

## PARALLEL WORK OPPORTUNITIES

### 🟢 Who Can Work Simultaneously?

**Days 3-5:**

- Member 2 (data model) ✅
- Member 5 (basic views) ✅
- Member 6 (utilities) ✅
  = **3 members working in parallel**

**Days 5-7:**

- Member 3 (controllers) ✅
- Member 5 (finalizing views) ✅
  = **2 members working in parallel**

**Days 8-10:**

- Member 1 (integration) ✅
- Member 6 (styling & docs) ✅
  = **2 members working in parallel**

---

## DAILY STANDUP QUESTIONS

Have a quick daily check (5 mins) asking:

**Member 1:**

- "Is the repo ready for everyone?"
- "Are there any integration issues?"

**Member 2:**

- "Are the data model functions working?"
- "When will tasks.json be ready?"
- "Can Member 3 start yet?"

**Member 3:**

- "Are the controllers done?"
- "Are you blocked by anything?"
- "Can Member 4 start yet?"

**Member 4:**

- "Are routes connected to controllers?"
- "Have you tested all routes?"

**Member 5:**

- "Are views rendering with real data?"
- "Do forms work?"

**Member 6:**

- "Is styling complete?"
- "Is README comprehensive?"

---

## ABSOLUTE DEADLINES (NON-NEGOTIABLE)

| Date       | Deliverable                             | Owner    | Why Critical             |
| ---------- | --------------------------------------- | -------- | ------------------------ |
| **Day 2**  | Project setup complete, repo accessible | Member 1 | Blocks everyone          |
| **Day 5**  | Data model complete                     | Member 2 | Blocks Members 3 & 4     |
| **Day 7**  | Controllers complete                    | Member 3 | Blocks Member 4          |
| **Day 8**  | Routes complete                         | Member 4 | Needed for integration   |
| **Day 10** | Integration complete                    | Member 1 | Needed for final testing |
| **Day 12** | Everything done                         | All      | Buffer for submission    |
| **Day 14** | SUBMISSION                              | All      | HARD DEADLINE            |

---

## QUICK REFERENCE: WHO'S WAITING ON WHOM?

```
Member 1 blocks → EVERYONE (Days 1-2)
       ↓
Member 2 blocks → Member 3, Member 4 (Days 3-5)
       ↓
Member 3 blocks → Member 4 (Days 5-7)
       ↓
Member 4 blocks → Member 1 (for integration) (Day 7-8)
       ↓
Member 1 blocks → Member 6 (for final styling) (Days 8-10)

Meanwhile:
Member 5 → Can work mostly independently (needs data structure)
Member 6 → Can work independently early, waits for integration for final polish
```

---

## EMERGENCY ESCALATION PLAN

**If someone is blocked:**

1. **Day 1-2:** If Member 1 is stuck → Everyone helps with setup
2. **Day 3-5:** If Member 2 is stuck → Member 1 and 6 assist
3. **Day 5-7:** If Member 3 is stuck → Members 2 and 1 assist
4. **Day 7-8:** If Member 4 is stuck → Member 3 assists

**Communication:**

- Don't wait until daily standup if you're stuck
- Ask in team chat immediately
- Share your code for review
- Pair program if needed (screen share)

---

## SUCCESS METRICS

By the end of each phase:

✅ **Phase 1:** Everyone can clone and run basic app  
✅ **Phase 2:** Can read and write to tasks.json  
✅ **Phase 3:** All controller functions work  
✅ **Phase 4:** All routes return responses  
✅ **Phase 5:** Full CRUD cycle works end-to-end  
✅ **Phase 6:** Everything tested, documented, submitted

---

**Remember: The critical path is only 12 days if everyone starts on time and meets their deadlines. Build in buffer time wherever possible!**
