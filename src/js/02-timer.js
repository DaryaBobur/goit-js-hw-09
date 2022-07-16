import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;

 const valueDays = document.querySelector('[data-days]');
const valueHours = document.querySelector('[data-hours]');
const valueMinutes = document.querySelector('[data-minutes]');
const valueSeconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {

    if (selectedDates[0] < date.minDate) {
        Confirm.show(
            function cancelCb() {
                alert('Please choose a date in the future!');
            });

        btnStart.disabled = true;
      }
      if (selectedDates[0] >= date.minDate) {
        btnStart.disabled = false;
        
    }
      console.log(selectedDates[0]);
      
  const dateFuture = selectedDates[0].getTime()
  const dateToday = date.minDate.getTime();


      
function timer() {
   btnStart.disabled = true;
  const timerId = setInterval(() => {
  const delta = new Date(dateFuture) - new Date();
   const a = convertMs(delta);
    valueDays.textContent = a.days;
    valueHours.textContent = a.hours;
    valueMinutes.textContent = a.minutes;
    valueSeconds.textContent = a.seconds;
  
    if (delta <= 0) {
      clearInterval(timerId);
    }
 

}, 1000)
 
   }    
 timer(new Date(dateToday));
  },
};

// function t(string) {
//  document.querySelector('.sp').textContent = string;
// }



flatpickr("#datetime-picker", options);


const date = {
    minDate: new Date().fp_incr(0),
    maxDate: new Date().fp_incr(365)
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };

}

// console.log(convertMs(2000));
// console.log(convertMs(140000));
// console.log(convertMs(24140000));

