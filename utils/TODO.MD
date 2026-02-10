# Optional Additional Helpers (Extra Credit) 🚀

If you have finished the core project requirements and want to practice more advanced JavaScript concepts, try implementing these additional helper functions.

These are **not required** but will make our application even more robust!

## 📋 Task List

- [ ] **`validateEmail(email)`**
  - Check if a string is a valid email format.
  - _Concept:_ Regex or basic string checking.

- [ ] **`generateSlug(title)`**
  - Convert a title like "Buy Milk Today" into a URL-friendly slug: "buy-milk-today".
  - _Concept:_ `.toLowerCase()`, `.replace()`, `.trim()`.

- [ ] **`countWords(text)`**
  - Return the number of words in a task description.
  - _Concept:_ `.split(" ")`, `.length`.

- [ ] **`isValidPriority(priority)`**
  - A helper to double-check if a priority is actually "low", "medium", or "high".
  - _Concept:_ `.includes()` or logic checks.

- [ ] **`isValidStatus(status)`**
  - A helper to verify if a status is "pending" or "completed".
  - _Concept:_ Array methods or logic checks.

---

## How to use them?

Once implemented, these can be used in our **Controllers** to validate data before we save it to the JSON file, or in our **Views** to show extra information (like word counts).
