
const listAll = document.querySelector('.dropdown__list');
const listItems = document.querySelectorAll('.dropdown__link');

const valuePoint = document.querySelector('.dropdown__value');

valuePoint.addEventListener('click', function(event) {
  listAll.classList.toggle('dropdown__list_active');
})

for (let i=0; i < listItems.length;i++) {
  listItems[i].addEventListener('click', function(e) {
    e.preventDefault();
    valuePoint.textContent=this.textContent;
  })
  }
