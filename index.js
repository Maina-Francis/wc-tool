import express from "express";
import fs from "fs";
import yargs from "yargs";
import * as wctool from "./src/wctool";

const app = express();
const port = 3000;

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server running successfully and listening on port ${port}`);
  } else {
    console.log("An error occured, server can't start ", error);
  }
});

const argv = yargs
  .usage("Usage: ccwc [options] [filepath]")
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
  .demandOption(1, "Please provide a filepath or use standard input (pipe)")
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
  const data = process.stdin.readSync();
  const content = data.toString();
  const results = wctool(content, options);
  console.log("results ", results.join(" "));
} else{
    const filePath = argv._[0];

    // Read file content using fs
    try{
        const content = fs.readFileSync(filePath, 'utf8');
        const results = wctool(content, options);
        console.log(`${results.join(' ')} ${filePath}`);
    } catch(error){
        console.error(`Error reading file: ${error.message}`); 
    }
}
