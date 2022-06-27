var pipeline = [
	{
		$addFields: {
			converted_height: { $convert: { input: "$height", to: "double" } },
			converted_weight: { $convert: { input: "$weight", to: "double" } },
		}
		
	},

	{	
		$group: {
			_id: "$sex",
			average_height: { $avg: "$converted_height" },
			average_weight: { $avg: "$converted_weight" },
		}
	}
];

printjson(db.people.aggregate(pipeline).toArray())