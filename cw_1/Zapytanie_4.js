var pipeline = [
  {
    $addFields: {
      converted_weight: {
        $convert: {
          input: "$weight",
          to: "decimal",
          onError: "Error",
          onNull: NumberDecimal("0"),
        },
      },
    },
  },
  {
    $match: {
      converted_weight: {
        $gte: 68,
        $lt: 71.5,
      },
    },
  },
];
printjson(db.people.aggregate(pipeline).pretty())