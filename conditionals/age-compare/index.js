const user1Name = document.querySelector('#user1Name');
const user1Age = document.querySelector('#user1Age');
const user2Name = document.querySelector('#user2Name');
const user2Age = document.querySelector('#user2Age');
const btn = document.querySelector('#btn');
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
const container = document.querySelector('.container');



btn.addEventListener('click', function(){

if(user1Age.value === ""){
  msg1.innerHTML = "** Field cannot be empty"
}
else if(user2Age.value === ""){
   msg2.innerHTML = "** Field cannot be empty"
}
else{
  msg1.innerHTML = ""
  msg2.innerHTML = ""
  container.lastChild.remove();
  if(user1Age.value > user2Age.value){
    let p = document.createElement('p');
    let text = document.createTextNode(`${user1Name.value} is ${user1Age.value - user2Age.value} years older than ${user2Name.value}`);
    console.log(text);
    p.appendChild(text)
    container.appendChild(p);
    user1Age.value=""
    user2Age.value=""
    user1Name.value=""
    user2Name.value=""
  }
  else{
     let p = document.createElement('p');
    let text = document.createTextNode(`${user2Name.value} is ${user2Age.value - user1Age.value} years older than ${user1Name.value}`);
    console.log(text);
    p.appendChild(text)
    container.appendChild(p);
     user1Age.value=""
    user2Age.value=""
    user1Name.value=""
    user2Name.value=""
  }
}





})

