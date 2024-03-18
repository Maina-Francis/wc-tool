import fs from "fs";
import yargs from "yargs";
import wctool from "./src/wctool.js";

const argv = yargs
  .usage("Usage: index.js [options] [filepath]")
  .option("c", {
    alias: "bytes",
    describe: "Count number of bytes in the file",
  })
  .option("l", {
    alias: "lines",
    describe: "Count number of lines in the file",
  })
  .option("w", {
    alias: "words",
    describe: "Count number of words in the file",
  })
  .option("m", {
    alias: "chars",
    describe: "Count number of characters in the file",
  })
  .help("h", "Show help")
  .alias("h", "help").argv;

const options = {
  bytes: argv.c,
  lines: argv.l,
  words: argv.w,
  chars: argv.m,
};

// Handle standard input (if no filepath is provided)
if (!argv._[0]) {
  try {
    const data = await process.stdin.read();
    if (data) {
      const content = data.toString();
      const results = wctool(content, options);
      console.log("results ", results.join(" "));
    } else {
      console.error("No data received from standard input");
    }
  } catch (error) {
    console.error("Error reading from stdin:", error);
  }
} else {
  const filePath = argv._[0];

  // Read file content using fs
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const results = wctool(content, options);
    console.log(`${results.join(" ")} ${filePath}`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}
