
const slidesData = [
  // 1 ▸ intro – text only, no photo
  {
    type:      'intro',
    bg:        '#1a2238',
    duration:  4000,
    heartLogo: 'assets/svg/whiteheart.svg',
    outerCircle: 'assets/svg/circle-golden-outer.svg', 
    innerCircle: 'assets/svg/circle-golden-inner.svg',
  },

  // 2 ▸ caption – photo
  {
    type:      'caption',
    bg:        '#1a2238',
    src:       'assets/images/sec1image2.jpg',
    alt:       'WATERDROP',
    duration:  2000,
  },

  // 3 ▸ caption – photo NEEDS TO BE UPDATED TO OVERLAY RIGHT TEXT
  {
    type:       'overlay-right',           
    bg:         '#1a2238',
    src:        'assets/images/sec1image3.jpg',
    alt:        'Hand Pour Ice',
    overlaySrc: 'assets/cutouts/discoverenhanced.png',
    overlayAlt: 'Facts',
    duration:   6000,
  },

  // 4 ▸ intro – text only
  {
    type:      'intro',
    bg:        '#144031',
    duration:  4000,
    heartLogo: 'assets/svg/whiteheart.svg',
    outerCircle: 'assets/svg/circle-golden-outer.svg', 
    innerCircle: 'assets/svg/circle-golden-inner.svg',
  },

  // 5 ▸ caption – photo 
  {
    type:      'caption',
    bg:        '#144031',
    src:       'assets/images/sec2image2.jpg',
    alt:       'Red Glass Ice',
    overlayAlt: 'Hand Pour Ice',
    duration:   2000,
  },
    // 6 ▸ caption – photo NEEDS TO BE UPDATED TO OVERLAY MIDDLE TEXT
  {
  type: 'overlay-middle',
  bg: '#144031',
  src: 'assets/images/sec2image3.png',
  alt: 'Background',
  bottleLeft: 'assets/cutouts/bottlestill.png',
  bottleRight: 'assets/cutouts/bottlesparkling.png',
  overlaySrc: 'assets/cutouts/fromsourcegreen.png',
  overlayAlt: 'Overlay Text',
  duration: 6000
},
      // 7 ▸ intro – text only
  {
    type:      'intro',
    bg:        '#e3a6b8',
    duration:  4000,
    heartLogo: 'assets/svg/whiteheart.svg',
    outerCircle: 'assets/svg/circle-golden-outer.svg', 
    innerCircle: 'assets/svg/circle-golden-inner.svg',
  },
    // 8 ▸ caption – photo 
    {
      type:      'caption',
      bg:        '#e3a6b8',
      src:       'assets/images/sec3image2.jpg',
      alt:       'Hand Pour Glass',
      overlayAlt: 'Hand Pour Glass',
      duration:   2000,
    },
      // 9 ▸ Overlay Left – photo + PNG on the right
    {
    type:       'overlay-left',           
    bg:         '#e32a6b8',
    src:        'assets/images/sec3image3.jpg',
    alt:        'Hand Pour Glass',
    overlaySrc: 'assets/cutouts/discoverenhanced.png',// 
    overlayAlt: 'Facts',
    duration:   6000,
  },
          // 10 ▸ intro – text only
      {
    type:      'intro',
    bg:        '#856e45',
    logoColor: '#144031',
    borderColor: '#144031',
    duration:  4000,
    heartLogo: 'assets/svg/greenheart.svg',
    outerCircle: 'assets/svg/circle-green-outer.svg', 
    innerCircle: 'assets/svg/circle-green-inner.svg',
  },
      // 11 ▸ caption – photo 
      {
        type:      'caption',
        bg:        '#856e45',
        src:       'assets/images/sec4image2.jpg',
        alt:       'Red Glass Ice',
        duration:   2000,
      },
    // 12 ▸ Overlay Right – photo + PNG on the right
   {
    type:       'overlay-right',           
    bg:         '#856e45',
    src:        'assets/images/sec4image3.png',
    alt:        'Ice Cube ',
    overlaySrc: 'assets/cutouts/discoverenhanced.png',
    overlayAlt: 'Discover Enhanced',
    duration:   6000,
  },
      // 13 ▸ intro – text only
         {
          type:      'intro',
          bg:        '#999999',
          duration:  4000,
          heartLogo: 'assets/svg/whiteheart.svg',
          outerCircle: 'assets/svg/circle-golden-outer.svg', 
    innerCircle: 'assets/svg/circle-golden-inner.svg',
        },
            // 14 ▸ caption – photo 
      {
        type:      'caption',
        bg:        '#856e45',
        src:       'assets/images/sec5image2.jpg',
        alt:       'Red Glass Ice',
        overlayAlt: 'Hand Pour Ice',
        duration:   2000,
      },
             // 15 ▸ Overlay Right – photo + PNG on the right
     {
    type:       'overlay-right',           
    bg:         '#856e45',
    src:        'assets/images/sec5image3.jpg',
    alt:        'Hand Pour Ice',
    overlaySrc: 'assets/cutouts/discoverenhanced.png',
    overlayAlt: 'Discover Enhanced',
    duration:   6000,
  },
         // 16 ▸ intro – text only
         {
          type:      'intro',
          bg:        '#ffffff',
          logoColor: '#856e45',
          fontsColor: '#856e45',
          duration:  4000,
          heartLogo: 'assets/svg/goldheart.svg',
          outerCircle: 'assets/svg/circle-golden-outer.svg', 
    innerCircle: 'assets/svg/circle-golden-inner.svg',
        },
                    // 17 ▸ caption – photo
      {
        type:      'caption',
        bg:        '#ffffff',
        src:       'assets/images/sec6image2.jpg',
        alt:       'Red Glass Ice',
        overlayAlt: 'Hand Pour Ice',
        duration:   2000,
      },
              // 18 ▸ Overlay Left – photo + PNG on the right
             {
    type:       'overlay-left',           
    bg:         '#ffffff',
    src:        'assets/images/sec6image3.jpg',
    alt:        'Hand Pour Ice',
    overlaySrc: 'assets/cutouts/facts.png',
    overlayAlt: 'Discover Enhanced',
    duration:   6000,
  },
];





