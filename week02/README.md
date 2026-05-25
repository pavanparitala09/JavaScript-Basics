# Week 2: Date Objects, Copying Mechanisms & ES Modules

This week covers practical JavaScript concepts relating to the `Date` API, deep/shallow copy reference mechanisms, and modular JS architecture using ES Modules.

## Directory Contents

* **[ShallowDeepCopies](./ShallowDeepCopies/)**: Exercises illustrating object mutability, references, memory addresses, shallow cloning using spread operators, and deep isolation cloning using `structuredClone`.
* **[Task Validator](./Task%20Validator/)**: A small command-line task engine modularized using ES `import`/`export` syntax and validated with custom rule functions.
* **[dates.js](./dates.js)**: Date creation, formatting (`DD-MM-YYYY HH:mm:ss`), deadline checks, leap date validity, and age calculator functions.
* **[onlineLearningPlatform.js](./onlineLearningPlatform.js)**: A simulated catalog, user, cart, and role processor representing core engine logic for online learning platforms (like Coursera/Udemy).

## Key Learning Objectives
1.  Understand standard JavaScript time representation and build formatters/validators.
2.  Differentiate references versus value copies in objects. Prevent side-effects by writing immutable updates.
3.  Implement modular programming by dividing functions into `tasks`, `validators`, and the main running file (`app.js`) using ES Modules.
