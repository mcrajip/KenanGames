const tanah = document.querySelectorAll('.tanah')
const kenan = document.querySelectorAll('.kenan')

let tanahSebelumnya;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanKenan() {
    const tRandom = randomTanah(tanah); 
    const wRandom = randomWaktu(300, 1000)
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        munculkanKenan();
    }, wRandom);
}