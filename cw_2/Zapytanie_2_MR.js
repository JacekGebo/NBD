var mapFunction = function () {
  for (const element of this.credit) {
    emit(element.currency, element.balance);
  }
};
var reduceFunction = function (key, values) {
  var balanceSum = 0;
  for (const element of values) {
    balanceSum += parseFloat(element);
  }

  return balanceSum;
};
db.people.mapReduce(mapFunction, reduceFunction, {
  out: "nbdMapReduce2",
});

printjson(db.nbdMapReduce2.find().toArray());