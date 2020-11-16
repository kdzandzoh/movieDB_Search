import React from 'react'

const btnItems = docuemnt.querySelectorAll('.btn');

function Choose(e) {
        removeBorder();
        this.classList.add('btn-border');
}

function removeBorder() {
    btnItems.forEach(item => item.classList.remove('btn-border'));
}
btnIterms.forEach(item => item.addEventListener('click', selectItem));

