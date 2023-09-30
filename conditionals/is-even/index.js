const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const container = document.querySelector('.container');
 
btn.addEventListener("click", (e)=>{
   let value = input.value;

   if(value === ""){
    document.querySelector("#msg").innerHTML = "**Enter a number"
   }else{
    container.lastChild.remove();
    if(value%2 === 0){
     let p = document.createElement('p');
     let text = document.createTextNode(`${value} is even`);
     p.appendChild(text);
     container.appendChild(p);
    input.value = ""
   }
   else{
    let p = document.createElement('p');
     let text = document.createTextNode(`${value} is odd`);
     p.appendChild(text);
     container.appendChild(p);
    input.value = ""
   }
   }

   
})