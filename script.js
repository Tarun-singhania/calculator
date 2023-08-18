let string="";
let clickedElement=document.querySelectorAll('.Number');
// console.log(clickedElement);
clickedElement.forEach((Element)=>{
  Element.addEventListener('click',(event)=>{
    // console.log(event.target.innerText)
    if(event.target.innerText=="="){
      string=eval(string);
    }else if(event.target.innerText=="C"){
      console.log("yes")
      string="";
    }else if(event.target.innerText==="Del"){
      string=string.substring(0,string.length-1);
    }
    else{
      string=string+event.target.innerText;
    }
    console.log("string:",string);
    // console.log("result:",document.querySelector('.result').innerHTML)
    document.querySelector('.result').innerHTML=string;
    console.log("After result:",document.querySelector('.result').innerHTML)
  })
})
