const totalCharEl = document.getElementById('total-counter');
const remainCharEl = document.getElementById('remain-counter');

const textAreaEl = document.getElementById('textarea');

updateCounter();

textAreaEl.addEventListener("keyup", ()=>{
    updateCounter();
})

function updateCounter(){
    totalCharEl.innerHTML = textAreaEl.value.length;
    remainCharEl.innerHTML = textAreaEl.maxLength - textAreaEl.value.length;
}
