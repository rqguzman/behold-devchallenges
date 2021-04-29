const body = document.body;
const imgs = ["fall.jpeg", "flowerPlant.jpeg", "leaf.jpeg"];

function changeBg() {
    const randomIdx = Math.floor(Math.random() * imgs.length);
    const imgUrl = 'url(../img/' + imgs[randomIdx] + ')';
    body.style.backgroundImage = imgUrl;
}

window.onload = changeBg();