/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 function dfs(image,r,c,color,newColor,R,C){
    if(image[r][c] == color){
        image[r][c] = newColor;
        if(r >= 1) dfs(image,r-1,c,color,newColor,R,C);
        if(r+1 < R) dfs(image,r+1,c,color,newColor,R,C);
        if(c >= 1) dfs(image,r,c-1,color,newColor,R,C);
        if(c+1 < C) dfs(image,r,c+1,color,newColor,R,C);
    }
}
var floodFill = function(image, sr, sc, newColor) {
    let R = image.length, C = image[0].length, color = image[sr][sc];
    if (color === newColor) return image;
    dfs(image,sr,sc,color,newColor,R,C);
    return image;    
};