// console.log(window.innerWidth);
// console.log(window.innerHeight);

document.getElementsByClassName('main')[0].style.display = 'block'; 
document.getElementsByClassName('main')[1].style.display = 'block'; 
document.getElementsByClassName('main-m')[0].style.display = 'none'; 
document.getElementsByClassName('main-m')[1].style.display = 'none'; 
if (window.innerWidth >= 320 && window.innerWidth <= 1080) {
    document.getElementsByClassName('main')[0].style.display = 'none'; 
    document.getElementsByClassName('main')[1].style.display = 'none'; 
    document.getElementsByClassName('main-m')[0].style.display = 'block'; 
    document.getElementsByClassName('main-m')[1].style.display = 'block'; 
}

var showableArr = {'bg':'block', 'aboutus':'none', 'howwework':'none', 'whatweworkon':'none', 'howwedecide':'none', 'team':'none'};
for (i in showableArr) {
    document.getElementById(i).style.display = showableArr[i];
}

var showableArrM = {'bg-m':'block', 'aboutus-m':'none', 'howwework-m':'none', 'whatweworkon-m':'none', 'howwedecide-m':'none', 'team-m':'none'};
for (i in showableArrM) {
    document.getElementById(i).style.display = showableArrM[i];
}

function showHide(div_section) {
    for (i in showableArr) {
        if (i == 'bg') {
            document.getElementById('anime').style.display = 'none';
        }
        document.getElementById(i).style.display = 'none';
        if (i == div_section) {
            if (i == 'bg') {
                document.getElementById('anime').style.display = 'block';
            }
            document.getElementById(i).style.display = 'block';
        }
    }
}

function showHideM(div_section) {
    for (i in showableArrM) {
        if (i == 'bg-m') {
            document.getElementById('anime').style.display = 'none';
        }
        document.getElementById(i).style.display = 'none';
        if (i == div_section) {
            if (i == 'bg-m') {
                document.getElementById('anime').style.display = 'block';
            }
            document.getElementById(i).style.display = 'block';
        }
    }
    menuM();
}

