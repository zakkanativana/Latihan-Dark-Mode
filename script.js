const button = document.querySelector('button');
const html = document.querySelector('html');

// Ketika tombol diklik
button.addEventListener('click', function(){
    // Cek color mode saat ini, lalu ubah 
    if(html.dataset.colorMode === 'light'){
        html.dataset.colorMode = 'dark';
        this.textContent = 'Light Mode';
    } else {
        html.dataset.colorMode = 'light';
        this.textContent = 'Dark Mode';
    }
});

// Control
const padding = document.querySelector('#padding');
const color = document.querySelector('#color');
padding.addEventListener('mousemove', function(){
    // kita akan ubah isi dari custom properti box-padding
    // cari didalam document, cari document elemen yang nama style nya yg akan kita setProperty nya, kita akan ganti isinya
    // note : yang namanya padding butuh satuan makanya diberi px
    document.documentElement.style.setProperty('--box-padding', this.value + 'px');
})
color.addEventListener('mousemove', function(){
    document.documentElement.style.setProperty('--box-color', this.value);
})