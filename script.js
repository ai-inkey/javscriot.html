function validate(e){
    e.preventDeafault();

const email= document.getElementById("email").value;
const password=document.getElementById("password").value;
const age=document.getElementById("age").value;
const msgbox=document.getElementById("massage").value;

let massage='';
if(email===''){
    massage='mail is required'
    msgbox.style.color='red';
}
else if(password===''){
    massage='password must be at least 8 characters'
    msgbox.style.color='red'
}
else if(age===''){
    massage='age must be between 12-50'
    msgbox.style.color='red'

}
else{massage='Information is valid'
    msgbox.bo.style.color='green'
}

msgbox.innertext=massage;
}


