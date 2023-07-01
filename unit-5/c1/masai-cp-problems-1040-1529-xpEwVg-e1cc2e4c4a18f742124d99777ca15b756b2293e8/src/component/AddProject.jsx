import React from "react";

const initialState = {};

const reducer = () => {};

export const AddProject = () => {
  return (
    <div>
      <h1>Add Project</h1>
      <div className="form-wrapper" data-testid="form-wrapper">
        <form data-testid="form-element">
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Project Name</label>
            {/* Add Input box here */}
          </div>
          <div className="tech-stack-wrapper" data-testid="tech-stack-wrapper">
            <label>Tech Stack</label>
            {/* Provide select tag with name attribute `name="tech_stack"` */}
            {/* This Select Tag will have `data-testid="tech-stack-select` */}
          </div>
          <div
            className="assigned-to-wrapper"
            data-testid="assigned-to-wrapper"
          >
            <label>Assignmed to</label>
            {/* Provide select tag with name attribute `name="assigned_to"` */}
            {/* This Select Tag will have `data-testid="assigned-to-select` */}
          </div>
          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status</label>
            {/* Provide checkbox  with name attribute `name="status"` */}
          </div>
        </form>
      </div>
      <h1>Project List</h1>
      {/* Show the project list here using `ProjectList` component */}
    </div>
  );
};

export { initialState, reducer };
