const fs = require('fs');
let data = "Learning how to write in a file.";
fs.writeFile('xxx.md', data, (err) => {
    if (err) throw err;
})