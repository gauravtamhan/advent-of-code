# Advent of Code Setup

This readme provides step-by-step instructions on the development flow when solving puzzles.

## Getting Started

- Under 2022 create a new folder for the day
- Inside that folder:
  - create a `input.txt` file and copy/paste the contents of the input file from the website
  - create a `part1.js` file (this is where you will write your code)

## Development

- In the `.js` file, use the `readFile` utility function to obtain the contents of the `input.txt` file.
- To start the node server `cd` into the directory of the day and run `npx nodemon part1.js`. It will continuously watch for changes and update upon saving the file.

## Debugging

- On the skinny left sidebar of VS Code click the "Run & Debug" icon, then click "JavaScript Debug Terminal". A new terminal window will appear below.
- Set a breakpoint in your `.js` file.
- In the new terminal window `cd` to the same directory from above and run `node part1.js`.
- This will start the debugger. Can view variables in the top left.
- Click the "Step Over" button to step through the code line-by-line.
- Click the "Continue" button to finish/jump to next breakpoint

## Frequent Commands

```
cd 2022/01
```

```
npx nodemon part1.js
```

```
node part1.js
```
