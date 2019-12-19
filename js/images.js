var anime3 = document.getElementById('anime3');

function getSrc(scrollPos, elem) {
  if (scrollPos < 3200) return generatePictureCode(1, elem);
  if (scrollPos < 3400) return generatePictureCode(2, elem);
  if (scrollPos < 3600) return generatePictureCode(3, elem);
  if (scrollPos < 3800) return generatePictureCode(4, elem);
  if (scrollPos < 4000) return generatePictureCode(5, elem);
  return generatePictureCode(5, elem);
}

function generatePictureCode(val, elem) {
    return '<picture><source media="(min-width: 1450px)" srcset="img/'+elem+'-'+val+'.png"><source media="(min-width: 1024px)" srcset="img/'+elem+'-'+val+'.png"><img src="img/'+elem+'-'+val+'.png"></picture>';
}

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    anime3.innerHTML = getSrc(window.scrollY, "anime3");
});