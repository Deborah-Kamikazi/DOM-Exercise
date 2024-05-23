

const textes =  document.getElementById('texts');
var nums = document.getElementById('number');


textes.addEventListener('input',()=>{
    nums.textContent = textes.value.length;
})


