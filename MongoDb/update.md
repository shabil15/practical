Here’s a comprehensive list of **UPDATE queries** in MongoDB. These queries allow you to modify documents in a collection, either partially or completely. 

---

## **1. Update a Single Document**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },          // Filter
  { $set: { updatedField: "newValue" } } // Update operation
);
```
Updates the first document matching the filter.

---

## **2. Update Multiple Documents**
### Query:
```javascript
db.collectionName.updateMany(
  { fieldName: "value" },          // Filter
  { $set: { updatedField: "newValue" } } // Update operation
);
```
Updates all documents matching the filter.

---

## **3. Replace a Document**
### Query:
```javascript
db.collectionName.replaceOne(
  { fieldName: "value" },          // Filter
  { newField1: "value1", newField2: "value2" } // Complete replacement
);
```
Replaces the entire document with the provided one.

---

## **4. Add or Update a Field**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" }, 
  { $set: { newField: "defaultValue" } }
);
```
Adds `newField` if it doesn’t exist or updates it if it does.

---

## **5. Remove a Field**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $unset: { fieldToRemove: "" } }
);
```
Removes the specified field from the document.

---

## **6. Increment/Decrement a Field**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $inc: { numericField: 5 } } // Increment by 5
);
```
Increments (or decrements with a negative value) the `numericField`.

---

## **7. Multiply a Field**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $mul: { numericField: 2 } } // Multiply by 2
);
```
Multiplies the value of `numericField` by the specified factor.

---

## **8. Rename a Field**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $rename: { oldField: "newField" } }
);
```
Renames `oldField` to `newField`.

---

## **9. Update Array Elements**
### **9.1 Update First Matching Array Element**
```javascript
db.collectionName.updateOne(
  { "arrayField.name": "value" },
  { $set: { "arrayField.$.updatedField": "newValue" } }
);
```
Updates the first element in `arrayField` that matches the filter.

### **9.2 Update All Array Elements**
```javascript
db.collectionName.updateMany(
  { fieldName: "value" },
  { $set: { "arrayField.$[].updatedField": "newValue" } }
);
```
Updates all elements in an array.

### **9.3 Update Array Element by Position**
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $set: { "arrayField.1.updatedField": "newValue" } }
);
```
Updates the element at position `1` in the array.

---

## **10. Add an Element to an Array**
### **10.1 Add a Single Element**
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $push: { arrayField: "newElement" } }
);
```

### **10.2 Add Multiple Elements**
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $push: { arrayField: { $each: ["elem1", "elem2"] } } }
);
```

---

## **11. Remove an Element from an Array**
### **11.1 Remove a Specific Value**
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $pull: { arrayField: "elementToRemove" } }
);
```

### **11.2 Remove Elements Matching a Condition**
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $pull: { arrayField: { conditionField: "value" } } }
);
```

---

## **12. Add an Element to the Beginning of an Array**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $addToSet: { arrayField: "newElement" } }
);
```
Only adds the element if it’s not already in the array.

---

## **13. Remove Elements from an Array by Position**
### Remove the First Element:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $pop: { arrayField: -1 } }
);
```

### Remove the Last Element:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $pop: { arrayField: 1 } }
);
```

---

## **14. Upsert: Update or Insert if Not Found**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" }, 
  { $set: { updatedField: "newValue" } },
  { upsert: true }
);
```
If no matching document is found, a new one is created with the specified values.

---

## **15. Update with Conditional Logic**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $set: { fieldToUpdate: { $cond: [{ $gte: ["$age", 18] }, "Adult", "Minor"] } } }
);
```
Updates a field based on a condition.

---

## **16. Update Using Aggregation Pipelines**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  [
    { $set: { newField: { $concat: ["$firstName", " ", "$lastName"] } } }
  ]
);
```
Uses aggregation operators for complex updates.

---

## **17. Add or Remove Fields Dynamically**
### Query:
```javascript
db.collectionName.updateOne(
  { fieldName: "value" },
  { $set: { [`dynamicField${index}`]: "value" } }
);
```
Adds a field where the name is dynamically generated.

---

## Summary of Common Update Queries

| **Operation**                    | **Operator/Method** | **Description**                                     |
|-----------------------------------|---------------------|---------------------------------------------------|
| Update single document            | `updateOne()`       | Updates the first document that matches.         |
| Update multiple documents         | `updateMany()`      | Updates all documents that match.                |
| Replace document                  | `replaceOne()`      | Replaces the entire document.                    |
| Add a new field                   | `$set`              | Adds or updates a field.                         |
| Remove a field                    | `$unset`            | Deletes a field from the document.               |
| Increment/Decrement field         | `$inc`              | Increases or decreases a numeric field.          |
| Multiply a numeric field          | `$mul`              | Multiplies a numeric field by a factor.          |
| Rename a field                    | `$rename`           | Renames a field in the document.                 |
| Update array elements             | `$set`, `$[]`       | Updates one or more elements in an array.        |
| Add an element to an array        | `$push`, `$addToSet`| Adds a new element to an array.                  |
| Remove an element from an array   | `$pull`, `$pop`     | Removes elements from an array.                  |
| Upsert                            | `{ upsert: true }`  | Updates or inserts a new document if not found.  |

---

Let me know if you'd like detailed examples of specific queries!