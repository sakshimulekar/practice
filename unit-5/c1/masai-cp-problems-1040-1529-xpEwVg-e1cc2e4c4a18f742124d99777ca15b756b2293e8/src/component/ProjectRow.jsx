import React from "react";

export const ProjectRow = () => {
  return (
    <>
      <td data-testid="project-id">{/* Show serial number */}</td>
      <td data-testid="project-name">{/* Show project name */}</td>
      <td data-testid="project-tech-stack">{/* Show tech stack */}</td>
      <td data-testid="project-assigned-to">{/* Show assigned to value  */}</td>
      <td data-testid="project-status">
        {/* Show the current status value */}
      </td>
      <td>
        <button data-testid="toggle-button">Toggle</button>
      </td>
    </>
  );
};
