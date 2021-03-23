var socket = io();
socket.on('posts', data => {
    loadItems();
})

const loadItems = () => {
    fetch('/prove10/fetchAll')
        .then(result => {
            return result.json();
        })
        .then(data => {
            const div = document.getElementById('list')
            clearList();
            for (num in data.avengers) {
                const avenger = data.avengers[num];
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(avenger.name + " - " + avenger.alias));
                div.appendChild(li);
            }
        })
        .catch(err => {
            console.log(err);
        })
};

const addItem = () => {
    name = document.getElementById('newAvenger').value
    alias = document.getElementById('alias').value
    if (name != '' && alias != '') {
        fetch('/prove10/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, alias })
        });
    }
}

const clearList = () => {
    parent = document.getElementById('list')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const clearTextField = () => {
    document.getElementById('newAvenger').value = '';
    document.getElementById('alias').value = '';
}

const resetList = () => {
    fetch('/prove10/reset', { method: 'POST' })
        .then(data => {
            loadItems();
        })
}