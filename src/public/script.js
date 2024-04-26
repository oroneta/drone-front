const audio = new Audio("/alert.mp3");
class AlarmImage {
    static show(dic, url, auto = true) {
        // Play sound ./alert.mp3
        audio.play();
        document.querySelector(".AlarmDroneDIC").innerHTML = dic;

        // Show alert
        document.querySelector("#AlarmImage").classList.add("active");

        // Auto hide
        if (auto) {
            setTimeout(() => {
                document.querySelector("#AlarmImage").classList.remove("active");
            }, 5000);
        }
    }
}