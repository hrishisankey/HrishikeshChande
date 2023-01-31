
//password streangth checker
let checkStreangth=(password,passStrength)=>{
    

    if(password.match(/[a-z]+/))
    {
        passStrength+=1;
    }
    if(password.match(/[A-Z]+/))
    {
        passStrength+=1;
    }
    if(password.match(/[0-9]+/))
    {
        passStrength+=1;
    }
    if(password.match(/[!@#$%^&*~-]+/))
    {
        passStrength+=1;
    }
    switch(passStrength){
        case 1:
            passError.innerHTML ="strength of password 0%";
            break;

        case 2:
            passError.innerHTML ="strength of password 30%";
            break;

        case 3:
            passError.innerHTML ="strength of password 70%";
            break;

        case 4:
            passError.innerHTML ="";
            break;
    }
    if(passStrength==4)
    {
        if(password.length<9){
            passError.innerHTML = "length must be 8";
        }
    }
    
}

//check email correct
let checkEmail=(email)=>{
    let domain="sankeysolutions.com";
    var emailReg = new RegExp("^([A-Za-z0-9_\\-\\.])+@" + domain + "$");
    if(!(email.match(emailReg)))
    {
        emailError.innerHTML = "Invalid Email";
    }
    else if((email.match(emailReg))){
        emailError.innerHTML = "";
    }
}

//main function
function submit_by_tag() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError= document.getElementById("emailError");
    var passError= document.getElementById("passError");
 

    if(email=="abc@sankeysolutions.com"&&password=="Aa@123456")
    {
        console.log(email,password);
        window.location.replace("welcome.html");
    }

    var passStrength=0,emailval=true,passval=true;

    // if(email=="abc@sankeysolutions.com"&&password=="Aa@123456")
    // {
    //     emailError.innerHTML = "please enter correct email";
    //     passError.innerHTML = "please enter correct password";
    //     emailval=false,passval=false;
    // }
     if(email==""){
        emailError.innerHTML = "please enter email";
        emailval=false
    }
    else if(password=="")
    {
        passError.innerHTML = "please enter password";
        passval=false;
    }
    if(emailval)
    {
        checkEmail(email);
    }
    if(passval){
        // checkStreangth(password,passStrength);
    }
    

}
