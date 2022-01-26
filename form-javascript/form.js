/* FORM SUBMIT 
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() // disable form submit 
    console.log( "işlem gerçekleştirildi")
    let scoreInputDOM = document.querySelector( "#score") 
    localStorage.setItem('score', scoreInputDOM.value)
} */


let userFormDOM = document.querySelector( "#userForm")
userFormDOM.addEventListener('submit', formHandler)

let alertDOM = document.querySelector( "#alert")

let alertFunction = (title, message, className= "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<center><strong>${title}</strong>${message}</center>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector( "#username")
    const SCORE = document.querySelector( "#score")
    
    if (USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value =  ""
        SCORE.value =  ""
    } else {
        alertDOM.innerHTML = alertFunction( 
            "HEY ", 
            "incorrect entry!",
             "danger")
    }
   
}


let userListDOM = document.querySelector( "#userList")


const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `  ${userName}
        <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}
