const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// on document load.
window.addEventListener('DOMContentLoaded', () => {
  getDate();
});

// getting current date as string
const getDate = () => {
  const date = new Date();
  const el = document.getElementById('date-text');
  if (el != undefined)
    el.innerHTML = `${monthNames[date.getMonth()]}, ${ydate.getFullYear()} `;
};

// submit form
const submitForm = () => {
  console.log('ere');
  alert('Sending form...');
  window.location = '/';

  return false;
};
