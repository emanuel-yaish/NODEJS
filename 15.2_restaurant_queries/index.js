// 1. Crud
// 1.1 – Write a MongoDb query to display all the documents in
// the restaurant collection.

db.restaurants.find();

// 1.2 - Write a MongoDb query to display all restaurants that
// have a specific cuisine

db.restaurants.find({ cuisine: "cuisineA" });

// 1.3 - Write a MongoDb query that displays only kosher
// restaurants

db.restaurants.find({ kosher: true });

// 1.4 - Write a MongoDb query that displays only a specific cities
// restaurants

db.restaurants.find({ "address.city": "cityB" });

// 1.5 - Write a MongoDb query to display a specific restaurants
// address

db.restaurants.find({
  "address.city": "cityB",
  "address.street": "streetE",
  "address.coordinates": [-71, 263, 44.671],
});

// 1.6 - Write a MongoDb query to display a specific restaurants
// coordinates

db.restaurants.find({
  "address.coordinates": [-71, 263, 44.671],
});

// 1.7. - Write a MongoDb query that should display all
// restaurants in ascending order by restaurant name.

db.restaurants.find().sort({ name: 1 });
db.restaurants.find().sort({ name: -1 });

// 1.8 - Write a MongoDb query that should display all restaurants
// in ascending order by city names.

db.restaurants.find().sort({ "address.city": 1 });
db.restaurants.find().sort({ "address.city": -1 });

// 1.9 - Update a specific restaurant's name

db.restaurants.updateOne(
  {
    name: "resturantD",
  },
  {
    $set: {
      name: "newName",
    },
  }
);

// 1.10 - Update a specific restaurant by adding a new review.

db.restaurants.updateOne(
  {
    name: "newName",
  },
  {
    $push: {
      reviews: { reviewDate: "18/1/2022", reviewScore: 5 },
    },
  }
);

// 1.11 - Update all restaurants to be kosher

db.restaurants.updateMany(
  {
    kosher: false,
  },
  {
    $set: {
      kosher: true,
    },
  }
);

// 1.12 - Delete a specific restaurant

db.restaurants.deleteOne({ _id: ObjectId("61e5f2c70a8f12c8795deead") });

// 1.13 - Delete all restaurants

db.restaurants.drop();

// 2. forEach Queries
// use the forEach cursor method to query the following:
// 2.1 - Write a MongoDb query to print all restaurant names.
// 2.2 - Write a MongoDb query to print all restaurant cities
// 2.3 - Write a MongoDb query to print all restaurant coordinates
// 3. Advanced Queries
// 3.1 - Query for restaurant names that start with a specific
// alphabet
// 3.2 - Query how many documents you have from the restaurant
// collection.
// 3.3 - Write a MongoDb query to get restaurants that include
// reviews from a specific date.
// 4. Aggregation operations
// use the aggregation framework to query the following:
// 4.1- Write a mongoDb query to display all restaurants average
// score.
// 4.2 - Write a mongoDb query to display a specific restaurant
// average score
