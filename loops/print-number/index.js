const inputStart = document.querySelector('#inputStart');
const inputEnd = document.querySelector('#inputEnd');
const btn = document.querySelector('#btn');
const msg1 = document.querySelector("#msg1")
const msg2 = document.querySelector("#msg2")


btn.addEventListener("click", () => {
  // console.log('click');

  let start = inputStart.value;
  let end = inputEnd.value;

  if (start === "") {
    msg1.innerHTML = "Enter a number"
  }
  else if (end === "") {
    msg2.innerHTML = "Enter a number"
  }
  else {
    msg1.innerHTML = "";
    msg2.innerHTML = "";
    document.querySelector('.container').lastChild.remove();
    start = parseInt(start);
    end = parseInt(end);

       if (end < start) {
         document.querySelector('.container')
           .appendChild(document.createElement('p'))
           .appendChild(document.createTextNode(`Second value must be maximum`));
       } else {
         let ar = [];
         for (let i = start; i <= end; i++) {
           ar.push(i);
         }
         document.querySelector('.container')
           .appendChild(document.createElement('p'))
           .appendChild(document.createTextNode(`${ar}`));
       }
  }


})

