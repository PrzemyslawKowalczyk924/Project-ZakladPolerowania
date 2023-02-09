export function resizerOfWidth() {
    const aboutWrapper = document.querySelector('.about-wrapper');
    const mobileS = 320;

    window.addEventListener('resize', () => {
        if(window.innerWidth >= mobileS) {
            console.log('BOOOOOOOOOOOOOM!')
            console.log(window.innerWidth)
        }
    })
    console.log(aboutWrapper);
}