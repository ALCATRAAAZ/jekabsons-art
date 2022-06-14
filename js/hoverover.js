//creating a function button to be trigered when entering section div div

function buttonHover() {
  const button3 = document.querySelector('section div div');
  //when cursor enters section div div event is trigered
  button3.addEventListener(
    'mouseover',
    (event) => {
      //create an empty border for all img when entering the section
      document
        .querySelectorAll('img')
        .forEach((a) => a.setAttribute('border', ''));
      //adding color to an image which is targeted
      event.target.style.borderColor = 'rgb(246,225,197)';
      //adding border style to an image which is targeted
      event.target.setAttribute('border', '2rem');
    },
    false
  );
}
buttonHover();

function buttonClick() {
  //create an empty arrar to store elements for img when clicking
  let clicks = {};
  function reportClicks(item) {
    clicks[item] = clicks[item] + 1 || 1;
    console.log(item, clicks);
  }
  return reportClicks;
}
reportActivities = buttonClick();

document.querySelector('.image-grid').addEventListener(
  'click',
  (event2) => {
    reportActivities(event2.target.title);
    event2.target.setAttribute('border', '6rem');
    // Storage = event2.target.title;
    // console.log(Storage);
  },
  false
)();
buttonClick();

// to create a button for language select use event.target.classList.contains('selected')
