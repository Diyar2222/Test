import { useRef } from "react";
import { gsap } from "gsap";
import planetImg from "../image/planet.png";
import {motion} from 'framer-motion'

export const PlanetCircle = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (parentRef.current && imageRef.current) {
      const redCircleBounds = parentRef.current.getBoundingClientRect();
        // calculate the planet's new position based on the mouse position
        const planetX = event.clientX - redCircleBounds.left - imageRef.current.width / 2;
        const planetY = event.clientY - redCircleBounds.top - imageRef.current.height / 2;
      // animate the planet to its new position
        gsap.to(imageRef.current, {
          duration: 1,
          x: planetX,
          y: planetY,
          ease: "power2.out",
        });
        // if mouse is outside of circle, planet goes back
        if(event.clientX > redCircleBounds.left 
          || event.clientX < redCircleBounds.right
          || event.clientY > redCircleBounds.bottom
          || event.clientY < redCircleBounds.top)
          {
            handleMouseLeave()
          }
    }
  };
  const handleMouseLeave = () => {
    if (imageRef.current) {
      // animate the planet back to its starting position
      gsap.to(imageRef.current, {
        duration: 1,
        x: 0,
        y: 0,
        ease: "power2.out",
      });
    }
  };
  return (
    <div>
      <div className="circle line-4"
      ref={parentRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
        <div className='planet-svg'>
        <div className='tag'>
          <p>Q1 2023</p>
          <div className="tag-circle">
            <div className="tag-circle-orange"></div>
          </div>
        </div>
      <svg width='500' height='500'>
      <motion.path className='motion-path'
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3 }}
          d="M250,40 A100,100 0 0,1 250,460" stroke="#E75626" fill="none" stroke-width="1"/>
          <circle className='first-circle' cx="250" cy="40" r="5" fill="#E75626"/>
          <circle cx="460" cy="250" r="5" fill="#E75626"/>
          <circle cx="250" cy="460" r="5" fill="#E75626"/>
      </svg>
          </div>
      <div className="circle line-3">
        <div className="circle line-2">
          <div className="circle line-1">
            <img
              className="circle planet-img"
              src={planetImg}
              alt="planet"
              ref={imageRef}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};