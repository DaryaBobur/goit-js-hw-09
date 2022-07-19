import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;

btnStart.addEventListener('click', timer);

const valueDateTime = document.querySelector('#datetime-picker');
const valueDays = document.querySelector('[data-days]');
const valueHours = document.querySelector('[data-hours]');
const valueMinutes = document.querySelector('[data-minutes]');
const valueSeconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: {
    "firstDayOfWeek": 1 // start week on Monday
  },
  onClose(selectedDates) {

    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future!');
      btnStart.disabled = true;
    }
    if (selectedDates[0] > new Date()) {
      btnStart.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);

  function timer() {
    btnStart.disabled = true;
    valueDateTime.disabled = true;

      const timerId = setInterval(() => {
        const delta = new Date(valueDateTime.value) - new Date();
        const transformTime = convertMs(delta);
        valueDays.textContent = addLeadingZero(transformTime.days);
        valueHours.textContent = addLeadingZero(transformTime.hours);
        valueMinutes.textContent = addLeadingZero(transformTime.minutes);
        valueSeconds.textContent = addLeadingZero(transformTime.seconds);

        
        if (delta < 1000) {
          clearInterval(timerId);
        }
        
      }, 1000)
    
    }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
