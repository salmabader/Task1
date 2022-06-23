let markers = ['steamMarker', 'gasMarker', 'dieselMarker', 'combinedMarker', 'dGasMarker'];
let id = ['steam', 'gas', 'diesel', 'combined', 'diesel-gas', 'showAll'];
document.getElementById('markers').style.visibility = "hidden";
function show(marker) {
    switch (marker) {
        case 'steam':
            document.getElementById('steamMarker').style.visibility = "visible";
            selected(marker);
            hideOthers(marker);
            break;
        case 'gas':
            document.getElementById('gasMarker').style.visibility = "visible";
            selected(marker);
            hideOthers(marker);
            break;
        case 'diesel':
            document.getElementById('dieselMarker').style.visibility = "visible";
            selected(marker);
            hideOthers(marker);
            break;
        case 'combined':
            document.getElementById('combinedMarker').style.visibility = "visible";
            selected(marker);
            hideOthers(marker);
            break;
        case 'diesel-gas':
            document.getElementById('dGasMarker').style.visibility = "visible";
            selected(marker);
            hideOthers(marker);
            break;
        case 'showAll':
            selected(marker);
            showAll();
            break;
    }
}

function selected(elementId) {
    document.getElementById(elementId).classList.add("selected");
    for (var i = 0; i < id.length; i++) {
        if (id[i] != elementId) {
            document.getElementById(id[i]).classList.remove("selected");
        }
    }
}
function hideOthers(m) {
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