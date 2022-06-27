var pipeline = [
  {
    $addFields: {
      converted_birth: {
        $dateFromString: {
          dateString: "$birth_date",
        },
      },
    },
  },
  {
    $match: {
      converted_birth: { $gt: ISODate("2001-01-01T00:00:00.313+00:00") },
    },
  },
  { $project: { _id: 0, first_name: 1, last_name: 1, "location.city": 1 } },
];
printjson(db.people.aggregate(pipeline).toArray())