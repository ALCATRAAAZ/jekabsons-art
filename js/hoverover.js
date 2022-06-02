//creating a button to be trigered when enterinh .image-grid

const button = document.querySelector('.image-grid');

//when cursor enters image-grid evevt 2 is trigered
button.addEventListener('mouseover', (event) => {
  //debuging the event
  //console.log(event);
  //event.preventDefault();
  //image = document.querySelector('img'); - is the event target

  event.target.setAttribute('border', '1px');
  //once the target is hovered over the color of image border changes to 1px 'rgb(246,225,197)'
  event.target.style.borderColor = 'rgb(246,225,197)';
});

button.addEventListener('mouseleave', (event2) => {
  //debuging the event
  //console.log(event2);

  //once the target is not hovered over the color of all images border changes to ''
  a = document.querySelectorAll('img');
  document.querySelectorAll('img').forEach((a) => a.setAttribute('border', ''));
});
