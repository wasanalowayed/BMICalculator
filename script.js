/* constats that holds elements 
1- 
2- 
3- 
4-
*/ 

const btn = document.getElementById('calculate');
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const modal = document.querySelector('#modal');
const overlay = document.getElementById('overlay')

btn.addEventListener('click', function(){
    let height =document.querySelector('#height').value;
    let weight =document.querySelector('#weight').value;
    let bmi = 00

    if (height=='' || weight==''){
        //alert("Please fill out the fields")
       openModal(modal)
       document.querySelector('#modal .modal-body span').innerText = "Please fill out all fields.";
        return;
    }
    else if (height<=0 || weight <=0){
    //alert("Please fill out the fields with proper values")
    openModal(modal)
       document.querySelector('#modal .modal-body span').innerText = "Please fill out the fields with proper values.";
    return;
}
else {
    height = height/100
    bmi = weight / (height*height);
    bmi = bmi.toFixed(2);
    //return bmi;
    document.querySelector('#result').innerHTML = bmi;
    console.log(bmi);

    let statues = '';

    if (bmi<18.5) {
        document.querySelector('#comment').innerHTML = "underweight";
    }
    else if (bmi>=18.5 && bmi <25) {
        document.querySelector('#comment').innerHTML = "normal";
    }
    else if(bmi>=25 && bmi<30) {
        document.querySelector('#comment').innerHTML = "overweight";
    }
}
}) ;

/*Closing the Modal eventListener */

closeModalButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        closeModal(modal)
    })
})





/* Functions to open/close Modal */

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


