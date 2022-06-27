var mapFunction = function () {
  emit(this.nationality, this.weight / this.height ** 2);
};
var reduceFunction = function (key, values) {
  var max = values[0];
  var min = values[0];
  var sum = values[0];
  for (const element of values) {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
    sum += element;
  }
  return { max: max, min: min, avg: sum / values.length };
};
db.people.mapReduce(mapFunction, reduceFunction, {
  out: "nbdMapReduce4",
});

printjson(db.nbdMapReduce4.find().toArray());