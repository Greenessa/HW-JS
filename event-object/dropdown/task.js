
const dropdown = document.querySelector('.dropdown');
const listAll = document.querySelector('.dropdown__list');
const listItems = document.querySelectorAll('.dropdown__link');

const valuePoint = document.querySelector('.dropdown__value');

dropdown.addEventListener('click', function(event) {
  // listAll.classList.toggle('dropdown__list_active');
  listAll.classList.add('dropdown__list_active');
  // event.stopPropagation();
})



// for (let item of listItems) {
//     item.addEventListener('click', function(ev) {
//     //   console.log(item.children[0].textContent);
//       value.textContent = item.children[0].textContent;
//       list.classList.remove('dropdown__list_active');
//       })  
//     }

for (let i=0; i < listItems.length;i++) {
  listItems[i].addEventListener('click', function(e) {
    console.log(e.target);
    valuePoint.textContent=listItems[i].textContent;
    console.log(valuePoint.textContent);
    // listAll.classList.remove('dropdown__list_active'); 
  })
  }


 
