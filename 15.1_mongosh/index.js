// 1. Create a database called findMyRestaurant
// use findMyRestaurant

// 2. Create a collection called restaurants
// db.createCollection("restaurants");

// 3. inside the collection create at least 5 restaurant
// documents that include the following:
//  restaurant name
//  a sub document called address that includes:
// • a city
// • a street
// • An array of coordinates e.g. [-77,564, 40.677]
//  a type of cuisine
//  a boolean if it kosher or not
//  An array of at least 3 reviews that include:
// • a date
// • an integer score
// To test your data against our queries do the following:
// Only 3 different city names
// Only 3 different types of cuisine
// Give different dates for your reviews.

// db.restaurants.insertMany([
//   {
//     name: "resturantA",
//     address: {
//       city: "cityA",
//       street: "streetA",
//       coordinates: [-87, 344, 55.677],
//     },
//     cuisine: "cuisineA",
//     kosher: true,
//     reviews: [{ reviewDate: "12/4/2021", reviewScore: 5 }],
//   },
//   {
//     name: "resturantB",
//     address: {
//       city: "cityB",
//       street: "streetB",
//       coordinates: [-37, 964, 50.677],
//     },
//     cuisine: "cuisineB",
//     kosher: true,
//     reviews: [{ reviewDate: "10/11/2021", reviewScore: 3 }],
//   },
//   {
//     name: "resturantC",
//     address: {
//       city: "cityC",
//       street: "streetC",
//       coordinates: [-17, 164, 10.677],
//     },
//     cuisine: "cuisineC",
//     kosher: true,
//     reviews: [{ reviewDate: "21/5/2021", reviewScore: 4 }],
//   },
//   {
//     name: "cuisineA",
//     address: {
//       city: "cityA",
//       street: "streetD",
//       coordinates: [-27, 164, 20.677],
//     },
//     cuisine: "cuisineA",
//     kosher: true,
//     reviews: [{ reviewDate: "22/1/2021", reviewScore: 1 }],
//   },
//   {
//     name: "resturantE",
//     address: {
//       city: "cityB",
//       street: "streetE",
//       coordinates: [-71, 263, 44.671],
//     },
//     cuisine: "cuisineB",
//     kosher: true,
//     reviews: [{ reviewDate: "22/2/2021", reviewScore: 2 }],
//   },
// ]);

// show collection data
// db.restaurants.find()

// delete collection
// db.restaurants.drop();

// show collections
// show collections
