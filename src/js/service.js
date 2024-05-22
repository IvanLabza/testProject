const total = document.querySelector('.total');
const today = document.querySelector('.today');
let todaySum = 197632;
let totalSum = 384911738;

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const min = 100;
const max = 400;
const increment = 7;
const interval = 6000 / increment;

total.textContent = formatter.format(totalSum);
today.textContent = formatter.format(todaySum);

setInterval(() => {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  const step = random ;

  for (let i = 0; i < increment; i++) {
    setTimeout(() => {
      totalSum += step;
      todaySum += step;
      total.textContent = formatter.format(Math.floor(totalSum));
      today.textContent = formatter.format(Math.floor(todaySum));
    }, i * interval);
  }
}, 6000);