window.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('slideshow-container');
  const wait      = ms => new Promise(r => setTimeout(r, ms));

  const slides = slidesData.map(data => {
    /* picks template ------------------------------------------------------ */
    const tmpl  = document.getElementById(`tmpl-${data.type}`);
    const slide = document.importNode(tmpl.content, true)
                          .querySelector('.slide');

    /* shared background colour ------------------------------------------ */
    slide.style.backgroundColor = data.bg ?? '#000';
    slide.style.setProperty('--bg', data.bg ?? '#000');
    /* shared fontsColor colour ------------------------------------------ */
    slide.style.setProperty('--fontsColor', data.fontsColor ?? '#fff');
    slide.style.setProperty('--logoColor', data.logoColor ?? '#856e45');
    slide.style.setProperty('--borderColor', data.borderColor ?? '#856e45');


    /* main photo (if that template has one) ----------------------------- */
    const mainImg = slide.querySelector('.slide-img');
    if (mainImg && data.src) {          // ← guard for intro slides
      mainImg.src = data.src;
      mainImg.alt = data.alt ?? '';
    }

    /* Type‑specific fields ---------------------------------------------- */
    if (data.type === 'intro') {
      const heartLogo = slide.querySelector('.svg-top');
      const outerCircle = slide.querySelector('.circle-outer');
      const innerCircle = slide.querySelector('.circle-inner');
      if (heartLogo) {
        heartLogo.src = data.heartLogo;
      }
      if (outerCircle) {
        outerCircle.src = data.outerCircle || '';
      }
      if (innerCircle) {
        innerCircle.src = data.innerCircle || '';
      }
    }

    else if (data.type === 'caption') {
      const cap = slide.querySelector('.caption');
      if (cap) cap.textContent = data.caption ?? '';
    }

else if (data.type === 'overlay-right') {
  const overlayImg = slide.querySelector('.overlay-img');
  if (overlayImg) {
    overlayImg.src = data.overlaySrc;
    overlayImg.alt = data.overlayAlt || '';
  }
}
else if (data.type === 'overlay-left') {
  const overlayImg = slide.querySelector('.overlay-img');
  if (overlayImg) {
    overlayImg.src = data.overlaySrc;
    overlayImg.alt = data.overlayAlt || '';
  }
}
else if (data.type === 'overlay-middle') {
  const overlayImg = slide.querySelector('.overlay-img');
  const bottleLeft = slide.querySelector('.bottle-left');
  const bottleRight = slide.querySelector('.bottle-right');
  if (overlayImg) {
    overlayImg.src = data.overlaySrc;
    overlayImg.alt = data.overlayAlt || '';
  }
  if (bottleLeft) bottleLeft.src = data.bottleLeft;
  if (bottleRight) bottleRight.src = data.bottleRight;
}

    /* store its duration ------------------------------------------------- */
    slide.dataset.duration = data.duration ?? 3000;

    container.appendChild(slide);
    return slide;
  });



  /*
  cross‑fade loop ------------------------------------------------------ 
  */
  let idx = 0;
  slides[idx].classList.add('active');
  
  
  while (true) {
    const curr = slides[idx];
    curr.classList.add('active');
    
    if (curr.classList.contains('slide--overlay-right') || curr.classList.contains('slide--overlay-middle') || curr.classList.contains('slide--overlay-left'))
    
    {
      setTimeout(() => {
        curr.classList.add('loaded');
      }, 1000);
    }
    
    await wait(+curr.dataset.duration);
    
    const next = slides[(idx + 1) % slides.length];
    next.classList.add('active');
    curr.classList.remove('active');
    curr.classList.remove('loaded');
    
    idx = (idx + 1) % slides.length;
  } 
  
  
  /* manual click-to-advance FOR DEBUGGING---------------------------------------------- 
  let idx = 0;
  slides[idx].classList.add('active');
  
  container.addEventListener('mousedown', (event) => {
    // Prevent default context menu on right-click
    if (event.button === 2) event.preventDefault();
    
    const curr = slides[idx];
    let nextIdx;
    
    if (event.button === 0) {
      // Left click: go forward
      nextIdx = (idx + 1) % slides.length;
    } else if (event.button === 2) {
      // Right click: go backward
      nextIdx = (idx - 1 + slides.length) % slides.length;
    } else {
      // Ignore other buttons (like middle click)
    return;
  }
  
  const next = slides[nextIdx];
  
  // hide current
  curr.classList.remove('active', 'loaded');
  
  // show next
  next.classList.add('active');
  
  // trigger overlay fade if needed
  if (next.classList.contains('slide--overlay-right') ||
  next.classList.contains('slide--overlay-middle') ||
  next.classList.contains('slide--overlay-left')) {
    setTimeout(() => next.classList.add('loaded'), 100);
  }
  
  idx = nextIdx;
});
*/

// Optional: disable context menu to avoid browser menu on right-click
container.addEventListener('contextmenu', e => e.preventDefault());

});
