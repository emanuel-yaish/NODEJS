const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blogDataDB";

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  console.log("Connected correctly!");
  const db = client.db(databaseName);

  db.collection("users").insertMany(
    [
      {
        name: "user 1",
        email: "user2@gmail.com",
      },
      {
        name: "user 2",
        email: "user2@gmail.com",
      },
    ],
    (error, result) => {
      if (error) {
        return console.log("unable to insert tasks!");
      }
      console.log(result);
    }
  );

  db.collection("users").findOne({ name: "user 1" }, (error, user) => {
    if (error) {
      return console.log("unable to fetch");
    }

    db.collection("comments").insertOne(
      {
        text: "this is comment",
        owner: user._id,
      },
      (error, result) => {
        if (error) {
          return console.log("unable to insert user");
        }

        const commentID = result.insertedId;

        const comment = db
          .collection("comments")
          .findOne({ _id: commentID }, (error, comment) => {
            if (error) {
              return console.log("unable to fetch");
            }
            db.collection("posts").insertMany(
              [
                {
                  title: "first post",
                  text: "this is the first post",
                  owner: user._id,
                  comments: [commentID],
                },
                {
                  title: "second post",
                  text: "this is the first post",
                  owner: user._id,
                  comments: [],
                },
              ],
              (error, result) => {
                if (error) {
                  return console.log("unable to insert tasks!");
                }
                console.log(result);
              }
            );
          });
      }
    );
  });
});
