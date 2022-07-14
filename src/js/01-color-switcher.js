const btnStart = document.querySelector(`button[data-start]`);
const btnStop = document.querySelector(`button[data-stop]`);
const bodyEl = document.querySelector('body');
btnStart.addEventListener('click', colorChange);
btnStop.addEventListener('click', stopColorChange);

let timeChangeColor = null;

btnStop.disabled = true;

function colorChange() {
  timeChangeColor = setInterval(() => {
      bodyEl.style.backgroundColor = `${getRandomHexColor()}`; 
  }, 1000)

    btnStart.disabled = true
    btnStop.disabled = false;
}

function stopColorChange() {
  clearInterval(timeChangeColor);
  
  btnStart.disabled = false
  btnStop.disabled = true
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



