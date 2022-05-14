var reverseWords = function(s) {
    let res = "";
    let split = s.split(' ');
    for(let i = 0 ; i < split.length;i++)
        split[i] = split[i].split("").reverse().join("");
    
    return split.join(" ");
};