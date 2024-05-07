const audio = new Audio("/alert.mp3");
let AlarmImageObj = {
    status: false,
    dic: "",
    url: ""
};
class AlarmImage {
    static show(dic, url, auto = true) {
        // Play sound ./alert.mp3
        audio.play();
        document.querySelector(".AlarmDroneDIC").innerHTML = dic;

        // Show alert
        document.querySelector("#AlarmImage").classList.add("active");

        AlarmImageObj.status = true;
        AlarmImageObj.dic = dic;
        AlarmImageObj.url = url;

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

        AlarmImageObj.status = false;
        AlarmImageObj.dic = "";
        AlarmImageObj.url = "";
    }
}

function onChangeRenderEvent(url) {
    if (url.includes("/map")) {
        //!TODO: Implementar la funcionalidad de la alarma, mostrar la imagen
    }
}


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#AlarmImage .btn .c").addEventListener("click", () => {
        AlarmImage.hide();
    });
    document.querySelector("#AlarmImage .btn .v").addEventListener("click", () => {
        AlarmImage.hide();
    });

    //
    let previousUrl = window.location.href;

    setInterval(function() {
        if (localStorage.getItem("oroneta-user") == "true") {
            const currentUrl = window.location.href;
            if (currentUrl !== previousUrl) {
                // La URL ha cambiado
                onChangeRenderEvent(currentUrl);
                // Aquí puedes ejecutar tus funciones necesarias.
                previousUrl = currentUrl;
            }

            // Verificar si hay una alarma activa
            DRONES.forEach(el => {
                fetch(`${HOST}/alarm/${el.dic}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${el.key}`
                    }
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Drone ", el, data);
                    if (data.status === true) {
                        AlarmImage.show(data.dic, false);
                    }
                })
            });
        }
    }, 1000); // Verificar cada segundo

});