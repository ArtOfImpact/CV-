window.addEventListener("scroll", (e) => {
    document.body.style.cssText = `--scrollTop:${this.scrollY}px`
})


window.onload = function () {
    const parallax = document.querySelector(".aside")
    const header = document.querySelector(".header")

    if (header) {

        // const content = document.querySelector(".layers__header")
        // const beck = document.querySelector(".header-images__base")
        const middle = document.querySelector(".header-images__middle")
        const front = document.querySelector(".header-images__front")

        const forBeck = 40;
        const forMiddle = 40;
        const forFront = 20;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallax() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            positionX = positionX + (distX * speed)
            positionY = positionY + (distY * speed)

            // beck.style.cssText = `transform: translate(${positionX / forBeck}%,${positionY / forBeck}%);`;
            middle.style.cssText = `transform: translate(${positionX / forMiddle}%,${positionY / forMiddle}%);`;
            front.style.cssText = `transform: translate(${positionX / forFront}%,${positionY / forFront}%);`;

            requestAnimationFrame(setMouseParallax)
        }
        setMouseParallax()

        header.addEventListener("mousemove", (e) => {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        })
    }

    if (parallax) {

        // const content = document.querySelector(".parallax__container")
        // const beck = document.querySelector(".images-parallax__base")
        const middle = document.querySelector(".aside-images__middle")
        const front = document.querySelector(".aside-images__front")

        const forBeck = 40;
        const forMiddle = 40;
        const forFront = 20;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallax() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            positionX = positionX + (distX * speed)
            positionY = positionY + (distY * speed)

            // beck.style.cssText = `transform: translate(${positionX / forBeck}%,${positionY / forBeck}%);`;
            middle.style.cssText = `transform: translate(${positionX / forMiddle}%,${positionY / forMiddle}%);`;
            front.style.cssText = `transform: translate(${positionX / forFront}%,${positionY / forFront}%);`;

            requestAnimationFrame(setMouseParallax)
        }
        setMouseParallax()

        parallax.addEventListener("mousemove", (e) => {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        })

        // let thresholdSets = [];
        // for (let i = 0; i <= 1.0; i += 0.005) {
        //     thresholdSets.push(i);
        // }
        // const callbaсk = function (entries, obsercer) {
        //     const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
        //     setParallaxItemStyle(scrollTopProcent);
        // };

        // const observer = new IntersectionObserver(callbaсk, {
        //     threshold: thresholdSets
        // });

        // observer.observe(document.querySelector('.parallax'));
        // // articless'
        // function setParallaxItemStyle(scrollTopProcent) {
        //     content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
        //     middle.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;
        //     front.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
        // }
    }
}

