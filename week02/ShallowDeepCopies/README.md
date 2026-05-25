# Shallow vs Deep Copying in JavaScript

This folder contains hands-on scripts explaining how JavaScript handles object references and memory allocations. It contrasts **shallow copies** (which copy primitive fields but share nested objects) with **deep copies** (which create completely independent, isolated object clones).

## Files & Concepts

### [ShallowCopy.js](./ShallowCopy.js): Shallow Cloning Demonstration
* **Concept**: Uses the spread operator `{ ...user }` to create a shallow clone.
* **Key Behavior**:
    * Editing a primitive value like `name` in the copy **does not** modify the original object.
    * Editing a nested object path like `preferences.theme` in the copy **mutates the original** object.
    * **Explanation**: Nested properties are copied by reference rather than copied by value.

### [DeepCopey.js](./DeepCopey.js): Deep Cloning Demonstration
* **Concept**: Uses the modern native `structuredClone()` utility to create an isolated deep copy.
* **Key Behavior**:
    * Editing deep paths (e.g. `customer.address.city` or array elements `items[0].price`) in the copy **does not affect** the original structure at all.
    * **Explanation**: All nested nodes are recursively traversed and cloned.

## ️ Usage
Run the scripts using Node.js:
```bash
node ShallowCopy.js
node DeepCopey.js
```
