var zgrada2 = document.getElementById('zgrada2');

function getSrc(scrollPos, elem) {
  if (scrollPos < 2000) return generatePictureCode(1, elem);
  if (scrollPos < 2040) return generatePictureCode(2, elem);
  if (scrollPos < 2080) return generatePictureCode(3, elem);
  return generatePictureCode(1, elem);
}

function generatePictureCode(val, elem) {
    return '<picture class="'+elem+'-rise"><source media="(min-width: 1450px)" srcset="img/'+elem+'-'+val+'.png"><source media="(min-width: 1024px)" srcset="img/'+elem+'-'+val+'.png"><img src="img/'+elem+'-'+val+'.png"></picture>';
}

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    zgrada2.innerHTML = getSrc(window.scrollY, "zgrada2");
});