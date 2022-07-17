import Notiflix from 'notiflix';
const form = document.querySelector('form');

form.addEventListener('submit', promisesData);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
  });
};

function promisesData(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
formValue(+delay.value, +step.value, +amount.value)
  }

  function formValue(delay, step, amount) {
    for (let position = 1; position <= amount; position += 1) {
      createPromise(position, delay)
        .then(({ position, delay }) => {
          setTimeout(() => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
          }, delay);
        }).catch(({ position, delay }) => {
          setTimeout(() => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          }, delay);
      
        })
      delay += step;
    }
}
