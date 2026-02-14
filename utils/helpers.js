// utils/helpers.js
// Created by: Member 6
// Description: Utility helper functions

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
export function getStatusClass(status) {
  if (status === "completed") {
    return "status-completed";
  }
  return "status-pending";
}

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength = 50) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}
