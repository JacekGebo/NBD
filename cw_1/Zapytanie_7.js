var pipeline = [
  {
    $addFields: {
      converted_height: { $convert: { input: "$height", to: "double" } },
    },
  },
  {
    $match: {
      converted_height: { $gt: 190.0 },
    },
  },
];

var people = db.people.aggregate(pipeline);
while (people.hasNext()) {
  person = people.next();
  db.people.update({ _id: person._id }, { $set: { heightAbove190: true } });
}
printjson(db.people.deleteMany({ heightAbove190: { $exists: true } }))