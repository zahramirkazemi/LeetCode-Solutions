/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let res = []
    let perm = []
    let map = {}
    for (const num of nums) {
        map[num] = map[num] ? map[num]+1 : 1
    }
    
    function dfs() {
        if (perm.length == nums.length) {
            res.push(perm.slice())
            return
        }
        
        for (const n in map) {
            if (map[n] > 0) {
                perm.push(n)
                map[n] -= 1
                
                dfs()
                
                map[n] += 1
                perm.pop()
            }
        }
    }
    dfs()
    return res
};