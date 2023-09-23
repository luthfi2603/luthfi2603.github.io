var backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if(this.scrollY >= 100){
        backToTop.classList.add('show');

        backToTop.addEventListener('click', () => {
            window.scrollTo({top: 0});
        })
    }else{
        backToTop.classList.remove('show');
    }
});

var daftarGambar = [
    "./assets/img/eula.webp",
    "./assets/img/raiden-ei.webp",
    "./assets/img/hutao.webp",
    "./assets/img/keqing.webp",
    "./assets/img/ganyu.webp"
];

var indeksGambar = 0

function ubahGambar(){
    var gambar = document.getElementById("ubah-gambar");
    gambar.src = daftarGambar[indeksGambar];
    indeksGambar++;
    
    if(indeksGambar === daftarGambar.length){
      indeksGambar = 0;
    }
}

setInterval(ubahGambar, 3000);

var daftarGambar2 = [
    "./assets/img/viewpoint2.webp",
    "./assets/img/viewpoint3.webp",
    "./assets/img/viewpoint4.webp",
    "./assets/img/viewpoint5.webp",
    "./assets/img/viewpoint1.webp"
];

var indeksGambar2 = 0

function ubahGambar2(){
    var gambar2 = document.getElementById("ubah-gambar-2");
    gambar2.src = daftarGambar2[indeksGambar2];
    indeksGambar2++;
    
    if(indeksGambar2 === daftarGambar2.length){
      indeksGambar2 = 0;
    }
}

setInterval(ubahGambar2, 3000);