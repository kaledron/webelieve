var showableArr = {'anime':'block', 'aboutus':'none', 'howwework':'none', 'whatweworkon':'none', 'howwedecide':'none', 'team':'none'};
for (i in showableArr) {
    document.getElementById(i).style.display = showableArr[i];
}

function showHide(div_section) {
    console.log(div_section);
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

function getSrc2o(scrollPos, elem) {
    if (scrollPos < 1500) return generatePictureCode(1, elem);
    if (scrollPos < 1525) return generatePictureCode(2, elem);
    if (scrollPos < 1550) return generatePictureCode(3, elem);
    if (scrollPos < 1575) return generatePictureCode(4, elem);
    if (scrollPos < 1600) return generatePictureCode(5, elem);
    if (scrollPos < 1625) return generatePictureCode(6, elem);
    if (scrollPos < 1650) return generatePictureCode(7, elem);
    if (scrollPos < 1675) return generatePictureCode(8, elem);
    if (scrollPos < 1700) return generatePictureCode(9, elem);
    if (scrollPos < 1725) return generatePictureCode(10, elem);
    if (scrollPos < 1750) return generatePictureCode(9, elem);
    if (scrollPos < 1775) return generatePictureCode(8, elem);
    if (scrollPos < 1800) return generatePictureCode(7, elem);
    if (scrollPos < 1825) return generatePictureCode(6, elem);
    if (scrollPos < 1850) return generatePictureCode(5, elem);
    if (scrollPos < 1875) return generatePictureCode(4, elem);
    if (scrollPos < 1900) return generatePictureCode(3, elem);
    if (scrollPos < 1925) return generatePictureCode(2, elem);
    if (scrollPos < 1950) return generatePictureCode(1, elem);
    if (scrollPos > 1950) return generatePictureCode(1, elem);
}

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
    if (scrollPos < 5700) return generatePictureCode(1, elem);
    if (scrollPos < 5850) return generatePictureCode(2, elem);
    if (scrollPos < 6000) return generatePictureCode(3, elem);
    if (scrollPos < 6150) return generatePictureCode(4, elem);
    if (scrollPos > 6150) return generatePictureCode(4, elem);
}

function getSrc6(scrollPos, elem) {
    if (scrollPos < 7500) return generatePictureCode(1, elem);
    if (scrollPos < 7580) return generatePictureCode(2, elem);
    if (scrollPos < 7660) return generatePictureCode(3, elem);
    if (scrollPos < 7720) return generatePictureCode(4, elem);
    if (scrollPos > 7720) return generatePictureCode(4, elem);
}

function getSrc7(scrollPos, elem) {
    if (scrollPos < 9250) return generatePictureCode(1, elem);
    if (scrollPos < 9320) return generatePictureCode(2, elem);
    if (scrollPos < 9390) return generatePictureCode(3, elem);
    if (scrollPos < 9460) return generatePictureCode(4, elem);
    if (scrollPos < 9530) return generatePictureCode(5, elem);
    if (scrollPos < 9600) return generatePictureCode(6, elem);
    if (scrollPos > 9600) return generatePictureCode(6, elem);
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

// window.addEventListener('click', function(e) {
//     menuName = e.srcElement.className;
//     console.log(menuName);
// })