const tanah = document.querySelectorAll('.tanah')
const kenan = document.querySelectorAll('.kenan')
const papanSkor =  document.querySelector('.papan-skor');
const pop = document.querySelector('pop');

let tanahSebelumnya;
let selesai;
let skor;

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
        if (!selesai) {
            munculkanKenan();
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = skor;
    munculkanKenan();
    setTimeout(() => {
    selesai = true;
    }, 10000);
    
}

function pukul() {
    skor++;
    papanSkor.textContent = skor;
    this.parentNode.classList.remove('muncul');
    pop.play()
    
}

kenan.forEach(k => {
    k.addEventListener('click', pukul);
});