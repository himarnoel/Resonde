'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';

const Loading = ({ onLoadingComplete }) => {
  const lettersRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }
    });

    tl.set(lettersRef.current, { y: 100, opacity: 0 })
      .to(lettersRef.current, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.2,
      })
      .to(lettersRef.current, {
        opacity: 1,
        duration: 1.2,
      })
      .to(lettersRef.current, {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
      }, "+=0.5")
      .to(bgRef.current, {
        yPercent: -120,
        duration: 1.1,
      }, "-=0.2");
  }, []);

  return (
    <div ref={bgRef} className="bg-black fixed top-0 left-0 z-[9999] w-full h-screen text-white flex justify-center items-center overflow-hidden">
      <div className="flex space-x-2 text-5xl sofiaProBld font-bold">
        <h1 ref={el => lettersRef.current[0] = el}>Virtual</h1>
        <h1 ref={el => lettersRef.current[1] = el}>Garden</h1>
      </div>
    </div>
  );
};

export default Loading;
