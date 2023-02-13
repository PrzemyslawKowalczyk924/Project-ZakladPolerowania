export function resizerOfWidth() {
    const aboutWrapper = document.querySelector('.about-wrapper');
    const mobile = 425;
    const aboveMobSize = 426;

    window.addEventListener('resize', () => {

        console.log('resize');
        console.log(window.innerWidth);

        /* if(window.innerWidth <= mobile) {
            console.log('BOOOOOOOOOOOOOM!');
            console.log(window.innerWidth);
            aboutWrapper.style.flexDirection = 'column';
            aboutWrapper.innerHTML = 
            "<div class='about-image-wrapper'>" + 
                "<div class='work-image'>" + 
                    "<img class='img-work' src='./images/fotki/wnetrze2.jpg'>" + 
                    "<img id='camera' class='old-camera nav-svg-icon' src='images/icons/camera-retro-solid.svg'/>" +
                "</div>" + 
            "</div>" +
            "<div class='text-wrapper'>" +
                "<p class='about-description'>Jesteśmy rodzinną mikrofirmą. Na rynku istniejemy od 2015 roku, choć nasza działalność rozpoczęła się dużo wcześniej.</p>" +
                "<p class='about-description'>Początkowo zajmowaliśmy się obróbką skrawaniem na maszynach tokarskich i frezerskich. Kiedy zlecenia na szlifowanie i polerkę rosły, postanowiliśmy zająć się wyłącznie tą dziedziną metalurgii.</p>" +
            "</div>" +
            "<div class='about-image-wrapper'>" +
                "<div class='work-image'>" +
                    "<img class='img-work' src='./images/fotki/tokarka2-pexels.jpg'>" + 
                    "<img id='camera' class='old-camera nav-svg-icon' src='images/icons/camera-retro-solid.svg'/>" +
                "</div>" + 
            "</div>" +
            "<div class='text-wrapper'>" +
                "<p class='about-description'>Nie zamykamy się sztywno w określonej dziedzinie szerokopojętej 'obróbki', toteż chętnie podejmujemy się nowych wyzwań jakie stawia przed nami klient. Ponieważ cały czas chcemy się rozwijać, gotowi jesteśmy do inwestycji w innowacyjne maszyny specjalistyczne.</p>" +
                "<p class='about-description'>Główna siedziba firmy znajduje się w Radomiu na ul. Stalowej 3 w byłych Zakładach Łączników. Drugi oddział firmy, znajduje się na Gąsawach Plebańskich 58 k. Jastrzębia, skąd biorą się też korzenie naszego zakładu.</p>" +
                "<p class='about-description'>Obecnie wykonujem głównie zlecenia stałe na polerowanie aluminium. Nasi kontrahenci cenią nas za naszą dyspozycyjność, elastyczność i pewność, że to co nam powierzą, zostanie wykonane w czasie i o określonej jakości.</p>" +
            "</div>"
        } else {
            if(window.innerWidth > mobile && window.innerWidth >= aboveMobSize)
            aboutWrapper.style.flexDirection = 'row';
            console.log('else')
            console.log(window.innerWidth);
        } */
    })
}