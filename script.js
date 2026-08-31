/* =====================================
   🔐 YOUR SECRET PASSWORD
   CHANGE THIS!
===================================== */

const correctPassword = "ILOVEYOU";


/* =====================================
   PASSWORD UNLOCK
===================================== */

function unlockWebsite() {

    const input =
        document.getElementById("passwordInput").value.trim();

    const error =
        document.getElementById("wrongPassword");

    if (input === correctPassword) {

        document
            .getElementById("passwordScreen")
            .style.opacity = "0";

        document
            .getElementById("passwordScreen")
            .style.transition = "opacity 0.8s";

        setTimeout(() => {

            document
                .getElementById("passwordScreen")
                .style.display = "none";

            document
                .getElementById("website")
                .classList.remove("hidden");

            startHearts();

            typeMessage();

        }, 800);

    } else {

        error.innerHTML =
            "Wrong password... try again, birthday boy ❤️";

    }
}


/* =====================================
   ENTER KEY
===================================== */

document
    .getElementById("passwordInput")
    .addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                unlockWebsite();

            }

        }
    );


/* =====================================
   CUTE TYPING MESSAGE
===================================== */

const message =
    "Before you scroll any further... I just want you to know that you are one of the best things that ever happened to me. ❤️";

let messageIndex = 0;

function typeMessage() {

    const text =
        document.getElementById("typingText");

    if (messageIndex < message.length) {

        text.innerHTML +=
            message.charAt(messageIndex);

        messageIndex++;

        setTimeout(typeMessage, 45);

    }

}


/* =====================================
   SCROLL TO STORY
===================================== */

function goToStory() {

    document
        .getElementById("story")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================
   FLOATING HEARTS
===================================== */

function startHearts() {

    setInterval(() => {

        createHeart();

    }, 650);

}


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");

    const heartTypes = [
        "♥",
        "♡",
        "❤",
        "💕",
        "💗"
    ];

    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() * heartTypes.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 18 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document
        .getElementById("hearts-container")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}


/* =====================================
   FINAL SURPRISE
===================================== */

function openSurprise() {

    const message =
        document.getElementById("finalMessage");

    message.classList.remove("hidden");

    createHeartExplosion();

}


/* =====================================
   HEART EXPLOSION
===================================== */

function createHeartExplosion() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.classList.add("floating-heart");

            heart.innerHTML = "❤️";

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.fontSize =
                (Math.random() * 25 + 15) + "px";

            heart.style.animationDuration =
                (Math.random() * 3 + 3) + "s";

            document
                .getElementById("hearts-container")
                .appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 7000);

        }, i * 80);

    }

}
