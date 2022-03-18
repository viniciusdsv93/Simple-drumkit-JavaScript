document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLowerCase());
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        console.log(audioElement);
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add("active");

        setTimeout(() => {
            keyElement.classList.remove("active");
        }, 300);
    }
}

document.querySelector("button").addEventListener("click", (event) => {
    let inputText = document.querySelector("#input").value;

    if (inputText !== "") {
    }
    inputText = Array.from(inputText);
    playComposition(inputText);
});

function playComposition(composition) {
    let wait = 0;

    for (let i = 0; i < composition.length; i++) {
        let audioItem = document.querySelector(
            `#s_key${composition[i].toLowerCase()}`
        );

        setTimeout(() => {
            if (audioItem) {
                audioItem.currentTime = 0;
                audioItem.play();
            }
        }, wait);

        wait += 250;
    }
}
