let markers = ['steamMarker', 'gasMarker', 'dieselMarker', 'combinedMarker', 'dGasMarker'];
document.getElementById('markers').style.visibility = "hidden";
function show(marker) {
    switch (marker) {
        case 'steam':
            document.getElementById('steamMarker').style.visibility = "visible";
            document.getElementById(marker).style.backgroundColor = "rgb(246, 139, 46)";
            selected(marker);
            hideOthers(marker);
            break;
        case 'gas':
            document.getElementById('gasMarker').style.visibility = "visible";
            document.getElementById(marker).style.backgroundColor = "rgb(204, 65, 65)";
            hideOthers(marker);
            selected(marker);
            break;
        case 'diesel':
            document.getElementById('dieselMarker').style.visibility = "visible";
            document.getElementById(marker).style.backgroundColor = "rgb(0, 84, 163)";
            selected(marker);
            hideOthers(marker);
            break;
        case 'combined':
            document.getElementById('combinedMarker').style.visibility = "visible";
            document.getElementById(marker).style.backgroundColor = "rgb(66, 174, 188)";
            selected(marker);
            hideOthers(marker);
            break;
        case 'diesel-gas':
            document.getElementById('dGasMarker').style.visibility = "visible";
            document.getElementById(marker).style.backgroundColor = "rgb(155, 206, 59)";
            selected(marker);
            hideOthers(marker);
            break;
        case 'showAll':
            showAll();
            document.getElementById(marker).style.backgroundColor = "rgb(96, 99, 106)";
            selected(marker);
            break;
    }
}

function selected(id) {
    document.getElementById(id).style.color = "white";
    document.getElementById(id).querySelector("i").style.color = "white";
    document.getElementById(id).style.cursor = "default";
}
function hideOthers(m) {
    let id = ['steam', 'gas', 'diesel', 'combined', 'diesel-gas'];
    for (var i = 0; i < markers.length; i++) {
        if (id[i] != m) {
            document.getElementById(markers[i]).style.visibility = "hidden";
        }
    }
}
function showAll() {
    for (var i = 0; i < markers.length; i++) {
        document.getElementById(markers[i]).style.visibility = "visible";
    }
}