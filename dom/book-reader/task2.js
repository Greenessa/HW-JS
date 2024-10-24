let fontElems = document.querySelectorAll('.font-size');
for (let i = 0; i < fontElems.length; i++) {
    const el = fontElems[i];
    el.addEventListener('click', (e)=> {
            console.log(e.target);
            e.preventDefault();
            let prevEl = document.querySelector('.font-size_active');
            prevEl.classList.remove('font-size_active');
            el.classList.add('font-size_active');
            // let book = document.getElementById('book');
            let book = document.querySelector('.book__content')
            let size = el.dataset.size;
            book.classList.remove('book_fs-small', 'book_fs-big');
            console.log(size);
            if (size) {
                  book.classList.add(`book_fs-${size}`);
                }
            
    })   
}
let colorElems = document.querySelectorAll('.color');
for (let i = 0; i < colorElems.length; i++) {
    const elCol = colorElems[i];
    elCol.addEventListener('click', (e)=> {
            console.log(e.target);
            e.preventDefault();
            let prevElCol = elCol.parentElement.querySelector('.color_active');
            prevElCol.classList.remove('color_active');
            elCol.classList.add('color_active');
            // let book = document.getElementById('book');
            let book = document.querySelector('.book__content')
            let col = elCol.dataset.textColor;
            let colBg = elCol.dataset.bgColor;
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
            book.classList.remove('bg_color_black', 'bg_color_gray', 'bg_color_white');
            console.log(col);
            console.log(colBg);
            if (col) {
                book.classList.add(`book_color-${col}`);
                }
            if (colBg) {
                book.classList.add(`bg_color_${colBg}`); 
            }
            
    })   
}
