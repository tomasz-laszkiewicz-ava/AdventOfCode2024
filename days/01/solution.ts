function part1(lines: string[]) {
    
    function getTotalDistance(lines: string[]) {
        const leftPoints: number[] = [];
        const rightPoints: number[] = [];
      
        // split each line by space
        lines.forEach(line => {
          const [left, right] = line.split('   ');
          leftPoints.push(parseInt(left));
          rightPoints.push(parseInt(right));
        });

        const sortedLeftPoints = leftPoints.sort((a, b) => a - b);
        const sortedRightPoints = rightPoints.sort((a, b) => a - b);
      
        const totalDistance = sortedLeftPoints.reduce((acc, point, index) => {
          return acc + Math.abs(point - sortedRightPoints[index]);
        }, 0);

        const result = totalDistance;
        return result;
    }

    return getTotalDistance(lines).toString();
}

function part2(lines: string[]) {

    function getHowManyTimeOccur(lines: string[]) {
        const leftPoints: number[] = [];
        const rightPoints: number[] = [];
      
        // split each line by space
        lines.forEach(line => {
          const [left, right] = line.split('   ');
          leftPoints.push(parseInt(left));
          rightPoints.push(parseInt(right));
        });

        const result = leftPoints.reduce((acc, point, index) => {
            const howManyTimesInRight = rightPoints.filter(rightPoint => rightPoint === point).length;
            return acc + point*howManyTimesInRight;
        }, 0);


        return result;
    }

    return getHowManyTimeOccur(lines);
}

export { part1, part2 };


