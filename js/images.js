var anime3 = document.getElementById('anime3');
var anime4 = document.getElementById('anime4');
var anime5 = document.getElementById('anime5');
var anime6 = document.getElementById('anime6');
var anime7 = document.getElementById('anime7');

function getSrc3(scrollPos, elem) {
    if (scrollPos < 3500) return generatePictureCode(1, elem);
    if (scrollPos < 3600) return generatePictureCode(2, elem);
    if (scrollPos < 3700) return generatePictureCode(3, elem);
    if (scrollPos < 3800) return generatePictureCode(4, elem);
    if (scrollPos > 3800) return generatePictureCode(5, elem);
}

function getSrc4(scrollPos, elem) {
    if (scrollPos < 5560) return generatePictureCode(1, elem);
    if (scrollPos < 5650) return generatePictureCode(2, elem);
    if (scrollPos < 5740) return generatePictureCode(3, elem);
    if (scrollPos < 5830) return generatePictureCode(4, elem);
    if (scrollPos > 5830) return generatePictureCode(5, elem);
}

function getSrc5(scrollPos, elem) {
    if (scrollPos < 7000) return generatePictureCode(1, elem);
    if (scrollPos < 7250) return generatePictureCode(2, elem);
    if (scrollPos < 7500) return generatePictureCode(3, elem);
    if (scrollPos > 7500) return generatePictureCode(4, elem);
}

function getSrc6(scrollPos, elem) {
    if (scrollPos < 9000) return generatePictureCode(1, elem);
    if (scrollPos < 9100) return generatePictureCode(2, elem);
    if (scrollPos < 9200) return generatePictureCode(3, elem);
    if (scrollPos > 9200) return generatePictureCode(4, elem);
}

function getSrc7(scrollPos, elem) {
    if (scrollPos < 10800) return generatePictureCode(1, elem);
    if (scrollPos < 10860) return generatePictureCode(2, elem);
    if (scrollPos < 10920) return generatePictureCode(3, elem);
    if (scrollPos < 10980) return generatePictureCode(4, elem);
    if (scrollPos < 11040) return generatePictureCode(5, elem);
    if (scrollPos > 11040) return generatePictureCode(6, elem);
}

function generatePictureCode(val, elem) {
    return '<picture><source media="(min-width: 1450px)" srcset="img/'+elem+'-'+val+'.png"><source media="(min-width: 1024px)" srcset="img/'+elem+'-'+val+'.png"><img src="img/'+elem+'-'+val+'.png"></picture>';
}

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    anime3.innerHTML = getSrc3(window.scrollY, "anime3");
    anime4.innerHTML = getSrc4(window.scrollY, "anime4");
    anime5.innerHTML = getSrc5(window.scrollY, "anime5");
    anime6.innerHTML = getSrc6(window.scrollY, "anime6");
    anime7.innerHTML = getSrc7(window.scrollY, "anime7");
});