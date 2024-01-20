const fs = require("fs");
const path = require("path");

const svgDirectory = "utils/svg-icons"; // Replace with your SVG directory path
const outputFilePath = "src/IconTypes.ts"; // Replace with your desired output path

fs.readdir(svgDirectory, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  const iconNames = files
    .filter((file) => file.endsWith(".svg"))
    .map((file) => path.basename(file, ".svg"))
    .map((fileName) => fileName);

  const typeContent = `export type IconName = '${iconNames.join("' | '")}';\n`;

  fs.writeFile(outputFilePath, typeContent, (err) => {
    if (err) throw err;
    console.log("IconTypes.ts has been saved!");
  });
});
