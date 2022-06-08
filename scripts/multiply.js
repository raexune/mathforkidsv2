const answer1 = document.getElementById("option-1");
const answer2 = document.getElementById("option-2");
const answer3 = document.getElementById("option-3");
const audio = document.getElementById("myAudio");
let answer = 0;

function generateEquation() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let dummyAnswer1 = Math.floor(Math.random() * 13);
    let dummyAnswer2 = Math.floor(Math.random() * 13);
    let allAnswers = [];
    let switchAnswers = [];

    answer = num1 * num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for (i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    answer1.innerHTML = switchAnswers[0];
    answer2.innerHTML = switchAnswers[1];
    answer3.innerHTML = switchAnswers[2];
}

answer1.addEventListener("click", function () {
    if (answer1.innerHTML == answer) {
        generateEquation();
    } else {
        audio.play();
    }
});

answer2.addEventListener("click", function () {
    if (answer2.innerHTML == answer) {
        generateEquation();
    } else {
        audio.play();
    }
});

answer3.addEventListener("click", function () {
    if (answer3.innerHTML == answer) {
        generateEquation();
    } else {
        audio.play();
    }
});

generateEquation();