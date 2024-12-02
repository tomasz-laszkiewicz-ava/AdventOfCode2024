function isReportSafe(reportValues: number[]): any {
  // get diff beetwen neighbors values
  const diff = reportValues
    .map((value, index) => {
      if (index === reportValues.length - 1) {
        return null;
      }
      const nextValue = reportValues[index + 1];
      return value - nextValue;
    })
    .filter((value) => value !== null);

  let isSafe = true;
  if (diff.some((value) => Math.abs(value) > 3)) {
    isSafe = false;
  }

  if (isSafe) {
    isSafe =
      diff.every((value) => value > 0) || diff.every((value) => value < 0);
  }

  return isSafe;
}

function isReportSafeWithSingleBad(reportValues: number[]): any {
  const result = isReportSafe(reportValues);

  if (result) {
    return true;
  }

  for (let i = 0; i < reportValues.length; i++) {
    const reportValuesCopy = [...reportValues];
    reportValuesCopy.splice(i, 1);
    const result = isReportSafe(reportValuesCopy);
    if (result) {
      return true;
    }
  }

  return false;
}

function part1(lines: string[]) {
  function getSafeReportsCount(lines: string[]) {
    // split each line by space
    const isReportSafeArray = lines.map((line) => {
      const reportValues = line.split(" ").map((point) => parseInt(point));
      return isReportSafe(reportValues);
    });
    return isReportSafeArray.filter((isSafe) => isSafe).length;
  }

  return getSafeReportsCount(lines).toString();
}

function part2(lines: string[]) {
  function getSafeReportsCount(lines: string[]) {
    // split each line by space
    const isReportSafeArray = lines.map((line) => {
      const reportValues = line.split(" ").map((point) => parseInt(point));
      return isReportSafeWithSingleBad(reportValues);
    });
    return isReportSafeArray.filter((isSafe) => isSafe).length;
  }

  return getSafeReportsCount(lines).toString();
}

export { part1, part2 };
