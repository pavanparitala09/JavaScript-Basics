# Conditional Logic (If-Else) Tasks

This folder contains assignments designed to practice conditional flow control in JavaScript. Exercises range from standard multi-branch nested `if-else` blocks to quick `ternary operators`.

## 📂 Files & Scenarios

### 📄 [Assignment01.js](./Assignment01.js): Smart Login Status Engine
*   **Scenario**: Determining user access and next steps on a member profile page.
*   **Tasks**:
    1.  If not logged in $\rightarrow$ return `"Please login"`.
    2.  If logged in but profile is incomplete $\rightarrow$ return `"Complete your profile"`.
    3.  If logged in and profile is complete $\rightarrow$ return `"Welcome back!"`.
    4.  Print output to console.

### 📄 [Assignment02.js](./Assignment02.js): Course Price Tag Labeler
*   **Scenario**: Attaching dynamic category labels based on catalog item price.
*   **Tasks**:
    1.  If price $< 500 \rightarrow$ label as `"Budget Course"`.
    2.  If price is between $500$ and $1000$ (inclusive) $\rightarrow$ label as `"Standard Course"`.
    3.  If price $> 1000 \rightarrow$ label as `"Premium Course"`.
    4.  Print tag output.

### 📄 [Assignment03.js](./Assignment03.js): Enrollment Eligibility Checker
*   **Scenario**: Quick eligibility verification before course signup.
*   **Tasks**:
    1.  Evaluate `hasPaid` and `hasCompletedBasics`.
    2.  Use a **ternary operator** (`? :`) to output `"Enroll Now"` if both conditions are met, otherwise return `"Complete Requirements"`.
    3.  Print eligibility message.

## 🛠️ Usage
Execute these files directly using Node.js:
```bash
node Assignment01.js
node Assignment02.js
node Assignment03.js
```
