const fs = require('fs');
let jsonData = require('./db.json');
data = `# LeetCode-Solutions \nmy solutions to leetcode.com problems in javascript language. \n total: ${jsonData.Rows.length} \n \n| ID | Title | Solution | Difficulty |\n|---| ----- | -------- | ---------- |`
for(r of jsonData.Rows.sort((a, b) => (parseInt(a.id) - parseInt(b.id)) )){
    data += `\n|${r.id}|[${r.title}](https://leetcode.com/problems/${r.title}/) | [${r.lang}](${r.title}.js)|${r.Difficulty}|`
}
fs.writeFile('README.md', data, (err) => {
     if (err) throw err;
})