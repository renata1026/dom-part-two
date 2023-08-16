//target the element
const body = document.querySelector('body');

//section 1 Day10
const containerOne = document.createElement('div');
const h2Day10 = document.createElement('h2');
const hrDay10 = document.createElement('hr');
h2Day10.textContent = 'Day10';

// section 2 Toggle the Box
const containerTwo = document.createElement('div');
const h2Toggle = document.createElement('h2');
const hrToggle = document.createElement('hr');
h2Toggle.textContent = 'Toggle the Box';
const box = document.createElement('div');
box.style.cssText = 'width:100px;height:100px;border:2px solid #000';
const toggle = box.addEventListener('click', () => {
  return box.classList.toggle('blue');
});

//section 3 Mirror
const containerThree = document.createElement('div');
const h2Mirror = document.createElement('h2');
const hrMirror = document.createElement('hr');
h2Mirror.textContent = 'Mirror';
const input = document.createElement('input');
const form = document.createElement('form');
const ul = document.createElement('ul');
const li = document.createElement('li');
input.addEventListener('input', () => {
  li.textContent = input.value;
});
console.log(input.textContent);
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

//section 4 Counter
const containerFour = document.createElement('div');
const flex = document.createElement('flex');
flex.style.cssText = 'display:flex;gap:5px;';
const h2Counter = document.createElement('h2');
h2Counter.textContent = 'Counter';
const hrCounter = document.createElement('hr');
const number = document.createElement('div');

let count = 0;
number.textContent = count;

const decrement = document.createElement('button');
decrement.textContent = '-';
decrement.style.cssText = 'padding:2px 7px;border-width:1px;border-radius:3px';
decrement.addEventListener('click', () => {
  count = count - 1;
  number.textContent = count;
});
const increment = document.createElement('button');
increment.textContent = '+';
increment.style.cssText = 'padding:2px 7px;border-width:1px;border-radius:3px;';
increment.addEventListener('click', () => {
  count = count + 1;
  number.textContent = count;
});

//section 5
const containerFive = document.createElement('div');
const h2Race = document.createElement('h2');
h2Race.textContent = 'Race';
const pRace = document.createElement('p');
pRace.textContent = 'Move car to the right by pressing the right arrow';

const car = document.createElement('p');
car.textContent = '🏎';
car.style.cssText = 'font-size:100px;margin-top:-50px;margin-bottom:0';
document.body.appendChild(car);

document.addEventListener('keydown', (e) => {
  const currentMarginLeft = parseInt(car.style.marginLeft, 10) || 0;
  if (e.key === 'ArrowRight') {
    car.style.marginLeft = currentMarginLeft + 10 + 'px';
  } else if (e.key === 'ArrowLeft') {
    car.style.marginLeft = currentMarginLeft - 10 + 'px';
  }
});
// Make the element focusable
car.addEventListener('click', () => {
  car.focus();
});
const hrRace = document.createElement('hr');

//section 6
const containerSix = document.createElement('div');
const h2stopWatch = document.createElement('h2');
h2stopWatch.textContent = 'Stopwatch';
h2stopWatch.style.margin = 0;

let startTime = 0;
let intervalId;
const timer = document.createElement('p');
const startButton = document.createElement('button');
const stopButton = document.createElement('button');
const resetButton = document.createElement('button');

timer.textContent = `${startTime} seconds`;
timer.style.cssText = 'color: green; font-size: 50px;margin-top:20px;';

startButton.textContent = 'Start';
startButton.addEventListener('click', () => {
  startTime = Date.now();
  clearInterval(intervalId); // Clear any existing intervals
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Calculate elapsed seconds
    timer.textContent = `${elapsedTime} seconds`;
  }, 1000); // Update every second
});

stopButton.textContent = 'Stop';
stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
});

resetButton.textContent = 'Clear';
resetButton.addEventListener('click', () => {
  clearInterval(intervalId);
  timer.textContent = `0 seconds`;
});

//Append elements container one
body.appendChild(containerOne);
containerOne.appendChild(h2Day10);
containerOne.appendChild(hrDay10);
//Append elements container two
body.appendChild(containerTwo);
containerTwo.appendChild(h2Toggle);
containerTwo.appendChild(box);
containerTwo.appendChild(hrToggle);
//Append elements container three
body.appendChild(containerThree);
containerThree.appendChild(h2Mirror);
containerThree.appendChild(form);
form.appendChild(input);
ul.appendChild(li);
form.appendChild(ul);
containerThree.appendChild(hrMirror);
//Append elements container four
body.appendChild(containerFour);
containerFour.appendChild(h2Counter);
containerFour.appendChild(flex);
flex.appendChild(decrement);
flex.appendChild(number);
flex.appendChild(increment);
containerFour.appendChild(hrCounter);
//Append elements container five
body.appendChild(containerFive);
containerFive.appendChild(h2Race);
containerFive.appendChild(pRace);
containerFive.appendChild(car);
containerFive.appendChild(hrRace);
//Append elements container six
body.appendChild(containerSix);
containerSix.appendChild(h2stopWatch);
containerSix.appendChild(timer);
containerSix.appendChild(startButton);
containerSix.appendChild(stopButton);
containerSix.appendChild(resetButton);
containerSix.appendChild(hrStopWatch);
