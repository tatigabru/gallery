'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logoImg from '@/assets/icons/tatigabru1000.png';
import classes from './main-header.module.css';

export default function MainHeader() {
  const path = usePathname();

  return (
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="tati gabru" />
        </Link>

        <nav className={classes.nav}>
        <ul>
            <li>
                <Link href="/paintings" className={path.startsWith('/paintings') ? classes.active : undefined}>Paintings</Link>
            </li>
            <li>
                <Link href="/about" className={path.startsWith('/about') ? classes.active : undefined}>About me</Link>
            </li>
        </ul>
        </nav>
    </header>
  );
}