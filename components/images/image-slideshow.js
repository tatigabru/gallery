
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import sailingImg from '@/assets/sailing-800x800.jpg';
import sakuraImg from '@/assets/sakura-800x800.jpg';
import sumieTigerImg from '@/assets/sumie-tiger-800x800.jpg';
import sunsetImg from '@/assets/sunset-800x800.jpg';
import nudeImg from '@/assets/nude-800x800.jpg';
import sumieHeronsImg from '@/assets/sumie-herons-800x800.jpg';
import watercolorOaksImg from '@/assets/watercolor-oaks-800x800.jpg';
import classes from './image-slideshow.module.css';

const images = [
  { image: sailingImg, alt: 'Sailing boats' },
  { image: sakuraImg, alt: 'Sakura cherry blossoms' },
  { image: sumieTigerImg, alt: 'Sumie tiger painting' },
  { image: sunsetImg, alt: 'Sunset at the sea' },
  { image: nudeImg, alt: 'Nude painting' },
  { image: sumieHeronsImg, alt: 'Sumie herons painting' },
  { image: watercolorOaksImg, alt: 'Watercolor painting of oak trees' }
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
