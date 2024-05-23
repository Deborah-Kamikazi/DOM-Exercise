const vname = document.getElementById('name');
const pnames = document.getElementById('pname');

vname.addEventListener('input', () =>{
    
  
pnames.textContent = vname.value;
// pnames.appendChild(vname.value);

})