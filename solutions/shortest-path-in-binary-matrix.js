/**
 * @param {number[][]} grid
 * @return {number}
 */
 function shortestPathBinaryMatrix(grid) {
    const n = grid.length - 1;
    
    if (grid[0][0] || grid[n][n]) {
        return -1;
    }

    if (n === 0 && grid[0][0] === 0) {
        return 1;
    }
    
    const queue = [[[0,0]]];
    const moves = [[-1,0], [0,-1], [-1,-1], [-1,1], [1,0], [0,1], [1,1], [1,-1]];
    
    grid[0][0] = 1;
    let distance = 0;
    
    while (queue.length > 0) {
        const tasks = queue.pop();
        const nextTasks = [];
        
        distance += 1;

        for (let [x,y] of tasks) {
            for (let [moveX,moveY] of moves) {
                const x2 = x + moveX;
                const y2 = y + moveY;
                
                if (x2 >= 0 && y2 >= 0 && x2 <= n && y2 <= n) {
                    if (grid[y2][x2] !== 1) {
                        nextTasks.push([x2, y2]);
                        
                        grid[y2][x2] = 1;
                        
                        if (x2 === n && y2 === n) {
                            return distance + 1;
                        }
                    }
                }
            }
        }
        
        if (nextTasks.length > 0) {
            queue.push(nextTasks);
        }
    }
    
    return -1;
};