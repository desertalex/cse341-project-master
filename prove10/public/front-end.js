const loadItems = () => {
    fetch('http://localhost:5000/prove10/fetchAll')
        .then(result => {
            return result.json();
        })
        .then(data => {
            const div = document.getElementById('list')
            clearList();
            for (num in data.avengers) {
                const avenger = data.avengers[num];
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(avenger.name));
                div.appendChild(li);
            }
        })
        .catch(err => {
            console.log(err);
        })
};

const addItem = (name) => {
    if (name != '') {
        fetch('http://localhost:5000/prove10/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
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
}

const resetList = () => {
    fetch('http://localhost:5000/prove10/reset', { method: 'POST' })
        .then(data => {
            loadItems();
        })
}