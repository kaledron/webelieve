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
    if (scrollPos < 1450) return generatePictureCode(1, elem);
    if (scrollPos < 1510) return generatePictureCode(2, elem);
    if (scrollPos < 1570) return generatePictureCode(3, elem);
    if (scrollPos < 1630) return generatePictureCode(4, elem);
    if (scrollPos < 1700) return generatePictureCode(5, elem);
    if (scrollPos < 1760) return generatePictureCode(6, elem);
    if (scrollPos < 1820) return generatePictureCode(7, elem);
    if (scrollPos < 1880) return generatePictureCode(8, elem);
    if (scrollPos < 1940) return generatePictureCode(9, elem);
    if (scrollPos < 2000) return generatePictureCode(10, elem);
    if (scrollPos > 2000) return generatePictureCode(10, elem);
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
    if (scrollPos < 4050) return generatePictureCode(2, elem);
    if (scrollPos < 4100) return generatePictureCode(3, elem);
    if (scrollPos < 4150) return generatePictureCode(4, elem);
    if (scrollPos < 4200) return generatePictureCode(5, elem);
    if (scrollPos < 4250) return generatePictureCode(6, elem);
    if (scrollPos < 4300) return generatePictureCode(7, elem);
    if (scrollPos < 4350) return generatePictureCode(8, elem);
    if (scrollPos > 4350) return generatePictureCode(8, elem);
}

function getSrc5(scrollPos, elem) {
    if (scrollPos < 5400) return generatePictureCode(1, elem);
    if (scrollPos < 5500) return generatePictureCode(2, elem);
    if (scrollPos < 5600) return generatePictureCode(3, elem);
    if (scrollPos < 5700) return generatePictureCode(4, elem);
    if (scrollPos < 5800) return generatePictureCode(5, elem);
    if (scrollPos < 5900) return generatePictureCode(6, elem);
    if (scrollPos > 5900) return generatePictureCode(6, elem);
}

function getSrc6(scrollPos, elem) {
    if (scrollPos < 6650) return generatePictureCode(1, elem);
    if (scrollPos < 6750) return generatePictureCode(2, elem);
    if (scrollPos < 6850) return generatePictureCode(3, elem);
    if (scrollPos < 6950) return generatePictureCode(4, elem);
    if (scrollPos < 7050) return generatePictureCode(5, elem);
    if (scrollPos < 7150) return generatePictureCode(6, elem);
    if (scrollPos > 7150) return generatePictureCode(6, elem);
}

function getSrc7(scrollPos, elem) {
    if (scrollPos < 7650) return generatePictureCode(1, elem);
    if (scrollPos < 7700) return generatePictureCode(2, elem);
    if (scrollPos < 7750) return generatePictureCode(3, elem);
    if (scrollPos < 7800) return generatePictureCode(4, elem);
    if (scrollPos < 7850) return generatePictureCode(5, elem);
    if (scrollPos < 7900) return generatePictureCode(6, elem);
    if (scrollPos < 7950) return generatePictureCode(7, elem);
    if (scrollPos < 8000) return generatePictureCode(8, elem);
    if (scrollPos < 8050) return generatePictureCode(9, elem);
    if (scrollPos < 8100) return generatePictureCode(10, elem);
    if (scrollPos > 8150) return generatePictureCode(11, elem);
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

// window.addEventListener('click', function(e) {
//     menuName = e.srcElement.className;
//     console.log(menuName);
// })