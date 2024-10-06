let listTabs = Array.from(document.querySelectorAll('.tab'));
let listTabsContent = Array.from(document.querySelectorAll('.tab__content'));
listTabs.forEach (function (tab, i) {
    tab.addEventListener('click', (event) => {
        const parent = event.target.closest('.tabs');
        console.log(parent);
        parent.querySelector('.tab_active').classList.remove('tab_active');
        parent.querySelector('.tab__content_active').classList.remove('tab__content_active');
        tab.classList.add('tab_active');
        listTabsContent[i].classList.add('tab__content_active')
    });
})    
