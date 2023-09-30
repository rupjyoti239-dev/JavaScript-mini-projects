const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
let container = document.querySelector('.container');
const msg = document.querySelector('#msg')


btn.addEventListener('click', () => {
  let inputValue = input.value;

  if (inputValue === "") {
    msg.innerHTML = "Please enter your age";
  }
  else {
    msg.innerHTML = "";
    container.lastChild.remove();
    if (inputValue >= 18) {
      let p = document.createElement('p');
      let text = document.createTextNode("Yessss!!  Your are old enough to drive ")
      p.appendChild(text);
      container.appendChild(p);
      input.value = "";
    }
    else {
      let result = 18 - inputValue;
      // console.log(result);
      let p = document.createElement('p');
      let text = document.createTextNode(`You are left with ${result} years to drive.`);
      p.appendChild(text);
      container.appendChild(p);
      input.value = "";
    }

  }


})