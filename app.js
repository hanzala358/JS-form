
let form = document.querySelector('#form')
let Username = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let cnic = document.querySelector('#cnic')
let btn = document.querySelector('#btn')
// let btn = document.querySelector('#btn')

let nameregex = /^[a-zA-Z][a-zA-Z]{2,}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 let passwordregex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
let cnicregex = /^42\d{11}$/



form.addEventListener('submit',function(event){
event.preventDefault()
    console.log(Username.value);
    // console.log(email.value);
    // console.log(password.value);
    // console.log(cnic.value);



    // E-mail Condition
if(emailRegex.test(email.value)===true){
    console.log(email.value);
}else if(emailRegex.test(email.value)===''){
    console.log('Email not found!');
}

// Password condition

if(passwordregex.test(password.value)===true){
    console.log(password.value);
}else if(passwordregex.test(password.value)!==true){
console.log('Incorrect Password ! Password must strat with a letter contain any one special character and of length is 8 character');
}else if(passwordregex.test(password.value)===''){
    
    console.log('Password not found!');
}


// Cnic Condition 
if(cnicregex.test(cnic.value)===true){
    console.log(cnic.value);
}
else if(cnicregex.test(cnic.value)===false){
    console.log('Incorrect CNIC number ! Cnic number must start with 42 and of length is 13 digit without any special character');
}
else if(cnicregex.test(cnic.value)=== ''){
    console.log('Cnic number not found !');
}



})

// iske baad regex wali validatoin lagani h ab wo kal karonga Insha Allah !