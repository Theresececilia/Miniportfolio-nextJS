'use client'
import styles from './page.module.css'
import Link from 'next/link'
import { Nunito } from 'next/font/google'


const nunito = Nunito({ subsets: ['latin'], weight: ['300'] })

export default function Home() {
  return (
    <main className={styles.main}>
    <div className={nunito.className}>
      <h1 className={styles.name} >Luna Grace</h1>
      <p className={styles.title}>Frontend Developer</p>
        <a  href="mailto:therese@lunagrace.tech" className={styles.btn} >Contact</a>
      </div>
    </main>
  )
}