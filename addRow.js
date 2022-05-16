const form = document.getElementById('form');
form.addEventListener('submit', addRow);

function addRow(event){
    let Id = document.getElementById("id").value;
    let title = document.getElementById("name").value;
    let lang = document.getElementById("Lang").value;
    let difficulty = document.getElementById("Difficulty").value;
    let data = { id: Id, title: title, lang: lang, Difficulty: difficulty};
    postData("http://localhost:3000/Rows",data);
    event.preventDefault();
}
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
}