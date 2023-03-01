import { useRef } from "react";
import { gsap } from "gsap";
import planetImg from "../image/planet.png";
import { motion } from "framer-motion"; 

export const PlanetCircle = ({playAnimation=true}) => { 
  const parentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (playAnimation && parentRef.current && imageRef.current) {
      const redCircleBounds = parentRef.current.getBoundingClientRect();
      // рассчет позиции картинки в зависимости от движения мышки
      const planetX = event.clientX - redCircleBounds.left - imageRef.current.width / 2;
      const planetY = event.clientY - redCircleBounds.top - imageRef.current.height / 2;
      // анимация на новую позицию
      gsap.to(imageRef.current, {
        duration: 1,
        x: planetX,
        y: planetY,
        ease: "power2.out",
      });
      // если курсор выйдет за пределы круга, картинка возвращается на место
      if (
        event.clientX > redCircleBounds.left ||
        event.clientX < redCircleBounds.right ||
        event.clientY > redCircleBounds.bottom ||
        event.clientY < redCircleBounds.top
      ) {
        handleMouseLeave();
      }
    }
  };
  // функция выполняется когда курсор покидает круг
  const handleMouseLeave = () => {
    if (playAnimation && imageRef.current) {
      // анимация планеты в начальную позицию
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
      <div
        className="line-4"
        ref={parentRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="line-svg">
          {playAnimation && <div className="tag">
            <p>Q1 2023</p>
            <div className="tag-circle">
              <div className="tag-circle-orange"></div>
            </div>
          </div>}
          <svg width="500" height="500">
            <motion.path
              initial={playAnimation ? { pathLength: 0 } : {pathLength:1}}
              animate={playAnimation ? { pathLength: 1 }:{}}
              transition={{ duration: 3 }}
              className="motion-path"
              d="M250,40 A100,100 0 0,1 250,460"
              stroke="#E75626"
              fill="none"
              stroke-width="1"
            />
            <circle
              className="first-circle"
              cx="250"
              cy="40"
              r="5"
              fill="#E75626"
            />
            <motion.circle 
            initial={ playAnimation ? {
              scale:0,
              opacity:0
            } : {scale:1, opacity:1}}
            animate={{
              scale:1,
              opacity:1
            }}
            transition={{
              delay:1.4
            }}
            cx="460" cy="250" r="5" fill="#E75626" />
            <motion.circle 
            initial={playAnimation ? {
              scale:0,
              opacity:0
            } : {scale:1,opacity:1}}
            animate={playAnimation ? {
              scale:1,
              opacity:1
            } : {}}
            transition={{
              delay:2.9
            }}
            cx="250" cy="460" r="5" fill="#E75626" />
          </svg>
        </div>
        <div className="line-3">
          <div className="line-2">
            <div className="line-1">
              <img
                className="planet-img"
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
