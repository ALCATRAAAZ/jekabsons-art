document.querySelector('.Language-toggler').addEventListener('mouseenter', (event2) => 
{console.log(event2);
  event2.preventDefault();
import('./LANG.js')
});

// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', (event) => {
  const listHoursArray = document.body.querySelectorAll('.list-hours li');
  listHoursArray[new Date().getDay()].classList.add('today');
});
