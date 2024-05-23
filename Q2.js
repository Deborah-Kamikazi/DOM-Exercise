let text = document.getElementById('word');
 
const increaseFont = document.getElementById('font');
 
const vise = document.getElementById('vis');

console.log(increaseFont);

increaseFont.addEventListener('dblclick' ,() => {
    // console.log("helo");
    
    text.style.fontSize = '20px ';
})

vise.addEventListener('click', () =>{
    console.log('hello');
    if(text.style.visibility === 'visible'){
        text.style.visibility = 'hidden' }
        else{
            text.style.visibility = 'visible';
        }
})