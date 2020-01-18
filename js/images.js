var showableArr = {'anime':'block', 'aboutus':'none', 'howwework':'none', 'whatweworkon':'none', 'howwedecide':'none', 'team':'none'};
for (i in showableArr) {
    document.getElementById(i).style.display = showableArr[i];
}
var imgArr = [
    'anime2-1.png', 'anime2-2.png', 'anime2-3.png', 'anime2-4.png', 'anime2-5.png', 'anime2-6.png', 'anime2-7.png', 'anime2-8.png', 'anime2-9.png', 'anime2-10.png',
    'anime3-1.png', 'anime3-2.png', 'anime3-3.png', 'anime3-4.png', 'anime3-5.png', 'anime3-6.png', 'anime3-7.png', 
    'anime4-1.png', 'anime4-2.png', 'anime4-3.png', 'anime4-4.png', 'anime4-5.png', 'anime4-6.png', 'anime4-7.png', 'anime4-8.png', 'anime4-9.png', 'anime4-10.png',
       'anime4-11.png', 'anime4-12.png', 'anime4-13.png', 
    'anime5-1.png', 'anime5-2.png', 'anime5-3.png', 'anime5-4.png', 'anime5-5.png', 'anime5-6.png', 'anime5-7.png', 
    'anime6-1.png', 'anime6-2.png', 'anime6-3.png', 'anime6-4.png', 'anime6-5.png', 'anime6-6.png', 'anime6-7.png', 'anime6-8.png', 'anime6-9.png', 'anime6-10.png',
       'anime6-11.png', 'anime6-12.png',  
    'anime7-1.png', 'anime7-2.png', 'anime7-3.png', 'anime7-4.png', 'anime7-5.png', 'anime7-6.png', 'anime7-7.png', 'anime7-8.png', 'anime7-9.png', 'anime7-10.png',
       'anime7-11.png', 'anime7-12.png',  
];

for (var i = 0; i < imgArr.length; i++) {
    var img = new Image();
    img.src = 'img/' + imgArr[i];
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
    setTimeout(function(){  
        anime2.innerHTML = getSrc2(window.scrollY, "anime2");
        anime3.innerHTML = getSrc3(window.scrollY, "anime3");
        anime4.innerHTML = getSrc4(window.scrollY, "anime4");
        anime5.innerHTML = getSrc5(window.scrollY, "anime5");
        anime6.innerHTML = getSrc6(window.scrollY, "anime6");
        anime7.innerHTML = getSrc7(window.scrollY, "anime7");
    },109);
});