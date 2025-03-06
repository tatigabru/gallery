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
  const meal = getArt(params.slug);

  if (!meal) {
    notFound();
  }

  return ( 
    <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={meal.image} fill />
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p>{meal.category}, $ {meal.price}</p>
        <p>todo details</p>
      </div>
    </header>
    <main>
    </main>
  </>
  );
}
