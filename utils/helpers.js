// utils/helpers.js
// Created by: Member 6
// Description: Utility helper functions

// TODO: Member 6 - Implement these utility functions

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getPriorityClass(priority) {
  switch (priority) {
    case "low":
      return "priority-low";
    case "medium":
      return "priority-medium";
    case "high":
      return "priority-high";
    default:
      return "priority-medium";
  }
}

/**
 * Get a color class based on status
 * @param {string} status - Status (pending, completed)
 * @returns {string} CSS class name
 */
// export function getStatusClass(status) {
//     // Return a CSS class name based on status
//     // Example:
//     // - 'pending' -> 'status-pending'
//     // - 'completed' -> 'status-completed'
//
//     return status === 'completed' ? 'status-completed' : 'status-pending';
// }

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
// export function truncateText(text, maxLength = 50) {
//     // Truncate text if it's longer than maxLength
//     // Add "..." at the end if truncated
//     // Example: "This is a very long text..." (if original was longer)
//
//     if (text.length <= maxLength) return text;
//     return text.substring(0, maxLength) + '...';
// }

// ==================== HELPER NOTES ====================

/*
CONCEPTS TO USE:
1. Pure functions - no side effects
2. Input validation
3. Default parameters
4. String methods (charAt, slice, substring, toUpperCase, toLowerCase)
5. Date formatting
6. Switch statements
7. Ternary operators

USAGE IN VIEWS:
These helpers can be imported in controllers and passed to views:

// In controller:
import * as helpers from '../utils/helpers.js';

export function getAllTasks(req, res) {
    const tasks = await readTasks();
    res.render('index', { 
        tasks, 
        helpers // Pass helpers to view
    });
}

// In EJS view:
<%= helpers.formatDate(task.createdAt) %>
<div class="<%= helpers.getPriorityClass(task.priority) %>">

OPTIONAL ADDITIONAL HELPERS:
- validateEmail(email)
- generateSlug(title)
- countWords(text)
- isValidPriority(priority)
- isValidStatus(status)
*/
