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
    $addFields: {
      matchedDocs: { $ifNull: [ "$matchedDocs", [] ] }
    }
  },
  {
    $unwind: "$matchedDocs" 
  }
];
```