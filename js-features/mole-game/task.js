

let countKill=0;
let countNoKill=0;
let numHole = 1;
const changeHoleForMole = () => {
  let numHoleNew = Math.floor(1 + Math.random() * 9 );
  if (numHoleNew == numHole) {
    changeHoleForMole();
    return;
  }
  document.getElementById(`hole${numHole}`).classList.remove('hole_has-mole');
  document.getElementById(`hole${numHoleNew}`).classList.add('hole_has-mole');
  numHole=numHoleNew;
  setTimeout(function () {changeHoleForMole();},800);
};
dead = document.getElementById('dead');
lost = document.getElementById('lost');
getHole = (ind) => document.getElementById(`hole${ind}`);
for (let index = 1; index < 10; index++) {
    let hole = getHole(index);
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains('hole_has-mole')){
            countKill++;
            // alert(countKill)
            dead.textContent = countKill;
        } else {
            countNoKill++;
            // alert(countNoKill);
            lost.textContent = countNoKill;
        }
    if (countNoKill > 5) {
        alert('Вы проиграли');
        countKill=0;
        countNoKill=0;
        dead.textContent = countKill;
        lost.textContent = countNoKill;
    }
    if (countKill==10) {
        alert('Победа!');
        countKill=0;
        countNoKill=0;
        dead.textContent = countKill;
        lost.textContent = countNoKill;
    }
})
}
changeHoleForMole();

  