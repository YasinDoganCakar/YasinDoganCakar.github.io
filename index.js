// @ts-nocheck
let score = 0;
let colorRandom;

function randomColorSelect() {
    const colorArray = ["blue", "yellow", "red", "black"];
    let colorRandomIndex = Math.floor(Math.random() * colorArray.length);
    colorRandom = colorArray[colorRandomIndex];
    return colorRandom;
}

function randomTextSelect() {
    const textArray = ["Mavi", "Sarı", "Kırmızı", "Siyah"];
    let textRandomIndex = Math.floor(Math.random() * textArray.length);
    let textRandom = textArray[textRandomIndex];
    return textRandom;
}

// Hedef yazının rengini ve textini değiştiriyor
document.getElementById("key").style.color = randomColorSelect();
document.getElementById("key").innerHTML = randomTextSelect();

function clickBox(color) {
    if (colorRandom === color) {
        score++;
    } else {
        score--;
    }

    if(score <= 0){
        alert('Oyun Bitti');
    }

    document.getElementById("key").style.color = randomColorSelect();
    document.getElementById("key").innerHTML = randomTextSelect();

    document.getElementById("score").innerHTML = score;
}