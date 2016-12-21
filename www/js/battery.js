window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(status) {
    alert("Bateria fraca: " + status.level + "%");
};

window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(status) {
    alert("Bateria Critica! Por favor conectar uma fonte de energia. " + status.level + "%");
};
