const fs = require('fs');
const path = require('path');

const day = process.argv[2];
const showTime = Boolean(process.argv[3]);
const filePath = path.resolve(__dirname, 'days', day, 'solution.ts');

console.log(filePath)

if (fs.existsSync(filePath)) {
  require('ts-node').register();
  const {solutionner} = require('./utils/solutionner.ts');
  const {part1, part2} = require(filePath);
  solutionner(day, part1, part2, showTime);
} else {
  console.error(`Main file "${day}" not found.`);
  process.exit(1);
}