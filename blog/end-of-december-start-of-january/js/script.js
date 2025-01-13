const sky = document.querySelector('#atmosphere');
const sun = document.querySelector('#sun');

const date = document.querySelector('#date');
const dates = document.querySelectorAll('.date');
const datePositions = [];
dates.forEach(date => {
  datePositions.push(date.getBoundingClientRect().top + window.scrollY - 64);
});

const time = document.querySelector('#time');
const times = document.querySelectorAll('.time');
const timePositions = [];
times.forEach(time => {
  timePositions.push(time.getBoundingClientRect().top + window.scrollY - 64);
});

document.addEventListener('scroll', () => {
  setPart(datePositions.length - 1, date, dates, datePositions, 'date');
  setPart(timePositions.length - 1, time, times, timePositions, 'time');
});

function setPart(index, part, parts, positions, type) {
  if (window.scrollY > positions[index]) {
    part.innerHTML = parts[index].attributes[type].value;
    setAtmosphere(time.innerHTML);
  } else if (index == 0) {
    part.innerHTML = parts[0].attributes[type].value;
  } else {
    setPart(index-1, part, parts, positions, type);
  }
}

function setAtmosphere(atmosphere) {
  switch (atmosphere) {
    case 'Morning':
      sky.style.backgroundColor = 'skyblue';
      sun.style.backgroundColor = 'yellow';
      break;

    case 'Noon':
      sky.style.backgroundColor = 'skyblue';
      sun.style.backgroundColor = 'yellow';
      break;

    case 'Afternoon':
      sky.style.backgroundColor = 'orange';
      sun.style.backgroundColor = 'red';
      break;

    case 'Night':
      sky.style.backgroundColor = 'navy';
      sun.style.backgroundColor = 'white';
      break;
  
    default:
      break;
  }
}