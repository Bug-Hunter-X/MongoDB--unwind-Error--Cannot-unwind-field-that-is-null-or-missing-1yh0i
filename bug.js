```javascript
const pipeline = [
  {
    $lookup:
      {
        from: "collectionB",
        localField: "_id",
        foreignField: "foreignKey",
        as: "matchedDocs",
      }
  },
  {
    $unwind: "$matchedDocs" // Error prone if no match
  }
];
```