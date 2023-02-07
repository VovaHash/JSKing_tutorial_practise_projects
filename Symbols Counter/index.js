const totalCharEl = document.getElementById('total-counter');
const remainCharEl = document.getElementById('remain-counter');

const textAreaEl = document.getElementById('textarea');

totalCharEl.innerHTML = 0;
remainCharEl.innerHTML = textAreaEl.maxLength;

textAreaEl.addEventListener("keyup", ()=>{
    totalCharEl.innerHTML = textAreaEl.value.length;
    remainCharEl.innerHTML = textAreaEl.maxLength - textAreaEl.value.length;
})


