# Array Operations Assignments

This directory contains assignments focused on applying standard ES6 array helper methods in JavaScript. These methods help developers write cleaner, declarative code rather than using standard loops.

## 📂 Files & Scenarios

### 📄 [Assignment01.js](./Assignment01.js): Daily Temperature Analyzer
*   **Scenario**: Analyzing recorded temperatures for a weather app.
*   **Tasks**:
    1.  Filter out temperatures above 35°C.
    2.  Convert Celsius readings to Fahrenheit using `map()`.
    3.  Calculate the average temperature using `reduce()`.
    4.  Find the first temperature above 40°C.
    5.  Locate the index of the temperature reading `28`.

### 📄 [Assignment02.js](./Assignment02.js): Online Course Name Processor
*   **Scenario**: Formatting list of course titles for a website display.
*   **Tasks**:
    1.  Filter course names whose length is greater than 5 characters.
    2.  Transform all course titles to uppercase.
    3.  Join all uppercase titles using a pipeline separator (`|`) with `reduce()`.
    4.  Find the course named `"react"`.
    5.  Locate the index of the `"node"` course.

### 📄 [Assignment03.js](./Assignment03.js): Student Marks List Analyzer
*   **Scenario**: Analyzing student score metrics from an exam portal.
*   **Tasks**:
    1.  Filter marks that are passing (grade $\ge 40$).
    2.  Apply $+5$ grace marks to every student using `map()`.
    3.  Find the highest score using `reduce()`.
    4.  Find the first failing mark ($< 40$).
    5.  Find the index of the score `92`.

## 🛠️ Usage
To execute any of these files on your local machine, run the file via Node.js:
```bash
node Assignment01.js
node Assignment02.js
node Assignment03.js
```
