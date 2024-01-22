const queryBtn = document.getElementById('queryBtn')
const queryContainer = document.getElementById('queryContainer')
const closedForm = document.getElementsByClassName('closedForm')
const shownForm = document.getElementsByClassName('openForm')
const submitBtn = document.getElementById('querySubmit')

queryBtn.addEventListener('click', function(){
    queryContainer.classList.toggle('queryActive');
})