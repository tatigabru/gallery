import Link from 'next/link';
import Image from 'next/image';

import classes from './arts-item.module.css';

export default function ArtItem({ title, slug, image, category, price }) {
  return (
    <article className={classes.art}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill /> 
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{category}, ${price} </p>
        <div className={classes.actions}>
          <Link href={`/paintings/${slug}`}>Details</Link>
        </div>
      </div>
    </article>
  );
}