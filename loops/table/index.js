const btn = document.querySelector('#btn');
const input = document.querySelector("#input");
const container = document.querySelector('.container');


btn.addEventListener('click', ()=>{
  if(input.value===""){
    document.querySelector("#msg").innerHTML = "Enter a number";
  }
  else{
    document.querySelector("#msg").innerHTML = "";
    container.lastChild.remove();
    let str = "";
    for(let i =1;i<=10;i++){
       str += ` ${i} x ${input.value} = ${i*input.value}`;
      }
      
    // console.log(str);
    let div = document.createElement('div');
    let text = document.createTextNode(`${str}`);
    div.appendChild(text);
    container.appendChild(div);
  }

})
