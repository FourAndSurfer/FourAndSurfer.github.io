window.addEventListener("batterylow", onBatteryLow, false);

        function onBatteryLow(status) {
            alert("Battery Level Low " + status.level + "%");
};
        window.addEventListener("batterycritical", onBatteryCritical, false);

        function onBatteryCritical(status) {
            alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}
