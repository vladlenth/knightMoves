let knightMoves = function (start, end) {
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const isValid = (nx, ny) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8;

    let seen = new Set();
    let queue = [[start[0], start[1], [start]]];

    while (queue.length) {
        const nextQueue = [];
        for (let current of queue) {
            const [currentX, currentY, path] = current;

            if (currentX === end[0] && currentY === end[1]) {
                return path;
            }

            for (let m of moves) {
                const nextX = currentX + m[0];
                const nextY = currentY + m[1];

                if (isValid(nextX, nextY) && !seen.has(nextX + "." + nextY)) {
                    seen.add(nextX + "." + nextY);
                    nextQueue.push([nextX, nextY, [...path, [nextX, nextY]]]);
                }
            }
        }
        queue = nextQueue;
    }

    return null;
};