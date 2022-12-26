
// >>>>>>>>>>>>>>>>Form Validatio<<<<<<<<<<<<<<<<<<<<<<

let firstname = document.getElementById("first-name");

let lastname =document.getElementById("last-name");
let email = document.getElementById("email"); 
let message = document.getElementById("message") ;
let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;



function sendemail(){
  var  returnval =true;

    if(firstname .value =="" ){
      document.getElementById('error').innerHTML=("*enter your first name");
      
    returnval = false;

    }else if (firstname .value.length <3){
      document.getElementById('error').innerHTML=("*atleast 3 character  ");
      
      returnval = false;
    }else {
      document.getElementById('error').innerHTML=(" ");

      returnval =true;

    }


    if(lastname .value =="" ){
      document.getElementById('last-error').innerHTML=("*enter your last name");


      returnval = false;
    }else if (lastname .value.length <3){
      document.getElementById('last-error').innerHTML=("*atleast 3 character  ");
      
      returnval = false;
    }
    else {
      document.getElementById('last-error').innerHTML=(" ");

      returnval =true;

    }

    if(email .value =="" ){
      document.getElementById('email-error').innerHTML=("*Enter your email address");
      returnval = false;
    }
    else {
      document.getElementById('email-error').innerHTML=(" ");

      returnval =true;

    }

    if(message .value =="" ){
      document.getElementById('message-error').innerHTML=("*Enter your message");


      return false;
    }else if (message .value.length < 5 ){
      document.getElementById('message-error').innerHTML=("*write more");
      returnval = false;

    }else{
      document.getElementById('message-error').innerHTML=("");

      returnval=true;

    }
  return true;
}



    
