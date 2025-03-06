import Image from 'next/image';

import meImg from '@/assets/icons/about-me.jpg';
import classes from './page.module.css';

export default function AboutPage() {
  return (
    <>
      <header className={classes.header}>
      </header>
      <main className={classes.about}>
      <Image src={meImg} alt="Me eyes" className="object-cover" />
        <h2>About me</h2>
        <p>todo</p>
      </main>
    </>
  );
}