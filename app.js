// console.log("hello world");



const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const cnic = document.querySelector("#cnic")

// let usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
// let usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
// let usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;




const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z\d])[A-Za-z\d!@#$%^&*]{8,}$/;

const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;






form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.querySelector("#username")
    const email = document.querySelector("#email")
const password = document.querySelector("#password")
const cnic = document.querySelector("#cnic")
if (usernameRegex.test(username.value)===true) {
    console.log(username.value);

}else{
    console.log("invalid username");
}

if (emailRegex.test(email.value)===true) {
    console.log(email.value);
}else{
    console.log("invalid email");
}

if (passwordRegex.test(password.value)===true) {
    console.log(password.value);
}else{
    console.log("invalid password");
}

if (cnicRegex.test(cnic.value)===true) {
    console.log(cnic.value);
}else{
    console.log("invalid cnic");
}
    // console.log(name.value);
    // console.log(emailRegex.test(email.value));
    // console.log(nic.value);
    // console.log(password.value);
})