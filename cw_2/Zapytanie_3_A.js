var pipeline = [
	{ $group: {_id: "$job" } }
];

printjson(db.people.aggregate(pipeline).toArray())