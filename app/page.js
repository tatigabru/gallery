import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.hero}> title</h1>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
      </header>
      <main>
        <section className={classes.section}>
        </section>
      </main>
    </>
  );
}
