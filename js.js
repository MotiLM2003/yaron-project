// month in year
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
  // new date object
  const date = new Date();
  const el = document.getElementById('date-text');
  // if in home page
  if (el != undefined)
    el.innerHTML = `${monthNames[date.getMonth()]}, ${date.getFullYear()} `;
};

// submit form
const submitForm = () => {
  alert('Sending form... :');
  // back to home page.
  window.location = '/';
  return false;
};
