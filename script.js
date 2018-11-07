window.addEventListener("load", sidenVises);

let tid = 30;
let life = 3;

function sidenVises() {
    console.log("sidenVises");
    showStart();

}

function showStart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart)
    document.querySelector("#settings").addEventListener("click", showSettings);

}

function hideStart() {
    console.log("hide start")
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);

    startGame();
}

function startGame() {
    console.log("start game")
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");


    document.querySelector("#tid").innerHTML = tid;

    let timerInterval = setInterval(function () {
        document.querySelector("#tid").innerHTML = tid;
        tid--;
        if (tid < 0) {
            tid = 0;
            clearInterval(timerInterval)
            levelCompleted();
        }
    }, 1000);



    // kopier denne linje v og ændre id
    document.querySelector("#pizza").classList.add('bevaegelse1');

    document.querySelector('.bevaegelse1').addEventListener('animationend', newAnimation)

    function newAnimation() {
        let randomNumber = Math.floor((Math.random() * 100) + 1);

        console.log(randomNumber)
        this.classList.remove('bevaegelse1');

        this.style.transform = 'translate(' + randomNumber + 'vw, 0vw)'

        setTimeout(function () {
            //tilføj andre elementer kopier v linje og ændre id
            document.querySelector("#pizza").classList.add('bevaegelse1');
        }, 200)

        this.addEventListener('animationend', newAnimation)
    }




    //    document.querySelector("#Pizza_rotated").classList.add("Pizza_rotated_bevaegelse");
    //
    //
    //
    //
    //    document.querySelector("#batteri").classList.add("batteri_bevaegelse");
    //
    //
    //
    //    document.querySelector("#batteri_rotaed").classList.add("batteri_rotaed_bevaegelse");
    //
    //
    //
    //    document.querySelector("#avocado_rotaed_01").classList.add("avocado_rotaed_01_bevaegelse");
    //
    //
    //
    //
    //    document.querySelector("#avocado_rotaded_02").classList.add("avocado_rotaed_02_bevaegelse");
    //
    //
    //
    //    document.querySelector("#milk_rotated").classList.add("milk_rotated_bevaegelse");
    //
    //
    //
    //
    //    document.querySelector("#milk").classList.add("milk_bevaegelse");
    //
    //
    //
    //    document.querySelector("#glass_rotated_01").classList.add("glass_rotated_01_bevaegelse");
    //
    //
    //
    //    document.querySelector("#glass_rotated_02").classList.add("glass_rotated_01_bevaegelse");


}



function Click() {
    console.log("click")

    if (this.classList.contains("glass_rotated_01_bevaegelse")) {
        console.log("du har klikket på glass_01");
        this.classList.remove("glass_rotated_01_bevaegelse");
    } else if (this.classList.contains("batteri")) {
        console.log("du har klikket på batteri");
    }



    if (this.classList.contains("batteri")) {
        console.log("klikket på batteri");
        this.classList.remove("batteri");
        document.querySelector("#heart" + life).classList.add("hide");
        life--;
    }
    gameStatus()

}



function hitbottom() {

}


function TrashHitBottom() {

}


function GlassBatterBottom() {

}


function exploded() {

}


function showSettings() {
    console.log("showSettings")
    document.querySelector("#settings_screen").classList.remove("hide");
    document.querySelector("#setting_close").addEventListener("click", hideSettings);

}

function hideSettings() {
    console.log("hideSettings")
    document.querySelector("#settings_screen").classList.add("hide");



}


function gameOver() {

}


function levelCompleted() {
    console.log("levelCompleted");

}









function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == false) {
        showSettingsEffektSound = true;
        document.querySelector("#ID FRA HTML").classList.add("off_on");
        document.querySelector("#ID FRA HTML").classList.remove("off");
        document.querySelector("#ID FRA HTML").addEventListener("animationend", soundsOn);
        //        soundsOff();


    } else {
        //slukker lyden her
        showSettingsEffektSound = false;
        document.querySelector("#ID FRA HTML").classList.add("on_off");
        document.querySelector("#ID FRA HTML").classList.remove("on");
        document.querySelector("#ID FRA HTML").addEventListener("animationend", soundsOff);
        //        soundsOn();
    }

}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#ID FRA HTML").removeEventListener("animationend", soundsOff);
    document.querySelector("#ID FRA HTML").classList.remove("on_off");
    document.querySelector("#ID FRA HTML").classList.add("off");
    //    her slukkes for efx
    document.querySelector("#VÆLG EN LYD FIL").muted = true;
    document.querySelector("#VÆLG EN LYD FIL").muted = true;

}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#ID FRA HTML").removeEventListener("animationend", soundsOn);
    document.querySelector("#ID FRA HTML").classList.remove("off_on");
    document.querySelector("#ID FRA HTML").classList.add("on");
    //    her tændes for efx
    document.querySelector("#VÆLG EN LYD FIL").muted = false;
    document.querySelector("#VÆLG EN LYD FIL").muted = false;
}




function toggleMusic() {
    console.log("showSettingsMusic function " + showSettingsMusic);
    showSettingsMusic = !showSettingsMusic;


    if (showSettingsMusic == true) {


        //        musicOn();

    } else {


        //        musicOff();
    }
}

function musicOff() {
    console.log("musicOff function værdi er " + showSettingsEffektSound);

    //    her slukkes for musikken

    document.querySelector("#musik").pause();
}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsEffektSound);

    //    her tændes for musikken

    document.querySelector("#musik").play();
}
