// ------ to color parts of svg when hover -----
document.getElementById('rect1').onmouseover = function () {
    document.getElementById('Path_27').style.fill = "#fcbf49";
    document.getElementById('rect1').style.cursor = "pointer";
}
document.getElementById('rect1').onmouseleave = function () {
    document.getElementById('Path_27').style.fill = "#404040";
}

document.getElementById('rect2').onmouseover = function () {
    document.getElementById('Path_2').style.fill = "#fcbf49";
    document.getElementById('rect2').style.cursor = "pointer";
}
document.getElementById('rect2').onmouseleave = function () {
    document.getElementById('Path_2').style.fill = "#52A8B7";
}

document.getElementById('rect3').onmouseover = function () {
    document.getElementById('Path_11').style.fill = "#fcbf49";
    document.getElementById('rect3').style.cursor = "pointer";
}
document.getElementById('rect3').onmouseleave = function () {
    document.getElementById('Path_11').style.fill = "#52A8B7";
}

document.getElementById('rect4').onmouseover = function () {
    document.getElementById('Path_14').style.fill = "#fcbf49";
    document.getElementById('rect4').style.cursor = "pointer";
}
document.getElementById('rect4').onmouseleave = function () {
    document.getElementById('Path_14').style.fill = "#52A8B7";
}

// ------ handle click on the parts -----
document.getElementById('allTips').style.visibility = "hidden";
document.getElementById('rect2').onclick = function () {
    document.getElementById('hightemp').style.visibility = "visible";
    hideOthers('hightemp');
}
document.getElementById('rect1').onclick = function () {
    document.getElementById('turbine').style.visibility = "visible";
    hideOthers('turbine');
}
document.getElementById('rect3').onclick = function () {
    document.getElementById('compressor').style.visibility = "visible";
    hideOthers('compressor');
}
document.getElementById('rect4').onclick = function () {
    document.getElementById('reduction').style.visibility = "visible";
    hideOthers('reduction');
}
document.getElementById('Path_1').onclick = function () {
    document.getElementById('bleed').style.visibility = "visible";
    hideOthers('bleed');
}
document.getElementById('Path_28').onclick = function () {
    document.getElementById('naturalgas').style.visibility = "visible";
    hideOthers('naturalgas');
}
document.getElementById('Path_13').onclick = function () {
    document.getElementById('air').style.visibility = "visible";
    hideOthers('air');
}
document.getElementById('Path_19').onclick = function () {
    document.getElementById('shear').style.visibility = "visible";
    hideOthers('shear');
}
document.getElementById('Path_17').onclick = function () {
    document.getElementById('gen1800').style.visibility = "visible";
    hideOthers('gen1800');
}
document.getElementById('Path_29').onclick = function () {
    document.getElementById('fuelInjector').style.visibility = "visible";
    hideOthers('fuelInjector');
}
document.getElementById('Path_7').onclick = function () {
    document.getElementById('combustionchamber').style.visibility = "visible";
    hideOthers('combustionchamber');
}
let ids = ['hightemp', 'turbine', 'compressor', 'reduction', 'bleed', 'naturalgas', 'air', 'shear', 'gen1800', 'fuelInjector', 'combustionchamber'];
// --------- hide other tips ---------
function hideOthers(id) {
    for (var i = 0; i < ids.length; i++) {
        if (ids[i] != id) {
            document.getElementById(ids[i]).style.visibility = "hidden";
        }
    }
}
