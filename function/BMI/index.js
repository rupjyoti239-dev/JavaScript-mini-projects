const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const btn = document.querySelector('#btn');
const container  = document.querySelector('.container');
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

const checkBmi = ()=>{
    if(height.value===""){
      msg1.innerHTML = "**please enter height"
    }
    else if(weight.value === ""){
      msg2.innerHTML = "**please enter weight"
    }
    else{
       msg1.innerHTML =""
       msg2.innerHTML =""
       container.lastChild.remove();
      let bmi = (weight.value/ height.value**2)*10000
      bmi = bmi.toFixed(1)
      
      height.value = ""
      weight.value = ""

      if(bmi<18.5){
        let p = document.createElement('p');
        let text = document.createTextNode(`${bmi} Underweight`)
        p.appendChild(text)
        container.appendChild(p);
      }else if(bmi<=24.9 && bmi>=18.5){
        let p = document.createElement('p');
        let text = document.createTextNode(`${bmi} Normal`)
        p.appendChild(text)
        container.appendChild(p);
      }else if(bmi<=29.9 && bmi>=25){
        let p = document.createElement('p');
        let text = document.createTextNode(`${bmi} Overweight`)
        p.appendChild(text)
        container.appendChild(p);
      }else{
        let p = document.createElement('p');
        let text = document.createTextNode(`${bmi} obese`)
        p.appendChild(text)
        container.appendChild(p);
      }

    }
}

btn.addEventListener('click', checkBmi )
