
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = ''; 
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); 
    boxesContainer.appendChild(box); 
  }
}


function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}
createBtn.style.backgroundColor = '#4e75ff';
destroyBtn.style.backgroundColor = '#ff4e4e';
createBtn.style.color = '#fff';
destroyBtn.style.color = '#fff';


createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) { 
    createBoxes(amount);
    input.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});


destroyBtn.addEventListener('click', destroyBoxes);