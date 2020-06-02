const holes = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

Array.from(holes).forEach((hole) => {
   hole.onclick = () => {
       if (hole.classList.contains( 'hole_has-mole' )) {
           dead.textContent = (Number(dead.textContent) + 1).toString();
       } else {
           lost.textContent = (Number(lost.textContent) + 1).toString();
       }
       if (Number(dead.textContent) >= 10) {
           alert('Победа!');
           dead.textContent = '0';
           lost.textContent = '0';
       }
       if (Number(lost.textContent) >= 5) {
           alert('Проиграл!');
           dead.textContent = '0';
           lost.textContent = '0';
       }
   }
});