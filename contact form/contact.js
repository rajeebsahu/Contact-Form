function validateForm(){
    var name = document.forms["myform"]["name"]
    var email = document.forms["myform"]["email"]
    var message = document.forms["myform"]["message"]
    var phone = document.forms["myform"]["phone"]

    if (name.value == ""){
        window.alert("Name Field Empty");
        name.focus();
        return false;
    }
    if (email.value == ""){
        window.alert("Please enter your email.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@") < 0){
        window.alert("please enter your valid email address.");
        email.focus();
        return false;
    }
    if (phone.value ==""){
        window.alert("Please enter the phone number.");
        phone.focus();
        return false;
    }
    
    if (phone.value.length != 10){  
        window.alert("Invalid phone no.");
        phone.focus();
        return false;
    }
    

    if (message.value == ""){
        window.alert("Enter message.");
        message.focus();
        return false;
    }
    return true;
}
