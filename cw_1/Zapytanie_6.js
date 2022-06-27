db.people.insert({
  sex: "Male",
  first_name: "Jacek",
  last_name: "Geborys",
  job: "Civil engineer",
  email: "s26463@pjwstk.edu.pl",
  location: {
    city: "Warsaw",
    address: {
      streetname: "Bieniewicka",
      streetnumber: "22",
    },
  },
  description: "lorem ipsum",
  height: "179.00",
  weight: "73.00",
  birth_date: "1995-11-10T01:01:01Z",
  nationality: "Poland",
  credit: [
    {
"type" : "visa",
"number" : "6393055656455653",
"currency" : "PLN",
"balance" : "4386.73"
    },
  ],
})
printjson(db.people.find({last_name: "Geborys"}).toArray())