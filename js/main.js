const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        // menuBtn.classList.remove('pulse');
        menuBtn.classList.add('vanish');
        menuOpen = true;
        document.querySelector('.container').classList.toggle('change');
        
    } else {
        menuBtn.classList.remove('open');
        // menuBtn.classList.add('pulse');
        menuBtn.classList.remove('vanish');
        document.querySelector('.container').classList.remove('change');
        menuOpen = false;
    }
    
});

// click to scroll top
// $('.move-up span').click(function () {
//     $('html, body').animate({
//         scrollTop: 0
//     }, 2000);
// });


