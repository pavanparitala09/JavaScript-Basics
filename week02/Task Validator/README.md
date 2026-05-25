# Task Validator CLI Application

A simple task manager demonstrating ES6 Module systems (`import`/`export`) and clean input validation separation in JavaScript.

## Files & Architecture

### [app.js](./app.js): Application Entrypoint
* Imports operations from the task service to perform task addition, query status list, mark task items complete, and output result state to standard console logs.

### [tasks.js](./tasks.js): Task Services
* Maintains the `tasks` array state.
* Integrates utility validation checks from `validator.js` before inserting any task.
* Exports `addTask()`, `getAllTasks()`, and `completeTask()`.

### [validator.js](./validator.js): Validation Utilities
* Provides validator functions verifying structural properties of inputs:
    * `validateTitle(title)`: Ensures task descriptions are non-empty strings.
    * `validatePriority(priority)`: Checks if the task priority is allowed (e.g., `high`, `medium`, `low`).
    * `validateDueDate(dueDate)`: Checks if dates follow proper ISO calendar formats.

## ️ Usage
Since this uses ES Module syntax (`import`/`export`), you may need to ensure your environment supports it (either using Node's `"type": "module"` in `package.json` or importing in a browser/bundler environment).
To run:
```bash
node app.js
```
