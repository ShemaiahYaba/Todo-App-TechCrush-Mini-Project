# Helper Functions Study Guide 📚

Welcome back! This guide will help you implement two important utility functions for our To-Do application. These functions are key to making our website look professional and organized.

## Your Goal

You need to implement two functions in `utils/helpers.js`:

1. `getStatusClass(status)` - To color-code tasks based on whether they are done or not.
2. `truncateText(text, maxLength)` - To keep our task cards uniform by shortening long descriptions.

---

## Task 1: `getStatusClass(status)`

### Why?

The PRD (Product Requirements Document) requires us to have different colors for task statuses (Pending vs. Completed). This function will return a "CSS Class Name" that our styling member (Member 6) can use to apply colors.

### The Concept (Weeks 1-2: Conditionals)

You will receive a string called `status`. You need to check what it says and return a specific class name.

**Logic to follow:**

- If the status is `'completed'`, return the string `'status-completed'`.
- If the status is anything else (like `'pending'`), return the string `'status-pending'`.

**Example:**

```javascript
getStatusClass("completed"); // returns "status-completed"
getStatusClass("pending"); // returns "status-pending"
```

---

## Task 2: `truncateText(text, maxLength)`

### Why?

Sometimes users write long descriptions. In a list view, we want to show only a "preview" (e.g., the first 50 characters) so the boxes stay the same size.

### The Concept (Weeks 4-5: String Methods)

You will receive a `text` string and a number called `maxLength`.

**Steps to follow:**

1. Check if the length of the `text` is less than or equal to `maxLength`.
2. If it is short enough, just return the `text` as it is.
3. If it is longer than `maxLength`:
   - Use the `.substring()` or `.slice()` method to grab characters from index `0` to `maxLength`.
   - Add `"..."` to the end of that shortened string.
   - Return the result.

**Example:**

```javascript
truncateText("This is a very long task description", 10);
// returns "This is a ..."
```

---

## How to implement them:

1. Open `utils/helpers.js`.
2. Find the empty function definitions.
3. Write your code inside the curly braces `{ ... }`.
4. Make sure to use the `export` keyword so other files can use them!

## How to test your work:

At the bottom of `helpers.js`, you can temporarily add these lines to see if your code works in the console:

```javascript
console.log("Status test:", getStatusClass("completed"));
console.log("Truncate test:", truncateText("Learning JavaScript is fun!", 10));
```

---

## Reference Material (Class Concepts):

- **Conditionals:** If/Else statements or Ternary operators.
- **String Properties:** `.length`
- **String Methods:** `.substring()` or `.slice()`
- **Arrow Functions vs Regular Functions:** Either is fine, but stay consistent!
