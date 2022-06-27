var pipeline = [
	{
		$match: { sex: "Female", nationality : "Poland"}
	},
	{ $unwind: "$credit" },
	{ 
		$group: {
			_id: "$credit.currency",
			total_balance: {$sum: { $toDecimal: "$credit.balance"}},
			avg_balance: {$avg: { $toDecimal: "$credit.balance"}}
		}
	}
];

printjson(db.people.aggregate(pipeline).toArray())