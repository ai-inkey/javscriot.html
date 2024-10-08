function validate(e){
    e.preventDefault();

const email= document.getElementById("email").value;
const password=document.getElementById("password").value;
const age=document.getElementById("age").value;
const msgBox=document.getElementById("message");

let message='';
if(email===''){
    message='mail is required'
    msgBox.style.color='red';
}
else if(password===''){
    message='password must be at least 8 characters'
    msgBox.style.color='red'
}
else if(age===''){
    message='age must be between 12-50'
    msgBox.style.color='red'

}
else{message='Login Successfull'
    msgBox.style.color='green'
}

msgBox.innerText=message;
}


