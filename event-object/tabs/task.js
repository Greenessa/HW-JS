let listTabs = Array.from(document.querySelectorAll('.tab'));
let listTabsContent = Array.from(document.querySelectorAll('.tab__content'));
document.addEventListener('click', (event) => {
    // console.log(event.target);
    iClick = listTabs.indexOf(event.target);
    // console.log(iClick);
    if (iClick>-1) {
        let activeTab = document.querySelector('.tab_active');
        let activeTabContent = document.querySelector('.tab__content_active');
        activeTab.classList.remove('tab_active');
        activeTabContent.classList.remove('tab__content_active');
        listTabs[iClick].classList.add('tab_active');
        listTabsContent[iClick].classList.add('tab__content_active')
    } else return;
});