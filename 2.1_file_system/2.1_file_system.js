const fs = require("fs");

// 1. Create a new txt file using the same fs module method we have
// learned before.

fs.writeFileSync("new.txt", "My new txt file");

// 2. Create a copy of the newly created txt file using a method from
// the fs module.

fs.copyFile("new.txt", "copy.txt", (err) => {
  if (err) throw err;
  console.log("new.txt was copied to copy.txt");
});

fs.copyFileSync("new.txt", "destination.txt");
console.log("new.txt was copied to destination.txt");

// 3. Rename one of the files using a method from the fs module.

fs.renameSync("destination.txt", "newPath.txt");

// 4. Get a list of all the file names of the current directory using a
// method from the fs module.

const directories = fs.readdirSync(__dirname);
console.log(directories);

// 5. Find out and implement another method for the fs module.

fs.appendFileSync("newPath.txt", " new appended text");
