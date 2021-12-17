//creo 3 pulsanti
//inserisco le funzioni all'interno dell'addEvent
//i campi si generano al click dell'utente
//con append aggiungo la classe del background alla generica del box
//torno al background del generico con toggle

const button1 = document.querySelector('.level_1');
const boxContainer = document.querySelector('.box_container');

button1.addEventListener('click', function () {

    function createBox(container) {
        const box = document.createElement('div');
        box.className = 'box';
        container.append(box);
    }

    for (let i = 0; i < 100; i++) {
        createBox(boxContainer);
    }

})