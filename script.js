// function validation(){
//     alert("working");
// }

function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var date = document.getElementById("date").value;
    var type = document.getElementById("type").value;
    var error_message = document.getElementById("error_message");
    var text;

    if(name.length <3){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email Address";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 9){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!")
    return true;
}