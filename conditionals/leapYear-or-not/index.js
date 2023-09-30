const input = document.querySelector('#input');
const btn = document.querySelector("#btn");

btn.addEventListener('click', ()=>{
  if(input.value === ""){
    document.querySelector("#msg").innerHTML = "**Enter a year"
  }
  else{
    document.querySelector("#msg").innerHTML = "";
    let year = input.value;
    document.querySelector('.container').lastChild.remove();
    if((year%4 ===0 && year%100 !==100) || year%400===0){
      let p  = document.createElement('p');
      let text = document.createTextNode(`${year} is  leap year`);
      p.appendChild(text);
      document.querySelector('.container').appendChild(p);
      input.value="";
    }
    else{
       let p  = document.createElement('p');
      let text = document.createTextNode(`${year} is not  leap year`);
      p.appendChild(text);
      document.querySelector('.container').appendChild(p);
      input.value="";
    }
  }
})