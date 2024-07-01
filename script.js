// script.js

anime({
    targets: '.stars',
    translateX: [
        { value: -100, duration: 1000 },
        { value: 100, duration: 1000 },
        { value: 0, duration: 1000 }
    ],
    loop: true,
    easing: 'easeInOutQuad'
});

anime({
    targets: '.tulips',
    opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 1000 }
    ],
    translateY: [
        { value: 50, duration: 1000 },
        { value: 0, duration: 1000 }
    ],
    delay: 3000
});
