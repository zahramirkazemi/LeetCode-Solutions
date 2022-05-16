const form = document.getElementById('form');
form.addEventListener('submit', addRow);

function addRow(event){
    let Id = document.getElementById("id").value;
    let title = document.getElementById("name").value;
    let lang = document.getElementById("Lang").value;
    let difficulty = document.getElementById("Difficulty").value;
    let data = { id: Id, title: title, lang: lang, Difficulty: difficulty};
    postData("https://my-json-server.typicode.com/zahramirkazemi/Leetcode-Solutions/Rows",data);
    event.preventDefault();
}
async function postData(url = '', data = {}) {
    console.log(JSON.stringify(data))
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
}