const text =  document.getElementById('word');
const button1 = document.getElementById('changing');
const button2 = document.getElementById('removing');


button1.addEventListener('click',() =>{
    text.textContent = "Hello world";
})

button2.addEventListener('click',() =>{
    // text.textContent = '';
    text.remove();
})