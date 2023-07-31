let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');

}

window.onscroll = () =>{
  navbar.classList.remove('active');
}

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const typed = new Typed('.multiple-text', {
    strings: ['cerdas', 'kreative', 'berwawasan tinggi', 'Sekolah Unggul Berbasis Karakter'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function downloadImage() {
    var imgURL = "card_perusahaan.png"; // Ganti dengan path gambar yang ingin diunduh
    var imgName = "card_perusahaan.png"; // Nama file yang akan diunduh, ganti sesuai kebutuhan
    var link = document.createElement("a");
    link.href = imgURL;
    link.download = imgName;
    link.click();
}
