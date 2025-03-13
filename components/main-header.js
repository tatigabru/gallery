'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
//import { useSession, signIn, signOut } from 'next-auth/react';

import logoImg from '@/assets/icons/tatigabru1000.png';
import classes from './main-header.module.css';

export default function MainHeader() {
  const path = usePathname();
  //const { data: session, status } = useSession();
  //const loading = status === 'loading';

  return (
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="tati gabru" />
        </Link>

        <nav className={classes.nav}>
        <ul>
            <li>
                <Link href="/paintings" className={path.startsWith('/paintings') ? classes.active : undefined}>Gallery</Link>
            </li>
            <li>
                <Link href="/about" className={path.startsWith('/about') ? classes.active : undefined}>About</Link>
            </li>
            <li>
                <Link href="/contact" className={path.startsWith('/contact') ? classes.active : undefined}>Contact</Link>
            </li>
        </ul>
        </nav>
    </header>
  );
}