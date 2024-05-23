 const bodys = document.getElementById('body');
  
 const buttons = document.getElementById('buttonse');

const butttones = document.getElementById('getcolor')
   


buttons.addEventListener('click',() =>{
    let colors=  "#" +Math.floor (Math.random()*256).toString();
    console.log("heloo"),
    bodys = bodys.style.backgroundColor = colors;
    
})