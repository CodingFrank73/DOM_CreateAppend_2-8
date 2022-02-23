document.querySelector('#enter').addEventListener('click', addItem);
document.querySelector('#userinput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') { addItem() }
})

function addItem() {
    let newItem = document.getElementById("userinput");
    let newListElement = document.createElement('li');

    newListElement.textContent = newItem.value;

    document.body.childNodes[1].childNodes[9].appendChild(newListElement)

}

