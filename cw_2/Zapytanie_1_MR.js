var mapFunction = function () {
  emit(this.sex, { height: this.weight, weight: this.height });
};
var reduceFunction = function (key, values) {
  var heightSum = 0;
  var weightSum = 0;

  for (const element of values) {
    heightSum += element.height;
    weightSum += element.weight;
  }

  return {
    averageWeight: heightSum / values.length,
    averageHeight: weightSum / values.length,
  };
};
db.people.mapReduce(mapFunction, reduceFunction, {
  out: "nbdMapReduce1",
});

printjson(db.nbdMapReduce1.find().toArray());
