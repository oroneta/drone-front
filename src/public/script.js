const audio = new Audio("/alert.mp3");
let AlarmImageObj = {
    status: false,
    dic: "",
    url: ""
};


window.errorCommTries = 0;
window.errorCommMaxTries = 3;

window.errorCommShow = () => {
    audio.play();
    var r = document.querySelector(':root');
    // r.style.setProperty('--highlight-color2', "grey");
    document.querySelector(".errorConn").classList.add("active");
};
window.errorCommHide = () => {
    document.querySelector(".errorConn").classList.remove("active");
};
   
window.AlarmImageObj = AlarmImageObj;
class AlarmImage {
    static show(dic, url, auto = true) {
        // Play sound ./alert.mp3
        audio.play();
        document.querySelector(".AlarmDroneDIC").innerHTML = dic;

        // Show alert
        document.querySelector("#AlarmImage").classList.add("active");


        AlarmImageObj.dic = dic;
        AlarmImageObj.url = HOST+url;
        console.log("Mostrando la alarma", window.AlarmImage.dic, window.AlarmImage.url);
        // Auto hide
        if (auto) {
            setTimeout(() => {
                this.hide();
            }, 5000);
        }
    }
    static hide() {
        // Stop sound
        audio.pause();
        audio.currentTime = 0;

        // Hide alert
        document.querySelector("#AlarmImage").classList.remove("active");
    }
}
window.AlarmImage = AlarmImage;


function onChangeRenderEvent(url) {
    if (url.includes("/map")) {
        //!TODO: Implementar la funcionalidad de la alarma, mostrar la imagen

    }
}


