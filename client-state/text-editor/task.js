let textEl = document.querySelector('textarea');
textEl.addEventListener('change', (e) => {
    e.preventDefault();
     let newText = textEl.value;
     console.log(newText);
     if (newText.trim()) {
        localStorage.setItem('text', newText);
     } 
    
});
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    let oldText = localStorage.getItem('text');
    if (oldText) {
        textEl.value = oldText;
    } 
})
let button = document.querySelector('button');
button.addEventListener('click', () => {
    textEl.value = '';
    localStorage.clear();
})

