let isSelected = false;
let radio = document.getElementsByName('answers');
function enableButton() {
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            isSelected = true;
            break;
        }
    }
    if (isSelected == true) {
        document.getElementById('submitBtn').disabled = false;
    }
}
function checkAnswer() {
    document.getElementById('submitBtn').disabled = true;
    let msg = ['The pulsating components of each phase cancel each other because of 1200 phase shifts. Thus, the power delivered to a three-phase load is <u>constant</u> in nature and not pulsating.', 'Power per kilogram of metal from a Three-phase machine is <u>more</u> as compared to single phase machine.', '', 'Mechanical vibrations in three-phase motors are <u>less</u> as compared to single-phase motors.'];
    let reason = "";
    for (var i = 0; i < radio.length; i++) {
        radio[i].disabled = true;
    }
    if (radio[2].checked) {
        document.getElementById('exampleModalLabel').innerHTML = '<i class="bi bi-check2-circle"></i> Correct';
        document.getElementById('exampleModalLabel').style.color = "green";
        document.getElementById('msg').innerHTML = "That’s correct! A three-phase machine does not require a starter.";
    }
    else {
        document.getElementById('exampleModalLabel').innerHTML = '<i class="bi bi-exclamation-circle"></i> Incorrect';
        document.getElementById('exampleModalLabel').style.color = "red";
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked && i != 2) {
                reason = msg[i];
                break;
            }
        }
        document.getElementById('msg').innerHTML = "That’s not quite right. " + reason;
    }
}