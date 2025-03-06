import { Suspense } from 'react';

import classes from './page.module.css';
import ArtGrid from '@/components/meals/arts-grid';
import { getArts } from '@/lib/art';


export const metadata = {
  title: 'Tati Gabru art',
  description: 'Paintings : acrylic, watercolor, sumi-e, nude paints',
};


async function Paintings(){
  const paintings = await getArts();

  return  <ArtGrid meals={paintings} />
}

export default function PaintingsPage() {
 
  return (
    <>
      <header className={classes.header}>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <Paintings />
        </Suspense>  
      </main>
    </>
  );
}