function menuM() {
    if (document.getElementsByClassName('menu')[0].style.visibility == 'visible' ) {
        document.getElementsByClassName('menu')[0].style.visibility = 'hidden';
    } else {
        document.getElementsByClassName('menu')[0].style.visibility = 'visible';
    }
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
    if (window.innerWidth == 1920) {
        img.src = 'img/' + imgArr[i];
    } else if (window.innerWidth > 1275 && window.innerWidth < 1900 && window.innerHeight != 950) {
        img.src = 'img/1366/' + imgArr[i];
    } else if (window.innerWidth == 1280 && window.innerHeight == 950) {
        img.src = 'img/m/1280/' + imgArr[i];
    } else if (window.innerWidth >= 1080 && window.innerWidth < 1200 && window.innerHeight > 2200) {
        img.src = 'img/m/2280/' + imgArr[i];
    } else if (window.innerWidth >= 720 && window.innerWidth < 1080 && window.innerHeight > 650) {
        img.src = 'img/m/736/' + imgArr[i];
    } else if (window.innerWidth >= 414 && window.innerWidth < 720 && window.innerHeight > 730) {
        img.src = 'img/m/667/' + imgArr[i];
    } else if (window.innerWidth >= 360 && window.innerWidth < 414 && window.innerHeight > 630) {
        img.src = 'img/m/640/' + imgArr[i];
    } else if (window.innerWidth < 360 && window.innerHeight > 500) {
        img.src = 'img/m/640/' + imgArr[i];
        // img.src = 'img/m/500/' + imgArr[i];
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
    if (scrollPos < 1610) return generatePictureCode(5, elem);
    if (scrollPos < 1660) return generatePictureCode(6, elem);
    if (scrollPos < 1710) return generatePictureCode(7, elem);
    if (scrollPos < 1760) return generatePictureCode(8, elem);
    if (scrollPos < 1810) return generatePictureCode(9, elem);
    if (scrollPos < 1860) return generatePictureCode(10, elem);
    if (scrollPos > 1860) return generatePictureCode(10, elem);
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

function getSrc2_1366(scrollPos, elem) {
    if (scrollPos < 1200) return generatePictureCode(1, elem);
    if (scrollPos < 1260) return generatePictureCode(2, elem);
    if (scrollPos < 1310) return generatePictureCode(3, elem);
    if (scrollPos < 1360) return generatePictureCode(4, elem);
    if (scrollPos < 1410) return generatePictureCode(5, elem);
    if (scrollPos < 1460) return generatePictureCode(6, elem);
    if (scrollPos < 1510) return generatePictureCode(7, elem);
    if (scrollPos < 1560) return generatePictureCode(8, elem);
    if (scrollPos < 1610) return generatePictureCode(9, elem);
    if (scrollPos < 1660) return generatePictureCode(10, elem);
    if (scrollPos > 1660) return generatePictureCode(10, elem);
}

function getSrc3_1366(scrollPos, elem) {
    if (scrollPos < 2100) return generatePictureCode(1, elem);
    if (scrollPos < 2200) return generatePictureCode(2, elem);
    if (scrollPos < 2300) return generatePictureCode(3, elem);
    if (scrollPos < 2400) return generatePictureCode(4, elem);
    if (scrollPos < 2500) return generatePictureCode(5, elem);
    if (scrollPos < 2600) return generatePictureCode(6, elem);
    if (scrollPos < 2700) return generatePictureCode(7, elem);
    if (scrollPos > 2700) return generatePictureCode(7, elem);
}

function getSrc4_1366(scrollPos, elem) {
    if (scrollPos < 3100) return generatePictureCode(1, elem);
    if (scrollPos < 3135) return generatePictureCode(2, elem);
    if (scrollPos < 3170) return generatePictureCode(3, elem);
    if (scrollPos < 3205) return generatePictureCode(4, elem);
    if (scrollPos < 3240) return generatePictureCode(5, elem);
    if (scrollPos < 3275) return generatePictureCode(6, elem);
    if (scrollPos < 3310) return generatePictureCode(7, elem);
    if (scrollPos < 3345) return generatePictureCode(8, elem);
    if (scrollPos < 3380) return generatePictureCode(9, elem);
    if (scrollPos < 3415) return generatePictureCode(10, elem);
    if (scrollPos < 3450) return generatePictureCode(11, elem);
    if (scrollPos < 3485) return generatePictureCode(12, elem);
    if (scrollPos < 3520) return generatePictureCode(13, elem);
    if (scrollPos > 3520) return generatePictureCode(13, elem);
}

function getSrc5_1366(scrollPos, elem) {
    if (scrollPos < 4000) return generatePictureCode(1, elem);
    if (scrollPos < 4040) return generatePictureCode(2, elem);
    if (scrollPos < 4080) return generatePictureCode(3, elem);
    if (scrollPos < 4120) return generatePictureCode(4, elem);
    if (scrollPos < 4160) return generatePictureCode(5, elem);
    if (scrollPos < 4200) return generatePictureCode(6, elem);
    if (scrollPos < 4240) return generatePictureCode(7, elem);
    if (scrollPos > 4240) return generatePictureCode(7, elem);
}

function getSrc6_1366(scrollPos, elem) {
    if (scrollPos < 4600) return generatePictureCode(1, elem);
    if (scrollPos < 4640) return generatePictureCode(2, elem);
    if (scrollPos < 4680) return generatePictureCode(3, elem);
    if (scrollPos < 4720) return generatePictureCode(4, elem);
    if (scrollPos < 4760) return generatePictureCode(5, elem);
    if (scrollPos < 4800) return generatePictureCode(6, elem);
    if (scrollPos < 4840) return generatePictureCode(7, elem);
    if (scrollPos < 4880) return generatePictureCode(8, elem);
    if (scrollPos < 4920) return generatePictureCode(9, elem);
    if (scrollPos < 4960) return generatePictureCode(10, elem);
    if (scrollPos < 5000) return generatePictureCode(11, elem);
    if (scrollPos < 5040) return generatePictureCode(12, elem);
    if (scrollPos > 5040) return generatePictureCode(12, elem);
}

function getSrc7_1366(scrollPos, elem) {
    if (scrollPos < 5400) return generatePictureCode(1, elem);
    if (scrollPos < 5430) return generatePictureCode(2, elem);
    if (scrollPos < 5460) return generatePictureCode(3, elem);
    if (scrollPos < 5490) return generatePictureCode(4, elem);
    if (scrollPos < 5520) return generatePictureCode(5, elem);
    if (scrollPos < 5550) return generatePictureCode(6, elem);
    if (scrollPos < 5580) return generatePictureCode(7, elem);
    if (scrollPos < 5610) return generatePictureCode(8, elem);
    if (scrollPos < 5640) return generatePictureCode(9, elem);
    if (scrollPos < 5670) return generatePictureCode(10, elem);
    if (scrollPos < 5700) return generatePictureCode(11, elem);
    if (scrollPos > 5700) return generatePictureCode(12, elem);
}

function getSrc2_500H(scrollPos, elem) {
    if (scrollPos < 150) return generatePictureCode(1, elem);
    if (scrollPos < 165) return generatePictureCode(2, elem);
    if (scrollPos < 180) return generatePictureCode(3, elem);
    if (scrollPos < 195) return generatePictureCode(4, elem);
    if (scrollPos < 210) return generatePictureCode(5, elem);
    if (scrollPos < 225) return generatePictureCode(6, elem);
    if (scrollPos < 240) return generatePictureCode(7, elem);
    if (scrollPos < 255) return generatePictureCode(8, elem);
    if (scrollPos < 270) return generatePictureCode(9, elem);
    if (scrollPos < 285) return generatePictureCode(10, elem);
    if (scrollPos > 285) return generatePictureCode(10, elem);
}

function getSrc3_500H(scrollPos, elem) {
    if (scrollPos < 600) return generatePictureCode(1, elem);
    if (scrollPos < 625) return generatePictureCode(2, elem);
    if (scrollPos < 650) return generatePictureCode(3, elem);
    if (scrollPos < 675) return generatePictureCode(4, elem);
    if (scrollPos < 700) return generatePictureCode(5, elem);
    if (scrollPos < 725) return generatePictureCode(6, elem);
    if (scrollPos < 750) return generatePictureCode(7, elem);
    if (scrollPos > 750) return generatePictureCode(7, elem);
}

function getSrc4_500H(scrollPos, elem) {
    if (scrollPos < 1000) return generatePictureCode(1, elem);
    if (scrollPos < 1015) return generatePictureCode(2, elem);
    if (scrollPos < 1030) return generatePictureCode(3, elem);
    if (scrollPos < 1045) return generatePictureCode(4, elem);
    if (scrollPos < 1060) return generatePictureCode(5, elem);
    if (scrollPos < 1075) return generatePictureCode(6, elem);
    if (scrollPos < 1100) return generatePictureCode(7, elem);
    if (scrollPos < 1115) return generatePictureCode(8, elem);
    if (scrollPos < 1130) return generatePictureCode(9, elem);
    if (scrollPos < 1145) return generatePictureCode(10, elem);
    if (scrollPos < 1160) return generatePictureCode(11, elem);
    if (scrollPos < 1175) return generatePictureCode(12, elem);
    if (scrollPos < 1200) return generatePictureCode(13, elem);
    if (scrollPos > 1200) return generatePictureCode(13, elem);
}

function getSrc5_500H(scrollPos, elem) {
    if (scrollPos < 1315) return generatePictureCode(1, elem);
    if (scrollPos < 1333) return generatePictureCode(2, elem);
    if (scrollPos < 1351) return generatePictureCode(3, elem);
    if (scrollPos < 1369) return generatePictureCode(4, elem);
    if (scrollPos < 1387) return generatePictureCode(5, elem);
    if (scrollPos < 1405) return generatePictureCode(6, elem);
    if (scrollPos < 1423) return generatePictureCode(7, elem);
    if (scrollPos > 1423) return generatePictureCode(7, elem);
}

function getSrc6_500H(scrollPos, elem) {
    if (scrollPos < 1700) return generatePictureCode(1, elem);
    if (scrollPos < 1715) return generatePictureCode(2, elem);
    if (scrollPos < 1730) return generatePictureCode(3, elem);
    if (scrollPos < 1745) return generatePictureCode(4, elem);
    if (scrollPos < 1760) return generatePictureCode(5, elem);
    if (scrollPos < 1775) return generatePictureCode(6, elem);
    if (scrollPos < 1790) return generatePictureCode(7, elem);
    if (scrollPos < 1805) return generatePictureCode(8, elem);
    if (scrollPos < 1820) return generatePictureCode(9, elem);
    if (scrollPos > 1820) return generatePictureCode(10, elem);
}

function getSrc7_500H(scrollPos, elem) {
    if (scrollPos < 1840) return generatePictureCode(1, elem);
    if (scrollPos < 1845) return generatePictureCode(2, elem);
    if (scrollPos < 1850) return generatePictureCode(3, elem);
    if (scrollPos < 1855) return generatePictureCode(4, elem);
    if (scrollPos < 1860) return generatePictureCode(5, elem);
    if (scrollPos < 1865) return generatePictureCode(6, elem);
    if (scrollPos < 1870) return generatePictureCode(7, elem);
    if (scrollPos < 1875) return generatePictureCode(8, elem);
    if (scrollPos < 1880) return generatePictureCode(9, elem);
    if (scrollPos < 1885) return generatePictureCode(10, elem);
    if (scrollPos < 1890) return generatePictureCode(11, elem);
    if (scrollPos > 1895) return generatePictureCode(12, elem);
}

function getSrc2_640H(scrollPos, elem) {
    if (scrollPos < 150) return generatePictureCode(1, elem);
    if (scrollPos < 165) return generatePictureCode(2, elem);
    if (scrollPos < 180) return generatePictureCode(3, elem);
    if (scrollPos < 195) return generatePictureCode(4, elem);
    if (scrollPos < 210) return generatePictureCode(5, elem);
    if (scrollPos < 225) return generatePictureCode(6, elem);
    if (scrollPos < 240) return generatePictureCode(7, elem);
    if (scrollPos < 255) return generatePictureCode(8, elem);
    if (scrollPos < 270) return generatePictureCode(9, elem);
    if (scrollPos < 285) return generatePictureCode(10, elem);
    if (scrollPos > 285) return generatePictureCode(10, elem);
}

function getSrc3_640H(scrollPos, elem) {
    if (scrollPos < 600) return generatePictureCode(1, elem);
    if (scrollPos < 625) return generatePictureCode(2, elem);
    if (scrollPos < 650) return generatePictureCode(3, elem);
    if (scrollPos < 675) return generatePictureCode(4, elem);
    if (scrollPos < 700) return generatePictureCode(5, elem);
    if (scrollPos < 725) return generatePictureCode(6, elem);
    if (scrollPos < 750) return generatePictureCode(7, elem);
    if (scrollPos > 750) return generatePictureCode(7, elem);
}

function getSrc4_640H(scrollPos, elem) {
    if (scrollPos < 1000) return generatePictureCode(1, elem);
    if (scrollPos < 1015) return generatePictureCode(2, elem);
    if (scrollPos < 1030) return generatePictureCode(3, elem);
    if (scrollPos < 1045) return generatePictureCode(4, elem);
    if (scrollPos < 1060) return generatePictureCode(5, elem);
    if (scrollPos < 1075) return generatePictureCode(6, elem);
    if (scrollPos < 1100) return generatePictureCode(7, elem);
    if (scrollPos < 1115) return generatePictureCode(8, elem);
    if (scrollPos < 1130) return generatePictureCode(9, elem);
    if (scrollPos < 1145) return generatePictureCode(10, elem);
    if (scrollPos < 1160) return generatePictureCode(11, elem);
    if (scrollPos < 1175) return generatePictureCode(12, elem);
    if (scrollPos < 1200) return generatePictureCode(13, elem);
    if (scrollPos > 1200) return generatePictureCode(13, elem);
}

function getSrc5_640H(scrollPos, elem) {
    if (scrollPos < 1315) return generatePictureCode(1, elem);
    if (scrollPos < 1333) return generatePictureCode(2, elem);
    if (scrollPos < 1351) return generatePictureCode(3, elem);
    if (scrollPos < 1369) return generatePictureCode(4, elem);
    if (scrollPos < 1387) return generatePictureCode(5, elem);
    if (scrollPos < 1405) return generatePictureCode(6, elem);
    if (scrollPos < 1423) return generatePictureCode(7, elem);
    if (scrollPos > 1423) return generatePictureCode(7, elem);
}

function getSrc6_640H(scrollPos, elem) {
    if (scrollPos < 1700) return generatePictureCode(1, elem);
    if (scrollPos < 1715) return generatePictureCode(2, elem);
    if (scrollPos < 1730) return generatePictureCode(3, elem);
    if (scrollPos < 1745) return generatePictureCode(4, elem);
    if (scrollPos < 1760) return generatePictureCode(5, elem);
    if (scrollPos < 1775) return generatePictureCode(6, elem);
    if (scrollPos < 1790) return generatePictureCode(7, elem);
    if (scrollPos < 1805) return generatePictureCode(8, elem);
    if (scrollPos < 1820) return generatePictureCode(9, elem);
    if (scrollPos < 1835) return generatePictureCode(10, elem);
    if (scrollPos < 1850) return generatePictureCode(11, elem);
    if (scrollPos < 1875) return generatePictureCode(12, elem);
    if (scrollPos > 1875) return generatePictureCode(12, elem);
}

function getSrc7_640H(scrollPos, elem) {
    if (scrollPos < 1985) return generatePictureCode(1, elem);
    if (scrollPos < 2000) return generatePictureCode(2, elem);
    if (scrollPos < 2015) return generatePictureCode(3, elem);
    if (scrollPos < 2030) return generatePictureCode(4, elem);
    if (scrollPos < 2045) return generatePictureCode(5, elem);
    if (scrollPos < 2060) return generatePictureCode(6, elem);
    if (scrollPos < 2075) return generatePictureCode(7, elem);
    if (scrollPos < 2090) return generatePictureCode(8, elem);
    if (scrollPos < 2105) return generatePictureCode(9, elem);
    if (scrollPos < 2120) return generatePictureCode(10, elem);
    if (scrollPos < 2135) return generatePictureCode(11, elem);
    if (scrollPos < 2150) return generatePictureCode(12, elem);
    if (scrollPos > 2150) return generatePictureCode(13, elem);
}

function getSrc2_667H(scrollPos, elem) {
    if (scrollPos < 150) return generatePictureCode(1, elem);
    if (scrollPos < 165) return generatePictureCode(2, elem);
    if (scrollPos < 180) return generatePictureCode(3, elem);
    if (scrollPos < 195) return generatePictureCode(4, elem);
    if (scrollPos < 210) return generatePictureCode(5, elem);
    if (scrollPos < 225) return generatePictureCode(6, elem);
    if (scrollPos < 240) return generatePictureCode(7, elem);
    if (scrollPos < 255) return generatePictureCode(8, elem);
    if (scrollPos < 270) return generatePictureCode(9, elem);
    if (scrollPos < 285) return generatePictureCode(10, elem);
    if (scrollPos > 285) return generatePictureCode(10, elem);
}

function getSrc3_667H(scrollPos, elem) {
    if (scrollPos < 600) return generatePictureCode(1, elem);
    if (scrollPos < 625) return generatePictureCode(2, elem);
    if (scrollPos < 650) return generatePictureCode(3, elem);
    if (scrollPos < 675) return generatePictureCode(4, elem);
    if (scrollPos < 700) return generatePictureCode(5, elem);
    if (scrollPos < 725) return generatePictureCode(6, elem);
    if (scrollPos < 750) return generatePictureCode(7, elem);
    if (scrollPos > 750) return generatePictureCode(7, elem);
}

function getSrc4_667H(scrollPos, elem) {
    if (scrollPos < 1000) return generatePictureCode(1, elem);
    if (scrollPos < 1015) return generatePictureCode(2, elem);
    if (scrollPos < 1030) return generatePictureCode(3, elem);
    if (scrollPos < 1045) return generatePictureCode(4, elem);
    if (scrollPos < 1060) return generatePictureCode(5, elem);
    if (scrollPos < 1075) return generatePictureCode(6, elem);
    if (scrollPos < 1100) return generatePictureCode(7, elem);
    if (scrollPos < 1115) return generatePictureCode(8, elem);
    if (scrollPos < 1130) return generatePictureCode(9, elem);
    if (scrollPos < 1145) return generatePictureCode(10, elem);
    if (scrollPos < 1160) return generatePictureCode(11, elem);
    if (scrollPos < 1175) return generatePictureCode(12, elem);
    if (scrollPos < 1200) return generatePictureCode(13, elem);
    if (scrollPos > 1200) return generatePictureCode(13, elem);
}

function getSrc5_667H(scrollPos, elem) {
    if (scrollPos < 1315) return generatePictureCode(1, elem);
    if (scrollPos < 1333) return generatePictureCode(2, elem);
    if (scrollPos < 1351) return generatePictureCode(3, elem);
    if (scrollPos < 1369) return generatePictureCode(4, elem);
    if (scrollPos < 1387) return generatePictureCode(5, elem);
    if (scrollPos < 1405) return generatePictureCode(6, elem);
    if (scrollPos < 1423) return generatePictureCode(7, elem);
    if (scrollPos > 1423) return generatePictureCode(7, elem);
}

function getSrc6_667H(scrollPos, elem) {
    if (scrollPos < 1700) return generatePictureCode(1, elem);
    if (scrollPos < 1715) return generatePictureCode(2, elem);
    if (scrollPos < 1730) return generatePictureCode(3, elem);
    if (scrollPos < 1745) return generatePictureCode(4, elem);
    if (scrollPos < 1760) return generatePictureCode(5, elem);
    if (scrollPos < 1775) return generatePictureCode(6, elem);
    if (scrollPos < 1790) return generatePictureCode(7, elem);
    if (scrollPos < 1805) return generatePictureCode(8, elem);
    if (scrollPos < 1820) return generatePictureCode(9, elem);
    if (scrollPos < 1835) return generatePictureCode(10, elem);
    if (scrollPos < 1850) return generatePictureCode(11, elem);
    if (scrollPos < 1875) return generatePictureCode(12, elem);
    if (scrollPos > 1875) return generatePictureCode(12, elem);
}

function getSrc7_667H(scrollPos, elem) {
    if (scrollPos < 2100) return generatePictureCode(1, elem);
    if (scrollPos < 2109) return generatePictureCode(2, elem);
    if (scrollPos < 2118) return generatePictureCode(3, elem);
    if (scrollPos < 2127) return generatePictureCode(4, elem);
    if (scrollPos < 2136) return generatePictureCode(5, elem);
    if (scrollPos < 2145) return generatePictureCode(6, elem);
    if (scrollPos < 2154) return generatePictureCode(7, elem);
    if (scrollPos < 2163) return generatePictureCode(8, elem);
    if (scrollPos < 2172) return generatePictureCode(9, elem);
    if (scrollPos < 2181) return generatePictureCode(10, elem);
    if (scrollPos < 2190) return generatePictureCode(11, elem);
    if (scrollPos < 2200) return generatePictureCode(12, elem);
    if (scrollPos > 2200) return generatePictureCode(13, elem);
}

function getSrc2_736H(scrollPos, elem) {
    if (scrollPos < 250) return generatePictureCode(1, elem);
    if (scrollPos < 265) return generatePictureCode(2, elem);
    if (scrollPos < 280) return generatePictureCode(3, elem);
    if (scrollPos < 295) return generatePictureCode(4, elem);
    if (scrollPos < 310) return generatePictureCode(5, elem);
    if (scrollPos < 325) return generatePictureCode(6, elem);
    if (scrollPos < 340) return generatePictureCode(7, elem);
    if (scrollPos < 355) return generatePictureCode(8, elem);
    if (scrollPos < 370) return generatePictureCode(9, elem);
    if (scrollPos < 385) return generatePictureCode(10, elem);
    if (scrollPos > 385) return generatePictureCode(10, elem);
}

function getSrc3_736H(scrollPos, elem) {
    if (scrollPos < 600) return generatePictureCode(1, elem);
    if (scrollPos < 625) return generatePictureCode(2, elem);
    if (scrollPos < 650) return generatePictureCode(3, elem);
    if (scrollPos < 675) return generatePictureCode(4, elem);
    if (scrollPos < 700) return generatePictureCode(5, elem);
    if (scrollPos < 725) return generatePictureCode(6, elem);
    if (scrollPos < 750) return generatePictureCode(7, elem);
    if (scrollPos > 750) return generatePictureCode(7, elem);
}

function getSrc4_736H(scrollPos, elem) {
    if (scrollPos < 1050) return generatePictureCode(1, elem);
    if (scrollPos < 1080) return generatePictureCode(2, elem);
    if (scrollPos < 1110) return generatePictureCode(3, elem);
    if (scrollPos < 1140) return generatePictureCode(4, elem);
    if (scrollPos < 1170) return generatePictureCode(5, elem);
    if (scrollPos < 1200) return generatePictureCode(6, elem);
    if (scrollPos < 1230) return generatePictureCode(7, elem);
    if (scrollPos < 1260) return generatePictureCode(8, elem);
    if (scrollPos < 1290) return generatePictureCode(9, elem);
    if (scrollPos < 1320) return generatePictureCode(10, elem);
    if (scrollPos < 1350) return generatePictureCode(11, elem);
    if (scrollPos < 1380) return generatePictureCode(12, elem);
    if (scrollPos < 1410) return generatePictureCode(13, elem);
    if (scrollPos > 1410) return generatePictureCode(13, elem);
}

function getSrc5_736H(scrollPos, elem) {
    if (scrollPos < 1500) return generatePictureCode(1, elem);
    if (scrollPos < 1550) return generatePictureCode(2, elem);
    if (scrollPos < 1600) return generatePictureCode(3, elem);
    if (scrollPos < 1650) return generatePictureCode(4, elem);
    if (scrollPos < 1700) return generatePictureCode(5, elem);
    if (scrollPos < 1750) return generatePictureCode(6, elem);
    if (scrollPos < 1800) return generatePictureCode(7, elem);
    if (scrollPos > 1800) return generatePictureCode(7, elem);
}

function getSrc6_736H(scrollPos, elem) {
    if (scrollPos < 2000) return generatePictureCode(1, elem);
    if (scrollPos < 2027) return generatePictureCode(2, elem);
    if (scrollPos < 2054) return generatePictureCode(3, elem);
    if (scrollPos < 2081) return generatePictureCode(4, elem);
    if (scrollPos < 2108) return generatePictureCode(5, elem);
    if (scrollPos < 2135) return generatePictureCode(6, elem);
    if (scrollPos < 2162) return generatePictureCode(7, elem);
    if (scrollPos < 2189) return generatePictureCode(8, elem);
    if (scrollPos < 2216) return generatePictureCode(9, elem);
    if (scrollPos < 2243) return generatePictureCode(10, elem);
    if (scrollPos < 2270) return generatePictureCode(11, elem);
    if (scrollPos < 2297) return generatePictureCode(12, elem);
    if (scrollPos > 2297) return generatePictureCode(12, elem);
}

function getSrc7_736H(scrollPos, elem) {
    if (scrollPos < 2300) return generatePictureCode(1, elem);
    if (scrollPos < 2318) return generatePictureCode(2, elem);
    if (scrollPos < 2336) return generatePictureCode(3, elem);
    if (scrollPos < 2354) return generatePictureCode(4, elem);
    if (scrollPos < 2372) return generatePictureCode(5, elem);
    if (scrollPos < 2400) return generatePictureCode(6, elem);
    if (scrollPos < 2400) return generatePictureCode(7, elem);
    if (scrollPos < 2418) return generatePictureCode(8, elem);
    if (scrollPos < 2436) return generatePictureCode(9, elem);
    if (scrollPos < 2454) return generatePictureCode(10, elem);
    if (scrollPos < 2472) return generatePictureCode(11, elem);
    if (scrollPos < 2500) return generatePictureCode(12, elem);
    if (scrollPos > 2500) return generatePictureCode(13, elem);
}

function getSrc2_950H(scrollPos, elem) {
    if (scrollPos < 800) return generatePictureCode(1, elem);
    if (scrollPos < 825) return generatePictureCode(2, elem);
    if (scrollPos < 850) return generatePictureCode(3, elem);
    if (scrollPos < 875) return generatePictureCode(4, elem);
    if (scrollPos < 900) return generatePictureCode(5, elem);
    if (scrollPos < 925) return generatePictureCode(6, elem);
    if (scrollPos < 950) return generatePictureCode(7, elem);
    if (scrollPos < 975) return generatePictureCode(8, elem);
    if (scrollPos < 1000) return generatePictureCode(9, elem);
    if (scrollPos < 1025) return generatePictureCode(10, elem);
    if (scrollPos > 1025) return generatePictureCode(10, elem);
}

function getSrc3_950H(scrollPos, elem) {
    if (scrollPos < 1500) return generatePictureCode(1, elem);
    if (scrollPos < 1550) return generatePictureCode(2, elem);
    if (scrollPos < 1600) return generatePictureCode(3, elem);
    if (scrollPos < 1650) return generatePictureCode(4, elem);
    if (scrollPos < 1700) return generatePictureCode(5, elem);
    if (scrollPos < 1750) return generatePictureCode(6, elem);
    if (scrollPos < 1800) return generatePictureCode(7, elem);
    if (scrollPos > 1800) return generatePictureCode(7, elem);
}

function getSrc4_950H(scrollPos, elem) {
    if (scrollPos < 2500) return generatePictureCode(1, elem);
    if (scrollPos < 2525) return generatePictureCode(2, elem);
    if (scrollPos < 2550) return generatePictureCode(3, elem);
    if (scrollPos < 2575) return generatePictureCode(4, elem);
    if (scrollPos < 2600) return generatePictureCode(5, elem);
    if (scrollPos < 2625) return generatePictureCode(6, elem);
    if (scrollPos < 2650) return generatePictureCode(7, elem);
    if (scrollPos < 2675) return generatePictureCode(8, elem);
    if (scrollPos < 2700) return generatePictureCode(9, elem);
    if (scrollPos < 2725) return generatePictureCode(10, elem);
    if (scrollPos < 2750) return generatePictureCode(11, elem);
    if (scrollPos < 2775) return generatePictureCode(12, elem);
    if (scrollPos < 2800) return generatePictureCode(13, elem);
    if (scrollPos > 2800) return generatePictureCode(13, elem);
}

function getSrc5_950H(scrollPos, elem) {
    if (scrollPos < 3400) return generatePictureCode(1, elem);
    if (scrollPos < 3450) return generatePictureCode(2, elem);
    if (scrollPos < 3500) return generatePictureCode(3, elem);
    if (scrollPos < 3550) return generatePictureCode(4, elem);
    if (scrollPos < 3600) return generatePictureCode(5, elem);
    if (scrollPos < 3650) return generatePictureCode(6, elem);
    if (scrollPos < 3700) return generatePictureCode(7, elem);
    if (scrollPos > 3700) return generatePictureCode(7, elem);
}

function getSrc6_950H(scrollPos, elem) {
    if (scrollPos < 4150) return generatePictureCode(1, elem);
    if (scrollPos < 4185) return generatePictureCode(2, elem);
    if (scrollPos < 4220) return generatePictureCode(3, elem);
    if (scrollPos < 4255) return generatePictureCode(4, elem);
    if (scrollPos < 4290) return generatePictureCode(5, elem);
    if (scrollPos < 4325) return generatePictureCode(6, elem);
    if (scrollPos < 4360) return generatePictureCode(7, elem);
    if (scrollPos < 4395) return generatePictureCode(8, elem);
    if (scrollPos < 4430) return generatePictureCode(9, elem);
    if (scrollPos < 4465) return generatePictureCode(10, elem);
    if (scrollPos < 4500) return generatePictureCode(11, elem);
    if (scrollPos < 4535) return generatePictureCode(12, elem);
    if (scrollPos > 4535) return generatePictureCode(12, elem);
}

function getSrc7_950H(scrollPos, elem) {
    if (scrollPos < 4800) return generatePictureCode(1, elem);
    if (scrollPos < 4830) return generatePictureCode(2, elem);
    if (scrollPos < 4860) return generatePictureCode(3, elem);
    if (scrollPos < 4890) return generatePictureCode(4, elem);
    if (scrollPos < 4920) return generatePictureCode(5, elem);
    if (scrollPos < 4950) return generatePictureCode(6, elem);
    if (scrollPos < 4980) return generatePictureCode(7, elem);
    if (scrollPos < 5010) return generatePictureCode(8, elem);
    if (scrollPos < 5040) return generatePictureCode(9, elem);
    if (scrollPos < 5070) return generatePictureCode(10, elem);
    if (scrollPos < 5100) return generatePictureCode(11, elem);
    if (scrollPos > 5100) return generatePictureCode(12, elem);
}

function getSrc7_1200H(scrollPos, elem) {
    if (scrollPos < 7700) return generatePictureCode(1, elem);
    if (scrollPos < 7720) return generatePictureCode(2, elem);
    if (scrollPos < 7740) return generatePictureCode(3, elem);
    if (scrollPos < 7760) return generatePictureCode(4, elem);
    if (scrollPos < 7780) return generatePictureCode(5, elem);
    if (scrollPos < 7800) return generatePictureCode(6, elem);
    if (scrollPos < 7820) return generatePictureCode(7, elem);
    if (scrollPos < 7840) return generatePictureCode(8, elem);
    if (scrollPos < 7860) return generatePictureCode(9, elem);
    if (scrollPos < 7880) return generatePictureCode(10, elem);
    if (scrollPos < 7900) return generatePictureCode(11, elem);
    if (scrollPos > 7900) return generatePictureCode(12, elem);
}

function getSrc2_1280H(scrollPos, elem) {
    if (scrollPos < 650) return generatePictureCode(1, elem);
    if (scrollPos < 675) return generatePictureCode(2, elem);
    if (scrollPos < 700) return generatePictureCode(3, elem);
    if (scrollPos < 725) return generatePictureCode(4, elem);
    if (scrollPos < 750) return generatePictureCode(5, elem);
    if (scrollPos < 775) return generatePictureCode(6, elem);
    if (scrollPos < 800) return generatePictureCode(7, elem);
    if (scrollPos < 825) return generatePictureCode(8, elem);
    if (scrollPos < 850) return generatePictureCode(9, elem);
    if (scrollPos < 875) return generatePictureCode(10, elem);
    if (scrollPos > 875) return generatePictureCode(10, elem);
}

function getSrc3_1280H(scrollPos, elem) {
    if (scrollPos < 1250) return generatePictureCode(1, elem);
    if (scrollPos < 1300) return generatePictureCode(2, elem);
    if (scrollPos < 1350) return generatePictureCode(3, elem);
    if (scrollPos < 1400) return generatePictureCode(4, elem);
    if (scrollPos < 1450) return generatePictureCode(5, elem);
    if (scrollPos < 1500) return generatePictureCode(6, elem);
    if (scrollPos < 1550) return generatePictureCode(7, elem);
    if (scrollPos > 1550) return generatePictureCode(7, elem);
}

function getSrc4_1280H(scrollPos, elem) {
    if (scrollPos < 2125) return generatePictureCode(1, elem);
    if (scrollPos < 2150) return generatePictureCode(2, elem);
    if (scrollPos < 2175) return generatePictureCode(3, elem);
    if (scrollPos < 2200) return generatePictureCode(4, elem);
    if (scrollPos < 2225) return generatePictureCode(5, elem);
    if (scrollPos < 2250) return generatePictureCode(6, elem);
    if (scrollPos < 2275) return generatePictureCode(7, elem);
    if (scrollPos < 2300) return generatePictureCode(8, elem);
    if (scrollPos < 2325) return generatePictureCode(9, elem);
    if (scrollPos < 2350) return generatePictureCode(10, elem);
    if (scrollPos < 2375) return generatePictureCode(11, elem);
    if (scrollPos < 2400) return generatePictureCode(12, elem);
    if (scrollPos < 2425) return generatePictureCode(13, elem);
    if (scrollPos > 2425) return generatePictureCode(13, elem);
}

function getSrc5_1280H(scrollPos, elem) {
    if (scrollPos < 2950) return generatePictureCode(1, elem);
    if (scrollPos < 2990) return generatePictureCode(2, elem);
    if (scrollPos < 3030) return generatePictureCode(3, elem);
    if (scrollPos < 3070) return generatePictureCode(4, elem);
    if (scrollPos < 3110) return generatePictureCode(5, elem);
    if (scrollPos < 3150) return generatePictureCode(6, elem);
    if (scrollPos < 3200) return generatePictureCode(7, elem);
    if (scrollPos > 3200) return generatePictureCode(7, elem);
}

function getSrc6_1280H(scrollPos, elem) {
    if (scrollPos < 3600) return generatePictureCode(1, elem);
    if (scrollPos < 3635) return generatePictureCode(2, elem);
    if (scrollPos < 3670) return generatePictureCode(3, elem);
    if (scrollPos < 3705) return generatePictureCode(4, elem);
    if (scrollPos < 3740) return generatePictureCode(5, elem);
    if (scrollPos < 3775) return generatePictureCode(6, elem);
    if (scrollPos < 3810) return generatePictureCode(7, elem);
    if (scrollPos < 3845) return generatePictureCode(8, elem);
    if (scrollPos < 3880) return generatePictureCode(9, elem);
    if (scrollPos < 3915) return generatePictureCode(10, elem);
    if (scrollPos < 3950) return generatePictureCode(11, elem);
    if (scrollPos < 4000) return generatePictureCode(12, elem);
    if (scrollPos > 4000) return generatePictureCode(12, elem);
}

function getSrc7_1280H(scrollPos, elem) {
    if (scrollPos < 4200) return generatePictureCode(1, elem);
    if (scrollPos < 4220) return generatePictureCode(2, elem);
    if (scrollPos < 4240) return generatePictureCode(3, elem);
    if (scrollPos < 4260) return generatePictureCode(4, elem);
    if (scrollPos < 4280) return generatePictureCode(5, elem);
    if (scrollPos < 4300) return generatePictureCode(6, elem);
    if (scrollPos < 4320) return generatePictureCode(7, elem);
    if (scrollPos < 4340) return generatePictureCode(8, elem);
    if (scrollPos < 4360) return generatePictureCode(9, elem);
    if (scrollPos < 4380) return generatePictureCode(10, elem);
    if (scrollPos < 4400) return generatePictureCode(11, elem);
    if (scrollPos < 4420) return generatePictureCode(12, elem);
    if (scrollPos > 4420) return generatePictureCode(13, elem);
}

function getSrc2_2280H(scrollPos, elem) {
    if (scrollPos < 1100) return generatePictureCode(1, elem);
    if (scrollPos < 1135) return generatePictureCode(2, elem);
    if (scrollPos < 1170) return generatePictureCode(3, elem);
    if (scrollPos < 1205) return generatePictureCode(4, elem);
    if (scrollPos < 1240) return generatePictureCode(5, elem);
    if (scrollPos < 1275) return generatePictureCode(6, elem);
    if (scrollPos < 1310) return generatePictureCode(7, elem);
    if (scrollPos < 1345) return generatePictureCode(8, elem);
    if (scrollPos < 1380) return generatePictureCode(9, elem);
    if (scrollPos < 1415) return generatePictureCode(10, elem);
    if (scrollPos > 1415) return generatePictureCode(10, elem);
}

function getSrc3_2280H(scrollPos, elem) {
    if (scrollPos < 2100) return generatePictureCode(1, elem);
    if (scrollPos < 2180) return generatePictureCode(2, elem);
    if (scrollPos < 2260) return generatePictureCode(3, elem);
    if (scrollPos < 2340) return generatePictureCode(4, elem);
    if (scrollPos < 2420) return generatePictureCode(5, elem);
    if (scrollPos < 2500) return generatePictureCode(6, elem);
    if (scrollPos < 2580) return generatePictureCode(7, elem);
    if (scrollPos > 2580) return generatePictureCode(7, elem);
}

function getSrc4_2280H(scrollPos, elem) {
    if (scrollPos < 3400) return generatePictureCode(1, elem);
    if (scrollPos < 3450) return generatePictureCode(2, elem);
    if (scrollPos < 3500) return generatePictureCode(3, elem);
    if (scrollPos < 3550) return generatePictureCode(4, elem);
    if (scrollPos < 3600) return generatePictureCode(5, elem);
    if (scrollPos < 3650) return generatePictureCode(6, elem);
    if (scrollPos < 3700) return generatePictureCode(7, elem);
    if (scrollPos < 3750) return generatePictureCode(8, elem);
    if (scrollPos < 3800) return generatePictureCode(9, elem);
    if (scrollPos < 3850) return generatePictureCode(10, elem);
    if (scrollPos < 3900) return generatePictureCode(11, elem);
    if (scrollPos < 3950) return generatePictureCode(12, elem);
    if (scrollPos < 4000) return generatePictureCode(13, elem);
    if (scrollPos > 4000) return generatePictureCode(13, elem);
}
function getSrc5_2280H(scrollPos, elem) {
    if (scrollPos < 4600) return generatePictureCode(1, elem);
    if (scrollPos < 4665) return generatePictureCode(2, elem);
    if (scrollPos < 4730) return generatePictureCode(3, elem);
    if (scrollPos < 4795) return generatePictureCode(4, elem);
    if (scrollPos < 4860) return generatePictureCode(5, elem);
    if (scrollPos < 4925) return generatePictureCode(6, elem);
    if (scrollPos < 4990) return generatePictureCode(7, elem);
    if (scrollPos > 4990) return generatePictureCode(7, elem);
}

function getSrc6_2280H(scrollPos, elem) {
    if (scrollPos < 5750) return generatePictureCode(1, elem);
    if (scrollPos < 5790) return generatePictureCode(2, elem);
    if (scrollPos < 5830) return generatePictureCode(3, elem);
    if (scrollPos < 5870) return generatePictureCode(4, elem);
    if (scrollPos < 5910) return generatePictureCode(5, elem);
    if (scrollPos < 5950) return generatePictureCode(6, elem);
    if (scrollPos < 5990) return generatePictureCode(7, elem);
    if (scrollPos < 6030) return generatePictureCode(8, elem);
    if (scrollPos < 6070) return generatePictureCode(9, elem);
    if (scrollPos < 6110) return generatePictureCode(10, elem);
    if (scrollPos < 6150) return generatePictureCode(11, elem);
    if (scrollPos < 6190) return generatePictureCode(12, elem);
    if (scrollPos > 6190) return generatePictureCode(12, elem);
}

function getSrc7_2280H(scrollPos, elem) {
    if (scrollPos < 5700) return generatePictureCode(1, elem);
    if (scrollPos < 5750) return generatePictureCode(2, elem);
    if (scrollPos < 5800) return generatePictureCode(3, elem);
    if (scrollPos < 5850) return generatePictureCode(4, elem);
    if (scrollPos < 5900) return generatePictureCode(5, elem);
    if (scrollPos < 5950) return generatePictureCode(6, elem);
    if (scrollPos < 6000) return generatePictureCode(7, elem);
    if (scrollPos < 6050) return generatePictureCode(8, elem);
    if (scrollPos < 6100) return generatePictureCode(9, elem);
    if (scrollPos < 6150) return generatePictureCode(10, elem);
    if (scrollPos < 6200) return generatePictureCode(11, elem);
    if (scrollPos < 6250) return generatePictureCode(12, elem);
    if (scrollPos > 6250) return generatePictureCode(13, elem);
}

function generatePictureCode(val, elem) {
    return '<picture><source media="(min-width: 1450px)" srcset="img/'+elem+'-'+val+'.png"><source media="(min-width: 1365px)" srcset="img/1366/'+elem+'-'+val+'.png"><source media="(min-width: 1080px)" srcset="img/m/2280/'+elem+'-'+val+'.png"><source media="(min-width: 720px)" srcset="img/m/1280/'+elem+'-'+val+'.png"><source media="(min-width: 360px)" srcset="img/m/640/'+elem+'-'+val+'.png"><img src="img/'+elem+'-'+val+'.png" style="width: 100vw;"></picture>';
}

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.innerWidth == 1920) {
        setTimeout(function(){  
            anime2.innerHTML = getSrc2(window.scrollY, "anime2");
            anime3.innerHTML = getSrc3(window.scrollY, "anime3");
            anime4.innerHTML = getSrc4(window.scrollY, "anime4");
            anime5.innerHTML = getSrc5(window.scrollY, "anime5");
            anime6.innerHTML = getSrc6(window.scrollY, "anime6");
            if (window.innerHeight > 1080) {
                anime7.innerHTML = getSrc7_1200H(window.scrollY, "anime7");
            } else {
                anime7.innerHTML = getSrc7(window.scrollY, "anime7");
            }
        },109);
    } else if (window.innerWidth > 1275 && window.innerWidth < 1900 && window.innerHeight != 950) {
        setTimeout(function(){  
            anime2.innerHTML = getSrc2_1366(window.scrollY, "anime2");
            anime3.innerHTML = getSrc3_1366(window.scrollY, "anime3");
            anime4.innerHTML = getSrc4_1366(window.scrollY, "anime4");
            anime5.innerHTML = getSrc5_1366(window.scrollY, "anime5");
            anime6.innerHTML = getSrc6_1366(window.scrollY, "anime6");
            anime7.innerHTML = getSrc7_1366(window.scrollY, "anime7");
        },109);
    } else if (window.innerWidth == 1280 && window.innerHeight == 950) {
        anime2.innerHTML = getSrc2_950H(window.scrollY, "anime2");
        anime3.innerHTML = getSrc3_950H(window.scrollY, "anime3");
        anime4.innerHTML = getSrc4_950H(window.scrollY, "anime4");
        anime5.innerHTML = getSrc5_950H(window.scrollY, "anime5");
        anime6.innerHTML = getSrc6_950H(window.scrollY, "anime6");
        anime7.innerHTML = getSrc7_950H(window.scrollY, "anime7");
    } else if (window.innerWidth >= 1080 && window.innerWidth < 1200 && window.innerHeight > 2200) {
        anime2.innerHTML = getSrc2_2280H(window.scrollY, "anime2");
        anime3.innerHTML = getSrc3_2280H(window.scrollY, "anime3");
        anime4.innerHTML = getSrc4_2280H(window.scrollY, "anime4");
        anime5.innerHTML = getSrc5_2280H(window.scrollY, "anime5");
        anime6.innerHTML = getSrc6_2280H(window.scrollY, "anime6");
        anime7.innerHTML = getSrc7_2280H(window.scrollY, "anime7");
    } else if (window.innerWidth >= 720 && window.innerWidth < 1080 && window.innerHeight > 650) {
        anime2.innerHTML = getSrc2_1280H(window.scrollY, "anime2");
        anime3.innerHTML = getSrc3_1280H(window.scrollY, "anime3");
        anime4.innerHTML = getSrc4_1280H(window.scrollY, "anime4");
        anime5.innerHTML = getSrc5_1280H(window.scrollY, "anime5");
        anime6.innerHTML = getSrc6_1280H(window.scrollY, "anime6");
        anime7.innerHTML = getSrc7_1280H(window.scrollY, "anime7");
    } else if (window.innerWidth >= 414 && window.innerWidth < 720 && window.innerHeight > 730) {
        anime2.innerHTML = getSrc2_736H(window.scrollY, "anime2");
        anime3.innerHTML = getSrc3_736H(window.scrollY, "anime3");
        anime4.innerHTML = getSrc4_736H(window.scrollY, "anime4");
        anime5.innerHTML = getSrc5_736H(window.scrollY, "anime5");
        anime6.innerHTML = getSrc6_736H(window.scrollY, "anime6");
        anime7.innerHTML = getSrc7_736H(window.scrollY, "anime7");
    } else if (window.innerWidth >= 360 && window.innerWidth < 414 && window.innerHeight > 630) {
        anime2.innerHTML = getSrc2_640H(window.scrollY, "anime2");
        anime3.innerHTML = getSrc3_640H(window.scrollY, "anime3");
        anime4.innerHTML = getSrc4_640H(window.scrollY, "anime4");
        anime5.innerHTML = getSrc5_640H(window.scrollY, "anime5");
        anime6.innerHTML = getSrc6_640H(window.scrollY, "anime6");
        if (window.innerWidth >= 375) {
            anime7.innerHTML = getSrc7_667H(window.scrollY, "anime7");
        } else {
            anime7.innerHTML = getSrc7_640H(window.scrollY, "anime7");
        }
    } else if (window.innerWidth < 360 && window.innerHeight > 500) {
        anime2.innerHTML = getSrc2_500H(window.scrollY, "anime2");
        anime3.innerHTML = getSrc3_500H(window.scrollY, "anime3");
        anime4.innerHTML = getSrc4_500H(window.scrollY, "anime4");
        anime5.innerHTML = getSrc5_500H(window.scrollY, "anime5");
        anime6.innerHTML = getSrc6_500H(window.scrollY, "anime6");
        anime7.innerHTML = getSrc7_500H(window.scrollY, "anime7");
    }
});