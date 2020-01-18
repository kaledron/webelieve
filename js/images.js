var showableArr = {'anime':'block', 'aboutus':'none', 'howwework':'none', 'whatweworkon':'none', 'howwedecide':'none', 'team':'none'};
for (i in showableArr) {
    document.getElementById(i).style.display = showableArr[i];
}

function showHide(div_section) {
    for (i in showableArr) {
        document.getElementById(i).style.display = 'none';
        if (i == div_section) {
            document.getElementById(i).style.display = 'block';
        }
    }
}

var anime2 = document.getElementById('anime2');
var anime3 = document.getElementById('anime3');
var anime4 = document.getElementById('anime4');
var anime5 = document.getElementById('anime5');
var anime6 = document.getElementById('anime6');
var anime7 = document.getElementById('anime7');

function getSrc2(scrollPos, elem) {
    if (scrollPos < 1400) return generatePictureCode(1, elem);
    if (scrollPos < 1460) return generatePictureCode(2, elem);
    if (scrollPos < 1510) return generatePictureCode(3, elem);
    if (scrollPos < 1560) return generatePictureCode(4, elem);
    if (scrollPos < 1710) return generatePictureCode(5, elem);
    if (scrollPos < 1760) return generatePictureCode(6, elem);
    if (scrollPos < 1810) return generatePictureCode(7, elem);
    if (scrollPos < 1860) return generatePictureCode(8, elem);
    if (scrollPos < 1910) return generatePictureCode(9, elem);
    if (scrollPos < 1960) return generatePictureCode(10, elem);
    if (scrollPos > 1960) return generatePictureCode(10, elem);
}

function getSrc3(scrollPos, elem) {
    if (scrollPos < 2500) return generatePictureCode(1, elem);
    if (scrollPos < 2600) return generatePictureCode(2, elem);
    if (scrollPos < 2700) return generatePictureCode(3, elem);
    if (scrollPos < 2800) return generatePictureCode(4, elem);
    if (scrollPos < 2900) return generatePictureCode(5, elem);
    if (scrollPos < 3000) return generatePictureCode(6, elem);
    if (scrollPos < 3100) return generatePictureCode(7, elem);
    if (scrollPos > 3100) return generatePictureCode(7, elem);
}

function getSrc4(scrollPos, elem) {
    if (scrollPos < 4000) return generatePictureCode(1, elem);
    if (scrollPos < 4035) return generatePictureCode(2, elem);
    if (scrollPos < 4070) return generatePictureCode(3, elem);
    if (scrollPos < 4105) return generatePictureCode(4, elem);
    if (scrollPos < 4140) return generatePictureCode(5, elem);
    if (scrollPos < 4175) return generatePictureCode(6, elem);
    if (scrollPos < 4210) return generatePictureCode(7, elem);
    if (scrollPos < 4245) return generatePictureCode(8, elem);
    if (scrollPos < 4280) return generatePictureCode(9, elem);
    if (scrollPos < 4315) return generatePictureCode(10, elem);
    if (scrollPos < 4350) return generatePictureCode(11, elem);
    if (scrollPos < 4385) return generatePictureCode(12, elem);
    if (scrollPos < 4420) return generatePictureCode(13, elem);
    if (scrollPos > 4420) return generatePictureCode(13, elem);
}

function getSrc5(scrollPos, elem) {
    if (scrollPos < 5350) return generatePictureCode(1, elem);
    if (scrollPos < 5430) return generatePictureCode(2, elem);
    if (scrollPos < 5510) return generatePictureCode(3, elem);
    if (scrollPos < 5590) return generatePictureCode(4, elem);
    if (scrollPos < 5670) return generatePictureCode(5, elem);
    if (scrollPos < 5750) return generatePictureCode(6, elem);
    if (scrollPos < 5830) return generatePictureCode(7, elem);
    if (scrollPos > 5830) return generatePictureCode(7, elem);
}

function getSrc6(scrollPos, elem) {
    if (scrollPos < 6550) return generatePictureCode(1, elem);
    if (scrollPos < 6600) return generatePictureCode(2, elem);
    if (scrollPos < 6650) return generatePictureCode(3, elem);
    if (scrollPos < 6700) return generatePictureCode(4, elem);
    if (scrollPos < 6750) return generatePictureCode(5, elem);
    if (scrollPos < 6800) return generatePictureCode(6, elem);
    if (scrollPos < 6850) return generatePictureCode(7, elem);
    if (scrollPos < 6900) return generatePictureCode(8, elem);
    if (scrollPos < 6950) return generatePictureCode(9, elem);
    if (scrollPos < 7000) return generatePictureCode(10, elem);
    if (scrollPos < 7050) return generatePictureCode(11, elem);
    if (scrollPos < 7100) return generatePictureCode(12, elem);
    if (scrollPos > 7100) return generatePictureCode(12, elem);
}

function getSrc7(scrollPos, elem) {
    if (scrollPos < 7750) return generatePictureCode(1, elem);
    if (scrollPos < 7780) return generatePictureCode(2, elem);
    if (scrollPos < 7810) return generatePictureCode(3, elem);
    if (scrollPos < 7840) return generatePictureCode(4, elem);
    if (scrollPos < 7870) return generatePictureCode(5, elem);
    if (scrollPos < 7900) return generatePictureCode(6, elem);
    if (scrollPos < 7930) return generatePictureCode(7, elem);
    if (scrollPos < 7960) return generatePictureCode(8, elem);
    if (scrollPos < 7990) return generatePictureCode(9, elem);
    if (scrollPos < 8020) return generatePictureCode(10, elem);
    if (scrollPos < 8050) return generatePictureCode(11, elem);
    if (scrollPos > 8100) return generatePictureCode(12, elem);
}

function generatePictureCode(val, elem) {
    return '<picture><source media="(min-width: 1450px)" srcset="img/'+elem+'-'+val+'.png"><source media="(min-width: 1024px)" srcset="img/'+elem+'-'+val+'.png"><img src="img/'+elem+'-'+val+'.png"></picture>';
}

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    setTimeout(function(){  
        anime2.innerHTML = getSrc2(window.scrollY, "anime2");
        anime3.innerHTML = getSrc3(window.scrollY, "anime3");
        anime4.innerHTML = getSrc4(window.scrollY, "anime4");
        anime5.innerHTML = getSrc5(window.scrollY, "anime5");
        anime6.innerHTML = getSrc6(window.scrollY, "anime6");
        anime7.innerHTML = getSrc7(window.scrollY, "anime7");
    },109);
});