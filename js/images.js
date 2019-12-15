var imageEl = document.getElementById('building');

function getSrc(scrollPos) {
  if (scrollPos < 1700) return generatePictureCode(1);
  if (scrollPos < 1750) return generatePictureCode(2);
  if (scrollPos < 1800) return generatePictureCode(3);
  if (scrollPos < 1850) return generatePictureCode(4);
  if (scrollPos < 1900) return generatePictureCode(5);
  if (scrollPos < 1950) return generatePictureCode(6);
  if (scrollPos < 2000) return generatePictureCode(7);
  if (scrollPos < 2050) return generatePictureCode(8);
  if (scrollPos < 2100) return generatePictureCode(9);
  if (scrollPos < 2150) return generatePictureCode(10);
  if (scrollPos < 2200) return generatePictureCode(11);
  if (scrollPos <= 2250) return generatePictureCode(12);
  return generatePictureCode(1);
}

function generatePictureCode(val) {
    return '<picture><source media="(min-width: 1450px)" srcset="anime2/anime2-'+val+'.png"><source media="(min-width: 1024px)" srcset="anime2/anime2-1.png"><img src="anime2/anime2-1.png" style="width: 100vw;"></picture>';
}

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
  imageEl.innerHTML = getSrc(window.scrollY);
});