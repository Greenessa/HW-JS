let fontElems = document.querySelectorAll('.font-size');
for (let i = 0; i < fontElems.length; i++) {
    const el = fontElems[i];
    el.addEventListener('click', (e)=> {
        if (!(el.classList.contains('font-size_active'))) {
            e.preventDefault();
            let prevEl = document.querySelector('.font-size_active');
            prevEl.classList.remove('font-size_active');
            el.classList.add('font-size_active');
            let book = document.getElementById('book');
            let size = el.dataset.size;
            console.log(size);
            if (size === "small") {
                console.log(size === "small");
                if (!(book.classList.contains('book_fs-small'))) {
                    if (book.classList.contains('book_fs-big')) {
                        book.classList.remove('book_fs-big');
                        book.classList.add('book_fs-small');
                        console.log(book);
                    }
                };
            } else if (size === "big") {
                if (!(book.classList.contains('book_fs-big'))) {
                    if (book.classList.contains('book_fs-small')) {
                        book.classList.remove('book_fs-small');
                        book.classList.add('book_fs-big');
                    }
                };
            }
            
        } 
    })   
}