//creo 3 pulsanti
//inserisco le funzioni all'interno dell'addEvent
//i campi si generano al click dell'utente
//con append aggiungo la classe del background alla generica del box
//torno al background del generico con toggle

const button1 = document.querySelector('.level_1');
const button2 = document.querySelector('.level_2');
const button3 = document.querySelector('.level_3');

let boxContainer = document.querySelector('.box_container');

//funzione che crea i div-box
function createBox(container) {
    const box = document.createElement('div');
    box.className = 'box';
    container.append(box);

    box.addEventListener('click', function () {
        this.classList.toggle('blue');
    });
}

button1.addEventListener('click', function () {
    boxContainer.innerHTML = '';

    for (let i = 1; i < 100; i++) {
        createBox(boxContainer);
        boxContainer.classList.add('width_1');

        boxContainer.classList.remove('width_2');
        boxContainer.classList.remove('width_3');
    }
})

button2.addEventListener('click', function () {
    boxContainer.innerHTML = '';

    for (let i = 1; i < 81; i++) {
        createBox(boxContainer);
        boxContainer.classList.add('width_2');

        boxContainer.classList.remove('width_1');
        boxContainer.classList.remove('width_3');
    }
})

button3.addEventListener('click', function () {
    boxContainer.innerHTML = '';

    for (let i = 1; i < 49; i++) {
        createBox(boxContainer);
        boxContainer.classList.add('width_3');

        boxContainer.classList.remove('width_1');
        boxContainer.classList.remove('width_2');
    }
})