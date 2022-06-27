var pipeline = [
	{ $unwind: "$credit" },
	{
		$group: {
			_id: "$credit.currency",
			total_balance: {$sum: { $toDecimal: "$credit.balance"}}
		}
	}
];

printjson(db.people.aggregate(pipeline).toArray())