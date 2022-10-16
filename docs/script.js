window.onkeydown = (e) => {
    let sound;
    let keynum;

    if(window.event) {
        keynum = e.keyCode;
    } else if(e.which){
        keynum = e.which;
    }

    sound = new Audio("src/sounds/l1/" + String(keynum) + ".mp3");

    sound.play();

    document.getElementById(String(keynum)).style.backgroundColor = "lightskyblue";

    window.onkeyup = (e) => {
        let keyUpNum;

        if(window.event) {
            keyUpNum = e.keyCode;
        } else if(e.which){
            keyUpNum = e.which;
        }

        if (document.getElementById(String(keyUpNum)).className == "key1") {
            document.getElementById(String(keyUpNum)).style.backgroundColor = "white";
        } else {
            document.getElementById(String(keyUpNum)).style.backgroundColor = "black";
        }
    }

    setTimeout(function() {
    }, 100);
}