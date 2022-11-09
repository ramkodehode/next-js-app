import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Next Tutorial</title>
      </Head>
      <nav className={styles.navbar}>
        <Link href="/about">About</Link>
      </nav>

      <h1>Hello World</h1>
    </div>
  );
}
