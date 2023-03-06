import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function about() {
  return (
    <>
      <div className={styles.aboutContainer}>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>About Me</h1>
        <p>Hi, i'm Therese! I am a Frontend Developer under the name of Luna Grace.
          Currently located in Stockholm, Sweden. 
          <br/>
          In January 2022 I found codecademy. Outside of my full-time job I studied <span
          className={styles.languages}>Math</span> along with frontend developer essentials.
          Since Mars 2022 i've created art with a javascript libary called <span
          className={styles.languages}>p5.js</span>.
          <br/>
          In September 2022 I joined the Frontend developer program on <a href="https://cmeducations.se"
          className="page-link" target="_blank">Changemaker educations.</a>
           They have provided me knowledge about:
        </p> 
        <ul className={styles.list}>
          <li className={styles.languages}>HTML</li>
          <li className={styles.languages}>CSS</li>
          <li className={styles.languages}>Javascript</li> 
          <li className={styles.languages}>Webdesign</li>
          <li className={styles.languages}>Git & Github</li>
          <li className={styles.languages}>Node & npm</li> 
          <li className={styles.languages}>jQuery</li>
          <li className={styles.languages}>API</li>
          <li className={styles.languages}>Figma</li>
          <li className={styles.languages}>React</li>
          <li className={styles.languages}>Next.js</li>

        </ul>
      </div>
        <Image className={styles.headshot} src="/meBW.png" alt="Picture of me." width={290} height={300} />
    </div>
   </> 
  )
}
