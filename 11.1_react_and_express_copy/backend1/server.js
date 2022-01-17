const app = require("./app");

const PORT = process.env.PORT;

app.listen(PORT || 8080, () =>
  console.log(`Server is up and runing on port ${PORT || 8080}`)
);
