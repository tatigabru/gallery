import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div className='hero'>
          <h1>Welcome to my gallery</h1>
          <p>Here you will find a range of artworks, </p>
          <p>including acrylics on canvas, watercolor sketches, </p>
          <p>nude sketches, and traditional sumi-e paintings.</p>
        </div>.
      </header>
    </>
  );
}
