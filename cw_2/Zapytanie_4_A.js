var pipeline = [
	{ 
		$group: {
			_id: "$nationality",
			srednie_bmi: {
				$avg: { 
					 $divide: [ {$toDecimal: "$weight"}, { $pow: [ {$toDecimal: "$height"}, 2 ] } ] 
				}
			},
			min_bmi: {
				$min: { 
					 $divide: [{$toDecimal: "$weight"}, { $pow: [ {$toDecimal: "$height"}, 2 ] } ] 
				}
			},
			max_bmi: {
				$max: { 
					 $divide: [{$toDecimal: "$weight"}, { $pow: [ {$toDecimal: "$height"}, 2 ] } ] 
				},	
					
			}
		}
	}
];

printjson(db.people.aggregate(pipeline).toArray())