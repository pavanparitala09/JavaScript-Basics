# Array of Objects Operations Assignments

This directory contains assignments that focus on manipulating list structures of complex data types (arrays of objects). These represent typical business logic operations in full-stack MERN applications (e.g., e-commerce cart calculation, student dashboards, HR payrolls).

## Files & Scenarios

### [Assignment01.js](./Assignment01.js): Shopping Cart Summary
* **Scenario**: E-commerce shopping cart management system.
* **Tasks**:
    1.  Filter to select only products that are `inStock`.
    2.  Map values to a new format containing `{ name, totalPrice }`.
    3.  Sum up the total cart value using `reduce()`.
    4.  Find details of the product `"Mouse"` using `find()`.
    5.  Locate the index position of the `"Keyboard"` item.

### [Assignment02.js](./Assignment02.js): Student Performance Dashboard
* **Scenario**: College student result analyzer.
* **Tasks**: Apply filters, maps, and reductions on lists of student profiles containing marks, grades, and pass/fail states to compute class metrics.

### [Assignment03.js](./Assignment03.js): Employee Payroll Processor
* **Scenario**: Enterprise HR payroll processor.
* **Tasks**: Compute net payments, filter employees by department, calculate total company salary budget using aggregate `reduce()`, and locate individual employees.

### [Assignment04.js](./Assignment04.js): Movie Streaming Platform Recommendations
* **Scenario**: Streaming engine recommending movies based on genre and rating metadata.
* **Tasks**: Filter movies with high rating values, map to readable catalog tags, and find specific film records.

### [Assignment05.js](./Assignment05.js): Bank Transaction Analyzer
* **Scenario**: Bank statement summary log.
* **Tasks**: Filter credits vs. debits, aggregate total net cash balance, and identify specific high-value transactions.

## ️ Usage
Run these JavaScript files locally:
```bash
node Assignment01.js
node Assignment02.js
node Assignment03.js
node Assignment04.js
node Assignment05.js
```
