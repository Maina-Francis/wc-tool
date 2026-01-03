# 📝 CCWC (Coding Challenge Word Count)

A custom implementation of the Unix command line tool `wc`, built with **Node.js**.

This tool was built as part of [John Crickett's Coding Challenges](https://codingchallenges.fyi/challenges/challenge-wc) to demonstrate mastery of file I/O, stream processing, and CLI argument parsing without relying on heavy external libraries.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![CLI](https://img.shields.io/badge/CLI-Tool-black?style=for-the-badge)

## 🚀 Features

Just like the original Unix tool, `ccwc` supports:
- **`-c`**: Count the number of **bytes** in a file.
- **`-l`**: Count the number of **lines** in a file.
- **`-w`**: Count the number of **words** in a file.
- **`-m`**: Count the number of **characters** in a file (multibyte support).
- **Standard Input (stdin)**: Supports piping data directly into the tool (e.g., `cat file.txt | ./ccwc -l`).

## 🛠️ Installation & Usage

### 1. Clone the repository
```bash
git clone https://github.com/Maina-Francis/wc-tool.git
cd wc-tool
```

### 2. Make executable (Optional)
You can run it directly with node, or make it an executable script:
``` bash
chmod +x ccwc.js
# You can now run it as ./ccwc.js
```

### 3. Run commands
Count bytes (-c):
``` bash
node ccwc.js -c test.txt
# Output: 342190 test.txt
```

## 🧠 Technical Approach

The core challenge of this tool is memory efficiency. Instead of loading the entire file into memory (which crashes on large files), this implementation uses **Node.js Streams**.

- **Streaming:** The file is read in chunks (buffers).
- **Buffering:** Line and word counts are calculated incrementally as data flows through the stream.
- **Error Handling:** Robust handling for non-existent files or permission errors.

## 🧪 Testing

The tool has been tested against the actual Unix `wc` command to ensure 100% parity in results.

```bash
# Verification
wc -c test.txt       # Unix Output
node ccwc.js -c test.txt # My Implementation
Count lines (-1):
``` bash
node ccwc.js -l test.txt
# Output: 7145 test.txt
```
