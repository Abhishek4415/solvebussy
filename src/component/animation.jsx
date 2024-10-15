// // src/Animation.js
// import React from 'react';
// import Lottie from 'react-lottie';
// import animationData from './animation.json'; // Adjust the path if your JSON file is in a different location
import "../style/animation.css";

// const Animation = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice',
//     }
//   };



//   return <div className="animation" style={{position:"relative", transform:`translate(${scrollY}px)`}} >
//   <Lottie options={defaultOptions}  />
//   </div>
// };

// export default Animation;


//second part i need

import a from '../assets/image (1).png';
import b from '../assets/image (2).png';
import e from '../assets/image (3).png';

const images = [
  a,
  b,
  e,
  
  

];

const AnimatedImage = ({ src, index }) => {
  

  return (
    <img src={src} alt={`Image ${index + 1}`} className="animated-image"  />
  );
}


export default function Animation() {



  return (
    <div className="animation" style={{ transform:`translate(${scrollY}px)`}}>
      {images.map((src, index) => (
        <AnimatedImage key={index} src={src} index={index} />
      ))}
    </div>
  )
}
