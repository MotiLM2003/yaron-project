// number of months in a year
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

// getting the current date as a string
const getDate = () => {
  // new date object
  const date = new Date();
  const el = document.getElementById('date-text');

  // if in home page
  if (el !== undefined)
    el.innerHTML = `${monthNames[date.getMonth()]}, ${date.getFullYear()} `;
};

// submit form
const submitForm = () => {
  alert('Sending form... :');
  // back to the home page.

  window.location = '/';
  return false;
};
