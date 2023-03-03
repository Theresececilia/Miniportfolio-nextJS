import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
    <div className="header-text toshow">
      <h1 className={styles.name} >Luna Grace</h1>
      <p className={styles.title}>Frontend Developer</p>
        <button className={styles.btn} >My Work</button>
      </div>
    </main>
  )
}