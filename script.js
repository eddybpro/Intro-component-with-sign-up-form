const fName = document.getElementById('f-name');
const lName = document.getElementById('l-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.querySelector('.btn');

const fNameRegex = /[a-z]{3,8}/;
const lNameRegex = /[a-z]{3,8}/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex =  /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!fNameRegex.test(fName.value)){
        fName.style.border = '2px solid hsl(0, 100%, 74%)';
        fName.placeholder='';
        fName.nextElementSibling.classList.toggle('none');
        fName.nextElementSibling.nextElementSibling.classList.toggle('none')
    }
    if(!lNameRegex.test(lName.value)){
        lName.style.border = '2px solid hsl(0, 100%, 74%)';
        lName.placeholder='';
        lName.nextElementSibling.classList.toggle('none');
        lName.nextElementSibling.nextElementSibling.classList.toggle('none')
    }
    if(!passwordRegex.test(password.value)){
        password.style.border = '2px solid hsl(0, 100%, 74%)';
        password.placeholder='';
        password.nextElementSibling.classList.toggle('none');
        password.nextElementSibling.nextElementSibling.classList.toggle('none')
    }
    if(!emailRegex.test(email.value)){
        email.style.border = '2px solid hsl(0, 100%, 74%)';
        email.placeholder='';
        email.nextElementSibling.classList.toggle('none');
        email.nextElementSibling.nextElementSibling.classList.toggle('none')
    }
})
























