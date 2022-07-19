//Pegar os elementos em que eu vou trabalhar

const buttonOpenModal = document.getElementById
('openModal')

const modalWrapper = document.querySelector('.modal-modalWrapper')


buttonOpen

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key ==='Escape'

    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})


