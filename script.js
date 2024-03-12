//M
let selectedLampIndex = -1;
let startTime;
//V
updateView();
function updateView() {
    let html = '';
    for(i = 1; i < 26; i++) {
        html += `<div class="lamp" id="lamp${i}" onclick="selectedLamp(${i})">${i}</div>`
    }
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h3>Reaksjons Spill<h3>
        <div class="container">
            ${html}
        </div>
        <div id="timeResults"></div>
    `;
    if(selectedLampIndex !== 0) {
        turnLightOn(selectedLampIndex);     
    }
}

//C
document.addEventListener('DOMContentLoaded', () => {
    randomLightOn();
});

function randomLightOn() {
    const newSelectedIndex = Math.floor(Math.random() * 25) + 1;
    turnLightOn(newSelectedIndex);
    startTime = new Date().getTime();
}

function turnLightOn(i) {
    if(selectedLampIndex !== 0) {
        document.getElementById(`lamp${selectedLampIndex}`).classList.remove('lightOn');
    }
    document.getElementById(`lamp${i}`).classList.add('lightOn');
    selectedLampIndex = i;
}

function selectedLamp(i) {
    if (i === selectedLampIndex) { 
        let finishTime = new Date().getTime();
        let spentMilliseconds = finishTime - startTime;
        let spentSeconds = spentMilliseconds / 1000;
        document.getElementById('timeResults').innerHTML += `Reaction Time: ${spentSeconds} seconds.<br>`;
        randomLightOn(); 
    }
}