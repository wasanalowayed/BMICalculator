const btn = document.getElementById('calculate');
btn.addEventListener('click', function(){
    let height =document.querySelector('#height').value;
    let weight =document.querySelector('#weight').value;
    let bmi = 00

    if (height=='' || weight==''){
        alert("Please fill out the fields")
        return;
    }
    else if (height<=0 || weight <=0){
    alert("Please fill out the fields with proper values")
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
