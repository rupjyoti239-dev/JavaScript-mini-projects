function validation() {
  let returnValue = true;
  clearError();

  const name = document.forms["myForm"]["username"].value.trim();
  const email = document.forms['myForm']["useremail"].value.trim();
  const contact = document.forms['myForm']["usercontact"].value.trim();
  const password = document.forms['myForm']["userpassword"].value.trim();
  const con_password = document.forms['myForm']["c_password"].value.trim();


  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  let regPhone = /^\d{10}$/;   
  let regName = /^[a-zA-Z\-]+$/;
  var upperCaseLetters = /[A-Z]/g;


  if (name.length < 5) {
    setError("username", `user name is too short`);
    returnValue = false;
  }
  if(!(email.includes('.'))){
    setError("useremail", `invalid email`);
    returnValue = false;
  }
  if((contact.length != 10)){
    setError("usercontact", `invalid number`)
    returnValue = false;
  }


  if(password.length<6){
     setError("userpassword", `password is too short`)
    returnValue = false;
  }
  if(con_password !== password){
     setError("c_password", `password did not match`)
    returnValue = false;
  }
 



  
  return returnValue;
}








function setError(id, msg) {
  let element = document.getElementById(id);
  element.nextElementSibling.innerHTML = msg;
  element.focus()
}


function clearError(){
  let element = document.getElementsByClassName('error');
  for(let item of element){
    item.innerHTML = "";
  }
}