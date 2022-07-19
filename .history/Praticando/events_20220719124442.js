
const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modalWrapper')


buttonOpenModal.onclik = function() {
    modalWrapper 
    .classList
    .remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key ==='Escape'

    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})


