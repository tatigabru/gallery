// [slug] goes for anything in home/meals/anything but not share
import Image from 'next/image';
import { notFound } from 'next/navigation';

import classes from './page.module.css'
import { getArt } from '@/lib/art';


export async function generateMetadata({ params }) {
  const meal = getArt(params.slug);

  if (!meal) {
    notFound();
  }
  
  return {
    title: meal.title
  };
}

export default function MealDetailsPage({ params }) {
  const art = getArt(params.slug);

  if (!art) {
    notFound();
  }

  return ( 
    <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={art.image} fill />
      </div>
      <div className={classes.headerText}>
        <h1>{art.title}</h1>
        <h2>{art.category}, $ {art.price}</h2>
        <p>{art.description} </p>
        <p>Size: 14 x 19 inch</p>
        <p>Exclusive: original artwork. Only one painting like this will ever exist</p>
      </div>
    </header>
    <main>
    </main>
  </>
  );
}
