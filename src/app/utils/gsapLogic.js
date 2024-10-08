import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



// export const countAnimation = (element, start, end, duration, callback) => {
//   const countUp = (el, startValue, endValue, duration) => {
//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;

//     const update = () => {
//       const now = Date.now();
//       const progress = (now - startTime) / (endTime - startTime);
//       const value = Math.min(startValue + (endValue - startValue) * progress, endValue);
//       el.textContent = Math.floor(value);

//       if (now < endTime) {
//         requestAnimationFrame(update);
//       } else {
//         el.textContent = endValue;
//       }
//     };

//     update();
//   };

//   if (element) {
//     countUp(element, start, end, duration);
//     callback && callback(end);
//   }
// };



export const animationNegativeYAxis = (el, delay, trig) => {
    gsap.fromTo(el, 
        {
            y: -100,
            opacity: 0,
        }, 
        {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: delay,
            stagger: 0.5,
            scrollTrigger: {
                trigger: trig,
                start: 'top bottom',
                end: '+=150',
                toggleActions: 'play none none none',
            },
        });
};



export const animationPositiveYAxis = (el, delay, trig) => {
    gsap.fromTo(el, 
    {
        y: 100,
        opacity: 0,
    }, 
    {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        stagger: 0.5,
        scrollTrigger: {
            trigger: trig,
            start: 'top bottom',
            end: '+=150',
            toggleActions: 'play none none none',
        },
    });
}



export const backgroundAnimation = (el) => {
    gsap.fromTo(el, 
    {
        opacity: 0,
    }, 
    {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: el,
            // start: `top ${trig}`,
            toggleActions: 'play none none none',
        },
    });
}
 

export const opacityAnimation = (el, delay, trig) => {
    gsap.fromTo(el, 
    {
        opacity: 0,
    }, 
    {
        opacity: 1,
        duration: 1,
        delay: delay,
        scrollTrigger: {
            trigger: trig,
            start: 'top bottom',
            end: '+=150',
            toggleActions: 'play none none none',
        },
    });
}
