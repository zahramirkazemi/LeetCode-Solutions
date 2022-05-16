var reverseString = function(s) {
    let start = 0, 
        end = s.length-1;
    while(start < end){
        let temp = s[start];
        s[start] = s[end];
        s[end]= temp;
        start++;
        end--;
    }
    return s;
};