const form=document.querySelector('.form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("he")
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(height===''||height<0 ||isNaN(height)){
        results.innerHTML=`please give a valid height${height}`
    }
    else if(weight===''||weight<0 ||isNaN(weight)){
        results.innerHTML=`please give a valid height${weight}`
    }else{
      const bmi= (weight/((height*height)/1000)).toFixed(2)
      results.innerHTML=`<span>${bmi}</span>`
      if(bmi<18.6){
        document.querySelector('.condtion').innerHTML="you are under weight"

      }
      else if(bmi>18.6 && bmi<24.9){
         document.querySelector('.condtion').innerHTML="you are ideal condtion weight"

      }
      else{
        document.querySelector('.condtion').innerHTML="you are over weight"
      }
    }

});