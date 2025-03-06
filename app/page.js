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
          <h1>Text</h1>
        </div>
      </header>
      <main>
        <section className={classes.section}>
        </section>
      </main>
    </>
  );
}
