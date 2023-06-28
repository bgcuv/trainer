const testFolder = "./public/portraits/full";
const fs = require("fs");

fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    const name = file.replace("_", " ").replace(".png", "");
    console.log(
      `{name: "${name}", image: "./portraits/full/${file}", difficulty: 1, strength: 1},`
    );
  });
});
