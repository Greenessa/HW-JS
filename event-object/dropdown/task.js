
const dropdown = document.querySelector('.dropdown');
const list = document.querySelector('.dropdown__list');
const listItems = Array.from(document.querySelectorAll('.dropdown__item'));
const value = document.querySelector('.dropdown__value');
// const listItems = Array.from(document.querySelectorAll('.dropdown__link'))
// console.log(listItems[2].children[0].textContent);
// value.textContent = listItems[2].children[0].textContent;
// console.log(value.textContent);

dropdown.addEventListener('click', function(event) {
  list.classList.toggle('dropdown__list_active');
  event.stopPropagation();
})
// document.addEventListener('click', (e)=> {
//     if(e.target.closest('.dropdown__list')) return 
    
//     list.classList.remove('dropdown__list_active');
  
//   })

// for (let item of listItems) {
//     item.addEventListener('click', function(ev) {
//     //   console.log(item.children[0].textContent);
//       value.textContent = item.children[0].textContent;
//       list.classList.remove('dropdown__list_active');
//       })  
//     }
listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        value.textContent = item.children[0].textContent;
        list.classList.remove('dropdown__list_active'); 
    })
})

 
