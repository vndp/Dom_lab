
const buttonOpenModal = document.getElementById('openModal')

const eventsWrapper = document.querySelector('.modalWrapper')


buttonOpenModal.onclick = function() {
  eventsWrapper
  .classList
  .remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key ==='Escape'

    if(isEscKey){
      eventsWrapper.classList.add('invisible')
    }
})


