import './globals.css'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Miniportfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className={styles.navbar}>
      <div className={styles.innerNav}>
      <Link href="/"> 
       <Image src="/luna_logo.png" alt="Picture of the author"
        width={70} height={70} />
      </Link>
      </div>
      <div className={styles.innerNav}>
        <Link href="/projects" className={styles.projectLink} >Projects</Link>
        <p>/</p>
        <Link href="/about" className={styles.projectLink} >About Me</Link>
      </div>
    </div>
        {children}
        </body>
    </html>
  )
}