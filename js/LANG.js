const LV = document.querySelector('.Language-toggler');
//const UL = document.querySelector('ul').innerHTML;
let UL, Intro, CTA;
if (document.querySelector('ul')) {
  UL = document.querySelector('ul').innerHTML;
} else {
  UL = 1;
}
document.querySelector('.intro-text')
  ? (Intro = document.querySelector('.intro-text').innerHTML)
  : (Intro = 1);
document.querySelector('.cta-inner')
  ? (CTA = document.querySelector('.cta-inner').innerHTML)
  : (CTA = 1);
const LangToggle = () => {
  LV.addEventListener('click', (event) => {
    if (event.path[0].innerText == 'EN') {
      document.querySelector('ul').innerHTML = UL;
      document.querySelector('.intro-text').innerHTML = Intro;
      document.querySelector('.cta-inner').innerHTML = CTA;
    } else {
      document.querySelector('ul').innerHTML = `<li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase" href="index.html">Uz Sākumu</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase" href="about.html">Par</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase" href="products.html"
                >Galerija</a
              >
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase" href="store.html">Kontakti</a>
            </li>`;
      document.querySelector(
        '.intro-text'
      ).innerHTML = `<h2 class="section-heading mb-4">
              <span class="section-heading-upper">Jānis Jēkabsons</span>
              <span class="section-heading-lower">Gleznotājs</span>
            </h2>
            <p class="mb-3"> <div class="LV"> Dzimis Rūjienā, patīk medības un makšķerēšana</div></p>
            <div class="intro-button mx-auto">
              <a class="btn btn-primary btn-xl" href="about.html">
                Vairāk par mani!
              </a>`;
      document.querySelector(
        '.cta-inner'
      ).innerHTML = ` <h2 class="section-heading mb-4">
                <span class="section-heading-upper"> Novēlu </span>
                <span class="section-heading-lower"> Jums </span>
              </h2>
              <p class="mb-0">
                
              </p>
              <div class="intro-button mx-auto">
                <a class="btn btn-primary btn-xl" href="store.html">
                  Sazinies ar mums
                </a>`;
    }
  });
};

LangToggle();
