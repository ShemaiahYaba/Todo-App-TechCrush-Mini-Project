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
 * TODO: Implement this using the guide in utils/STUDY.MD
 */
export function getStatusClass(status) {
  // Your code here
}

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 * TODO: Implement this using the guide in utils/STUDY.MD
 */
export function truncateText(text, maxLength = 50) {
  // Your code here
}

// NOTE: See utils/STUDY.MD for detailed instructions on how to implement the functions above.
// ADDITIONAL: See utils/TODO.MD for optional "Extra Credit" helper functions to implement.
